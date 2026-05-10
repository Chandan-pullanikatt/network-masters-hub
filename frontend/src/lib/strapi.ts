const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || process.env.STRAPI_TOKEN;

export async function getStrapiData(path: string, params?: Record<string, any>, fetchOptions: RequestInit = {}) {
    const query = params ? `?${new URLSearchParams(params).toString()}` : '';
    
    // In production, we MUST have a token. Locally, we fall back to the one in .env.local
    const token = STRAPI_TOKEN || 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';
    
    const url = `${STRAPI_URL}/api${path}${query}`;
    
    try {
        const defaultOptions: RequestInit = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
        } as any; // Next.js specific fetch options

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout to beat Netlify 10s limit

        const res = await fetch(url, { 
            ...defaultOptions, 
            ...fetchOptions,
            signal: controller.signal 
        });
        
        clearTimeout(timeoutId);

        if (!res.ok) {
            let errorDetails = '';
            try {
                errorDetails = await res.text();
            } catch (e) {
                errorDetails = 'Could not parse error body';
            }
            console.error(`[Strapi API Error] ${res.status} ${res.statusText}`);
            console.error(`[URL] ${url}`);
            console.error(`[Details] ${errorDetails}`);
            throw new Error(`Failed to fetch from Strapi: ${path} (${res.status})`);
        }

        return await res.json();
    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.error(`[Timeout Error] Strapi request timed out for ${url}`);
        } else if (error.message?.includes('fetch')) {
            console.error(`[Connection Error] Could not reach Strapi at ${url}`);
        } else {
            // Error was already logged above if it was a status error
        }
        throw error;
    }
}

export function getStrapiURL(path: string) {
    return `${STRAPI_URL}${path}`;
}

export function getStrapiMedia(media: any): string | null {
    if (!media) return null;
    
    // Strapi 5: flat object with url directly
    // Strapi 4: media.data.attributes.url or media.attributes.url
    const url = media?.url 
        || media?.data?.attributes?.url 
        || media?.data?.url
        || media?.attributes?.url;
    
    if (!url) return null;

    // If it's already an absolute URL (e.g. from Cloudinary), return as is
    if (url.startsWith('http')) return url;

    // Otherwise, prepend the Strapi URL
    // Strip trailing slash from STRAPI_URL if present, and ensure url starts with slash
    const baseUrl = STRAPI_URL.endsWith('/') ? STRAPI_URL.slice(0, -1) : STRAPI_URL;
    const normalizedPath = url.startsWith('/') ? url : `/${url}`;
    
    return `${baseUrl}${normalizedPath}`;
}

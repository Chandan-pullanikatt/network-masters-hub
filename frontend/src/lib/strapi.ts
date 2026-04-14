const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function getStrapiData(path: string, params?: Record<string, any>) {
    const query = params ? `?${new URLSearchParams(params).toString()}` : '';
    // Hardcoded for immediate fix, will move back to env once verified
    const token = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';
    
    const res = await fetch(`${STRAPI_URL}/api${path}${query}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error(`ERROR FETCHING STRAPI: ${res.status} ${res.statusText}`);
        console.error(`URL: ${STRAPI_URL}/api${path}${query}`);
        console.error(`BODY: ${errorBody}`);
        throw new Error(`Failed to fetch data from Strapi: ${path} (${res.status})`);
    }

    return await res.json();
}

export function getStrapiURL(path: string) {
    return `${STRAPI_URL}${path}`;
}

export function getStrapiMedia(media: any): string | null {
    if (!media) return null;
    
    // Strapi 5: flat object with url directly
    // Strapi 4: media.data.attributes.url
    const url = media?.url 
        || media?.data?.attributes?.url 
        || media?.data?.url
        || media?.attributes?.url;
    
    if (!url) return null;
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

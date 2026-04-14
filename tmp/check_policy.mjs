

const STRAPI_URL = 'http://127.0.0.1:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

async function test() {
    const endpoints = [
        '/api/policy-pages',
        '/api/policy-pages?filters[slug][$eq]=privacy-policy',
        '/api/policy-pages?filters[slug][$eq]=privacy',
        '/api/policy-pages?filters[slug][$eq]=privacy-policy&populate=*',
    ];
    
    for (const endpoint of endpoints) {
        console.log(`\nTesting: ${endpoint}`);
        try {
            const res = await fetch(`${STRAPI_URL}${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            console.log(`Status: ${res.status} ${res.statusText}`);
            if (res.ok) {
                const data = await res.json();
                console.log(`Data count: ${data.data?.length || 0}`);
                if (data.data && data.data.length > 0) {
                    const entry = data.data[0];
                    const attrs = entry.attributes || entry;
                    console.log(`Attributes found: ${Object.keys(attrs).join(', ')}`);
                    if (attrs.content) {
                        console.log(`Content field detected: ${attrs.content.substring(0, 50)}...`);
                    }
                    if (attrs.sections) {
                        console.log(`Sections field detected: ${Array.isArray(attrs.sections) ? attrs.sections.length : 'not an array'} entries`);
                    }
                }
            } else {
                const err = await res.text();
                console.log(`Error body: ${err}`);
            }
        } catch (e) {
            console.error(`Fetch failed: ${e.message}`);
        }
    }
}

test();

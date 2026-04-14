const STRAPI_URL = 'http://localhost:1337';

async function test() {
    const endpoints = ['/api/landing-page', '/api/courses'];
    
    for (const endpoint of endpoints) {
        console.log(`Testing: ${STRAPI_URL}${endpoint}`);
        try {
            const res = await fetch(`${STRAPI_URL}${endpoint}`);
            console.log(`Status: ${res.status} ${res.statusText}`);
            if (res.ok) {
                const data = await res.json();
                console.log(`Data: ${JSON.stringify(data).substring(0, 100)}...`);
            } else {
                const err = await res.text();
                console.log(`Error body: ${err}`);
            }
        } catch (e) {
            console.error(`Fetch failed: ${e.message}`);
        }
        console.log('---');
    }
}

test();

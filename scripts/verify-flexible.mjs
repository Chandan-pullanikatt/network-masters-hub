const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';
const STRAPI_URL = 'http://localhost:1337/api';

async function verify() {
    const res = await fetch(`${STRAPI_URL}/courses?filters[isFlexible][$eq]=true`, {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    });
    const json = await res.json();
    console.log(`Found ${json.data.length} flexible courses.`);
    json.data.forEach(c => {
        console.log(`- ${c.attributes.title} (Slug: ${c.attributes.slug}, Price: ${c.attributes.flexiblePrice})`);
    });
}

verify();

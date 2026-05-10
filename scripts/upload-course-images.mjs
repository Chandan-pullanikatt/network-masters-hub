import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const TOKEN = process.env.STRAPI_TOKEN || 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';
const ASSETS_DIR = path.join(__dirname, '..', 'frontend', 'public', 'assets');

const COURSE_MAPPING = [
    { slug: 'ccna-200-301', filename: 'p1.webp', mime: 'image/webp' },
    { slug: 'ccnp-enterprise', filename: 'p2.webp', mime: 'image/webp' },
    { slug: 'cisco-sd-wan', filename: 'p3.webp', mime: 'image/webp' },
    { slug: 'python-automation', filename: 'p4.webp', mime: 'image/webp' },
    { slug: 'ccna-ccnp-combo', filename: 'p5.webp', mime: 'image/webp' }
];

function buildMultipart(filename, mime, buffer) {
    const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
    const head = Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="files"; filename="${filename}"\r\nContent-Type: ${mime}\r\n\r\n`
    );
    const tail = Buffer.from(`\r\n--${boundary}--\r\n`);
    return { body: Buffer.concat([head, buffer, tail]), boundary };
}

async function uploadLocalFile(filename, mime) {
    const filePath = path.join(ASSETS_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`  ⚠️  File NOT found: ${filePath}`);
        return null;
    }
    const buffer = fs.readFileSync(filePath);
    console.log(`  ⬆️  Uploading: ${filename} (${buffer.length} bytes)`);
    
    const { body, boundary } = buildMultipart(filename, mime, buffer);
    const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
            'Content-Length': String(body.length)
        },
        body
    });
    const uploadData = await uploadRes.json();
    if (Array.isArray(uploadData) && uploadData[0]?.id) {
        console.log(`  ✅ Uploaded ID: ${uploadData[0].id}`);
        return uploadData[0].id;
    }
    return null;
}

async function linkToCourse(slug, imageId) {
    const findRes = await fetch(`${STRAPI_URL}/api/courses?filters[slug][$eq]=${slug}`, {
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    });
    const found = await findRes.json();
    const course = found.data?.[0];
    if (!course) return;

    await fetch(`${STRAPI_URL}/api/courses/${course.documentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` },
        body: JSON.stringify({ data: { image: imageId, publishedAt: new Date() } })
    });
    console.log(`  🔗 Linked to: ${slug}`);
}

async function run() {
    console.log(`🚀 Syncing Correct Thumbnails to ${STRAPI_URL}...\n`);
    for (const item of COURSE_MAPPING) {
        const imageId = await uploadLocalFile(item.filename, item.mime);
        if (imageId) await linkToCourse(item.slug, imageId);
        console.log('');
    }
    console.log('🏁 Success! All course thumbnails are now correct.');
}

run().catch(console.error);

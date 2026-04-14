import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRAPI_URL = 'http://localhost:1337';
const ASSETS_DIR = path.join(__dirname, '../frontend/public/assets');
const MAP_FILE = path.join(__dirname, 'media-map.json');
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

async function syncMedia() {
    console.log('🚀 Starting Authorized Media Sync to Strapi Media Library...');
    
    if (!fs.existsSync(ASSETS_DIR)) {
        console.error('❌ Assets directory not found:', ASSETS_DIR);
        return;
    }

    const files = fs.readdirSync(ASSETS_DIR);
    const mediaMap = {};

    // Load existing map if any
    if (fs.existsSync(MAP_FILE)) {
        Object.assign(mediaMap, JSON.parse(fs.readFileSync(MAP_FILE, 'utf-8')));
    }

    for (const file of files) {
        if (file.startsWith('.') || file.endsWith('.md')) continue;

        if (mediaMap[file]) {
            console.log(`⏩ Skipping ${file} (already in map)`);
            continue;
        }

        console.log(`📤 Uploading: ${file}...`);
        
        try {
            const filePath = path.join(ASSETS_DIR, file);
            const formData = new FormData();
            
            // Read file as blob
            const fileBuffer = fs.readFileSync(filePath);
            const blob = new Blob([fileBuffer]);
            formData.append('files', blob, file);

            const response = await fetch(`${STRAPI_URL}/api/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                const id = result[0].id;
                mediaMap[file] = id;
                console.log(`✅ Uploaded ${file} -> ID: ${id}`);
                fs.writeFileSync(MAP_FILE, JSON.stringify(mediaMap, null, 2));
            } else {
                const err = await response.json();
                console.error(`❌ Failed to upload ${file}:`, JSON.stringify(err, null, 2));
            }
        } catch (error) {
            console.error(`❌ Error uploading ${file}:`, error.message);
        }
    }

    console.log('🏁 All photos synced successfully! Map saved to scripts/media-map.json');
}

syncMedia();

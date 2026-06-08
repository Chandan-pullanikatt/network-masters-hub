import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, '.tmp/data.db'));

const CLOUDINARY_CLOUD = 'dtj4yxkeo';
const CLOUDINARY_KEY = '766125154822275';
const CLOUDINARY_SECRET = 'FAUOAMgMghZMisQ06xkO9XL-qhE';

// course numeric id → cloudinary public_id
const assignments = [
  { courseId: 44, publicId: 'p1_j3oa4t', version: '1779185785' },
  { courseId: 45, publicId: 'p3_aoeccr', version: '1779185785' },
  { courseId: 46, publicId: 'p5_zerrz7', version: '1779185785' },
  { courseId: 49, publicId: 'chat-images/4b22c495-5769-4fbb-a26c-00e65e76abfd/hqq7ryndiha3bajwtntd', version: '1778473958' },
  { courseId: 52, publicId: 'p5_zerrz7', version: '1779185785' },
];

function genDocumentId() {
  return crypto.randomBytes(14).toString('base64url').slice(0, 24).toLowerCase();
}

async function getCloudinaryMeta(publicId) {
  const auth = Buffer.from(`${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}`).toString('base64');
  const encodedId = encodeURIComponent(publicId);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/resources/image/upload/${encodedId}`,
    { headers: { Authorization: `Basic ${auth}` } }
  );
  if (!res.ok) throw new Error(`Cloudinary meta failed for ${publicId}: ${res.status}`);
  return res.json();
}

function insertFile(meta, publicId, version) {
  const secureUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/v${version}/${publicId}.webp`;
  const filename = publicId.split('/').pop() + '.webp';
  const now = new Date().toISOString();

  const providerMeta = {
    public_id: publicId,
    resource_type: 'image',
  };

  const stmt = db.prepare(`
    INSERT INTO files
      (document_id, name, alternative_text, caption, focal_point, width, height, formats,
       hash, ext, mime, size, url, preview_url, provider, provider_metadata,
       folder_path, created_at, updated_at, published_at)
    VALUES
      (?, ?, NULL, NULL, NULL, ?, ?, NULL,
       ?, ?, ?, ?, ?, NULL, ?, ?,
       '/', ?, ?, ?)
  `);

  const result = stmt.run(
    genDocumentId(),
    filename,
    meta.width || null,
    meta.height || null,
    publicId,       // hash
    '.webp',
    'image/webp',
    (meta.bytes || 0) / 1024,
    secureUrl,
    'cloudinary',
    JSON.stringify(providerMeta),
    now, now, now
  );

  return result.lastInsertRowid;
}

function linkFileToCoourse(fileId, courseId) {
  // Remove any existing image relation for this course first
  db.prepare(`DELETE FROM files_related_mph WHERE related_id = ? AND related_type = 'api::course.course' AND field = 'image'`).run(courseId);

  db.prepare(`
    INSERT INTO files_related_mph (file_id, related_id, related_type, field, "order")
    VALUES (?, ?, 'api::course.course', 'image', 1)
  `).run(fileId, courseId);
}

async function main() {
  // dedupe: only fetch each publicId once
  const fetched = new Map();

  for (const { courseId, publicId, version } of assignments) {
    console.log(`\nCourse ${courseId} ← ${publicId}`);

    let fileId;
    if (fetched.has(publicId)) {
      fileId = fetched.get(publicId);
      console.log(`  Reusing file ID ${fileId}`);
    } else {
      console.log(`  Fetching metadata from Cloudinary...`);
      const meta = await getCloudinaryMeta(publicId);
      fileId = insertFile(meta, publicId, version);
      fetched.set(publicId, fileId);
      console.log(`  Inserted file ID ${fileId} (${meta.width}x${meta.height}, ${(meta.bytes/1024).toFixed(1)}KB)`);
    }

    linkFileToCoourse(fileId, courseId);
    console.log(`  ✓ Linked to course`);
  }

  console.log('\nAll done! Restart Strapi to see changes.');
  db.close();
}

main().catch(err => { console.error(err); process.exit(1); });

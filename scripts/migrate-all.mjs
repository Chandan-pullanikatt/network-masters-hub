import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRAPI_URL = 'http://localhost:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';
const MAP_FILE = path.join(__dirname, 'media-map.json');

const mediaMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf-8'));
const getMediaId = (filename) => mediaMap[filename] || null;

async function request(path, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    };
    if (body) {
        body.publishedAt = new Date();
        options.body = JSON.stringify({ data: body });
    }
    const res = await fetch(`${STRAPI_URL}/api${path}`, options);
    return await res.json();
}

const courses = [
    { title: "Cisco CCNA 200–301 Course (Training & Certificate)", slug: "ccna-200-301", duration: "7 Weeks", modules: 6, videoHours: 60, imageFile: "ccna-thumb.jpeg" },
    { title: "CCNP (Encor and Enarsi) Online Training Course", slug: "ccnp-enterprise", duration: "12 Weeks", modules: 10, videoHours: 120, imageFile: "ccnp-thumb.jpeg" },
    { title: "Cisco SD-WAN Online Course | Get Lifetime Access", slug: "cisco-sd-wan", duration: "4 Weeks", modules: 6, videoHours: 40, imageFile: "sd-wan.png" },
    { title: "Complete Network Automation Online Course for Network Engineers", slug: "python-automation", duration: "4 Weeks", modules: 6, videoHours: 40, imageFile: "automation-thumb.jpeg" },
    { title: "CCNA & CCNP Combo Batch", slug: "ccna-ccnp-combo", duration: "16 Weeks", modules: 16, videoHours: 180, imageFile: "combo-thumb.jpeg" }
];

async function runMigration() {
    console.log('🚀 Final Sync: Publishing Everything with Photos...');

    // 1. Course Sync
    for (const course of courses) {
        const imageId = getMediaId(course.imageFile);
        const courseData = { ...course, image: imageId };
        
        const existing = await request(`/courses?filters[slug][$eq]=${course.slug}`);
        if (existing.data && existing.data.length > 0) {
            await request(`/courses/${existing.data[0].id}`, 'PUT', courseData);
        } else {
            await request('/courses', 'POST', courseData);
        }
    }
    console.log('✅ All Courses Updated & Published with Photos.');

    // 2. Landing Page Sync
    const landingPageData = {
        hero: {
            title: "Connect | Configure | Conquer",
            subtitle: "Join India's Most Trusted IT Training Hub.",
            badge: "Enrollment Open for March 2026",
            image: getMediaId('logo.jpeg')
        },
        features_title: "Why Learners Choose us",
        features_desc: "A minimalist, modern approach to networking education focused on outcomes.",
        features_list: [
            { icon: "Monitor", title: "Live Learning", desc: "Engage with Live Learning. Clear Your Doubts Instantly in our Interactive Sessions. Join us for a Fun and Immersive Learning Experience." },
            { icon: "ShieldCheck", title: "Unlimited Lab Access", desc: "Practice Anytime, Anywhere. Perfect Your Skills Through Repetitive Practice." },
            { icon: "UserCheck", title: "Mentorship", desc: "Personalized Mentorship. Receive Individualized Guidance at Network Masters Hub. Let Our Advisors Help You Choose the Perfect Course Based on Your Skills and Interests." },
            { icon: "Video", title: "On-Demand Video", desc: "On-Demand Video Learning. Dive into the Latest Syllabus with Pre-Recorded Videos. Available 24/7. Enhance Your Understanding with Quizzes, Assignments, and Detailed Feedback." }
        ],
        steps_title: "Start Learning with Network Masters Hub in Just 3 Simple Steps",
        steps_desc: "A structured, flexible approach designed to take you from enrollment to industry-ready with clarity and confidence.",
        steps_list: [
            { icon: "UserCircle", title: "Create Your Free Account", desc: "Sign up with your email in just a few seconds." },
            { icon: "BookOpen", title: "Choose the Right Course", desc: "Explore our wide range of courses and enroll." },
            { icon: "GraduationCap", title: "Begin Your Learning Journey", desc: "Dive into lessons, quizzes, and earn certificates." }
        ]
    };
    await request('/landing-page', 'PUT', landingPageData);
    console.log('✅ Landing Page Updated & Published with Logo.');

    console.log('🏁 ALL PHOTOS ARE NOW LIVE! Refresh your browser.');
}

runMigration().catch(console.error);

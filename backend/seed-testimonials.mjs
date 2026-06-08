// Seed the 9 landing-page testimonials into Strapi (production) via the REST API.
//
// Usage:
//   STRAPI_URL=https://network-masters-hub-pkkk.onrender.com \
//   STRAPI_TOKEN=<full-access token> \
//   node seed-testimonials.mjs
//
// Idempotent: skips any testimonial whose `name` already exists, so it is safe
// to re-run. Entries are created already published (Strapi v5 + full-access token).

const STRAPI_URL = (process.env.STRAPI_URL || 'https://network-masters-hub-pkkk.onrender.com').replace(/\/$/, '');
const TOKEN = process.env.STRAPI_TOKEN;

if (!TOKEN) {
  console.error('Missing STRAPI_TOKEN env var.');
  process.exit(1);
}

// Source of truth: frontend/src/components/sections/Testimonials.tsx ("Success Stories" grid)
const testimonials = [
  { name: "Riya Bhardwaj", role: "CCNA Student", message: "Before joining the CCNA batch, networking concepts felt confusing and too technical. The structured lab sessions and practical topology explanations changed everything for me. Subnetting, VLANs, routing protocols — all became simple when practiced live. I didn’t just prepare for an exam; I built real networking confidence." },
  { name: "Anant Raj", role: "Network Automation Student", message: "Before this course, automation felt intimidating. But learning Python basics along with network automation tools made everything smooth. Seeing configurations get deployed automatically was a game changer. It helped me understand where the networking industry is heading." },
  { name: "Rahul Srivastava", role: "CCNP Student", message: "CCNP always felt like a difficult milestone, but the way advanced routing protocols like OSPF, EIGRP, and BGP were explained made it manageable. Complex topics were broken into small, understandable parts. The real-world scenarios shared during the sessions gave me industry-level clarity." },
  { name: "Samrat", role: "CCNA Student", message: "What I loved most about the CCNA course was the hands-on approach. Every concept was followed by lab implementation. Instead of memorizing commands, we understood why we were configuring them. Today, I can troubleshoot basic network issues confidently in real environments." },
  { name: "Ritesh Yadav", role: "CCNP Student", message: "The CCNP batch didn’t just focus on certification. We worked on multi-layer switching, redundancy protocols, and enterprise-level network designs. The troubleshooting approach taught here helped me think like a real network engineer rather than just a student preparing for exams." },
  { name: "Sneha Verma", role: "SD-WAN Student", message: "SD-WAN sounded complex initially, but the step-by-step explanation of architecture, controllers, policies, and real deployment scenarios made it simple. The labs gave me clarity on how enterprise WAN environments are evolving. This course truly upgraded my understanding of modern networking." },
  { name: "Karthik Reddy", role: "CCNA + CCNP Student", message: "Joining the combo batch was the best decision. The transition from fundamentals to advanced concepts was very smooth. The structured roadmap ensured that I didn’t miss any foundational clarity while moving towards advanced networking. It felt like a complete career transformation program." },
  { name: "Harsh Sharma", role: "Course Student", message: "The trainer has a unique way of simplifying even the most complicated networking concepts. Real-life examples, whiteboard explanations, and lab-based demonstrations made learning very engaging. Doubts were cleared patiently, no matter how basic they seemed." },
  { name: "Rihatik Kumar", role: "Network Student", message: "Earlier, I hesitated to touch live devices. But after practicing structured labs repeatedly, I developed the confidence to configure routers and switches without fear. The practical exposure reduced my nervousness during interviews and real-time troubleshooting." },
];

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

async function getExistingNames() {
  const res = await fetch(`${STRAPI_URL}/api/testimonials?pagination[pageSize]=100`, { headers });
  if (!res.ok) throw new Error(`Fetch existing failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return new Set((json.data || []).map((t) => t.name));
}

async function main() {
  console.log(`Target: ${STRAPI_URL}`);
  const existing = await getExistingNames();
  console.log(`Existing testimonials: ${existing.size}`);

  let created = 0;
  let skipped = 0;
  for (const t of testimonials) {
    if (existing.has(t.name)) {
      console.log(`  ⏭  ${t.name} — already exists, skipping`);
      skipped++;
      continue;
    }
    const res = await fetch(`${STRAPI_URL}/api/testimonials`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data: t }),
    });
    if (!res.ok) {
      console.error(`  ✗ ${t.name} — ${res.status} ${await res.text()}`);
      continue;
    }
    const json = await res.json();
    console.log(`  ✓ ${t.name} (id ${json.data.id}, published ${!!json.data.publishedAt})`);
    created++;
  }

  console.log(`\nDone. Created ${created}, skipped ${skipped}.`);
}

main().catch((err) => { console.error(err); process.exit(1); });

const STRAPI_URL = 'http://localhost:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

async function request(path, method = 'GET', body = null) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` }
    };
    if (body) {
        body.publishedAt = new Date();
        options.body = JSON.stringify({ data: body });
    }
    const res = await fetch(`${STRAPI_URL}/api${path}`, options);
    const json = await res.json();
    if (!res.ok) console.error('API Error:', res.status, JSON.stringify(json?.error));
    return json;
}

async function upsert(collection, slugField, slug, data) {
    const existing = await request(`/${collection}?filters[${slugField}][$eq]=${slug}`);
    if (existing.data && existing.data.length > 0) {
        const docId = existing.data[0].documentId || existing.data[0].id;
        return request(`/${collection}/${docId}`, 'PUT', data);
    } else {
        return request(`/${collection}`, 'POST', data);
    }
}

// ─── TERMS & CONDITIONS ────────────────────────────────────────────────────
const termsContent = `
<p>Please read these terms and conditions carefully before using our platform. By accessing Network Masters Hub, you agree to be bound by these provisions designed to protect our educational integrity and your user experience.</p>

<h3>1. Use of Website</h3>
<p>Network Masters Hub provides specialized IT and Networking education services. Access to this platform is granted under the following conditions:</p>
<ul>
  <li><strong>Educational Purpose:</strong> The content provided is strictly for individual learning and skill development in the field of Information Technology.</li>
  <li><strong>Prohibition of Resale:</strong> Users are strictly prohibited from reselling, redistributing, or sub-licensing any course material, lab access, or proprietary configurations.</li>
  <li><strong>Account Misuse:</strong> Shared credentials or concurrent logins from multiple geographic locations may result in automatic account suspension without refund.</li>
  <li><strong>Ethical Hacking:</strong> Use of our virtual labs for malicious activities against external systems is strictly forbidden and will be reported to authorities.</li>
</ul>

<h3>2. Enrollment & Access</h3>
<p>Your enrollment in our programs constitutes a contractual agreement between you and Network Masters Hub regarding the following terms:</p>
<h4>PAYMENTS</h4>
<p>All course fees must be paid in full prior to gaining access to restricted modules. We utilize secure payment gateways; no financial data is stored on our local servers.</p>
<h4>DURATION</h4>
<p>Standard enrollment provides 12 months of access unless otherwise specified in your specific tier of purchase.</p>
<p>We reserve the right to modify course content, update lab topologies, and retire outdated material to ensure our curriculum remains aligned with industry certifications (Cisco, Juniper, CompTIA, etc.).</p>

<h3>3. Intellectual Property</h3>
<p>All materials including but not limited to high-definition video lectures, proprietary network diagrams, downloadable workbooks, source code, and company logos are the exclusive intellectual property of Network Masters Hub. Unauthorized duplication, screen recording, or automated scraping of our content is a violation of international copyright laws.</p>

<h3>4. Limitation of Liability</h3>
<table border="1" style="width:100%; border-collapse:collapse; margin-bottom:16px;">
  <thead><tr><th style="padding:8px; background:#003366; color:white;">Category</th><th style="padding:8px; background:#003366; color:white;">Disclaimer Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;"><strong>Exam Results</strong></td><td style="padding:8px;">Enrollment does not guarantee passing scores on official certification exams (CCNA, CCNP, etc.).</td></tr>
    <tr><td style="padding:8px;"><strong>Career Outcomes</strong></td><td style="padding:8px;">We do not guarantee job placement, salary increases, or specific employment offers post-completion.</td></tr>
    <tr><td style="padding:8px;"><strong>Technical Issues</strong></td><td style="padding:8px;">We are not liable for outages caused by user-end ISP issues or third-party cloud provider failures.</td></tr>
  </tbody>
</table>

<h3>5. Modifications</h3>
<p>Network Masters Hub reserves the right to periodically update these Terms & Conditions to reflect changes in legal requirements or our service offerings. We will notify active students of significant changes via the email address associated with their account. Continued use of the website after such changes constitutes your acceptance of the new terms.</p>
`;

// ─── REFUND POLICY ────────────────────────────────────────────────────────
const refundContent = `
<p>At Network Masters Hub, we strive to provide world-class IT education. We strongly recommend all prospective students to thoroughly review course details, syllabus, and prerequisites before completing enrollment.</p>

<h3>Strict No-Refund Policy</h3>
<p>Due to the immediate access to proprietary course materials, curriculum frameworks, and instructor schedules, Network Masters Hub maintains a <strong>Strict No-Refund Policy</strong> for all digital and live services. Once a purchase is made, the sale is considered final.</p>
<p>This policy applies to all offerings, including:</p>
<ul>
  <li>Live Instructor-Led Training</li>
  <li>Pre-recorded Video Courses</li>
  <li>Specialized Intensive Workshops</li>
  <li>Digital Labs and Materials</li>
</ul>

<h3>Non-Transferable Enrollment</h3>
<p>Enrollments are uniquely assigned to individual students. Access permissions and course certifications are non-transferable. Users may not sell, trade, or gift their enrollment access to another individual. Any attempt to share account credentials or transfer seats without prior written authorization from Network Masters Hub administration will result in immediate termination of access without a refund.</p>

<h3>Technical or Access Issues</h3>
<p>We are committed to ensuring you have a seamless learning experience. If you encounter technical difficulties—such as login errors, video playback issues, or lab connectivity problems—our dedicated support team is available to assist you.</p>
<p><em>Note: Technical difficulties do not constitute grounds for a refund. We will work diligently to resolve any platform-side issues as quickly as possible.</em></p>

<h3>Before You Enroll</h3>
<ul>
  <li>Confirm system requirements for labs</li>
  <li>Review the full course syllabus</li>
  <li>Check prerequisite knowledge level</li>
</ul>
`;

// ─── ABOUT US ─────────────────────────────────────────────────────────────
const aboutData = {
    title: "Leading the IT Education Revolution",
    description: `<p>We bridge the gap between academic knowledge and real-world networking challenges through immersive, hands-on training aligned with global certification standards.</p>`,
    mission: `Network Masters Hub was founded with a clear vision — to bridge the gap between theoretical knowledge and real-world IT infrastructure expertise. The journey began with Pankaj's career as a Network Engineer, where hands-on experience across enterprise environments shaped a deep understanding of networking systems, troubleshooting, and infrastructure design. With over a decade of industry and training experience and having guided more than 5,000+ students toward successful IT careers, our mission is to elevate the standards of networking education and equip learners with the technical confidence, problem-solving ability, and industry-ready skills required to thrive in the 21st-century IT landscape.`,
    vision: `To be the most trusted and outcome-driven IT certification training platform globally — creating the next generation of top-tier network engineers through expert mentorship, real-world labs, and career-focused learning pathways.`
};

// ─── 6 BLOG POSTS ─────────────────────────────────────────────────────────
const blogs = [
    {
        title: "How to Crack the CCNA 200-301 Exam in 2026",
        slug: "how-to-crack-ccna",
        category: "Certification",
        date: "April 1, 2026",
        readTime: "5 min read",
        excerpt: "Discover the best practical strategies, lab practice tips, and study resources you need to confidently pass your Cisco CCNA 200-301 exam on the very first attempt.",
        content: `<p>The CCNA 200-301 exam continues to be the golden standard for entry-level networking professionals. However, passing it requires more than just memorizing commands — you need a deep understanding of packet flow and network fundamentals.</p><h3>1. Master Subnetting Without a Calculator</h3><p>Subnetting is the backbone of IP routing. Practice mental subnetting daily until you can identify any network layout at a glance.</p><h3>2. Build Extensive Labs</h3><p>Use Cisco Packet Tracer and GNS3 to build extensive networks. Set up OSPF, configure VLANs, and apply ACLs repeatedly until it becomes second nature.</p><h3>3. Understand Packet Flow</h3><p>Rather than memorizing commands, understand how a packet travels from Source A to Destination B. This logic-first approach is what separates top engineers from average candidates.</p><h3>4. Practice Scenario-Based Questions</h3><p>The exam focuses heavily on troubleshooting scenarios. Practice identifying misconfigured interfaces, wrong subnet masks, ACL blocks, and OSPF neighborships.</p>`
    },
    {
        title: "Why Network Automation Is the Future of IT",
        slug: "network-automation-future",
        category: "Technology",
        date: "March 25, 2026",
        readTime: "4 min read",
        excerpt: "Traditional CLI configuration is becoming obsolete. Learn why Python, Ansible, and API integration are non-negotiable skills for modern network engineers.",
        content: `<p>In the past, managing 50 routers required logging into each device individually. Today, Software-Defined Networking and Network Automation have completely transformed the landscape.</p><h3>The Power of Python and APIs</h3><p>Using Python with Netmiko or Paramiko, a configuration task that took hours can now be executed across 1,000 devices in seconds via REST APIs and JSON data formatting.</p><h3>Ansible for Network Engineers</h3><p>Ansible playbooks allow you to deploy consistent configurations across multi-vendor environments with zero manual intervention — a skill every enterprise network team now demands.</p><h3>Start Today</h3><p>Begin with Python basics, then progress to Netmiko → REST APIs → Ansible. The career uplift from these skills is immediate and significant.</p>`
    },
    {
        title: "CCNP vs CCNA: Which Certification Should You Pursue?",
        slug: "ccnp-vs-ccna",
        category: "Career Advice",
        date: "March 15, 2026",
        readTime: "6 min read",
        excerpt: "Confused between CCNA and CCNP? This detailed comparison helps you choose the right certification based on your experience level and career goals.",
        content: `<p>Both the CCNA and CCNP are globally recognized Cisco certifications, but they serve very different career stages and goals. Understanding the difference is critical before you invest your time and money.</p><h3>CCNA: The Foundation</h3><p>The CCNA 200-301 is designed for entry-level networking professionals. It covers routing, switching, wireless, security fundamentals, and automation. Ideal if you are new to IT or transitioning into networking.</p><h3>CCNP Enterprise: The Professional Level</h3><p>CCNP Enterprise (ENCOR + ENARSI) is for experienced engineers who want to move into L2/L3 roles, network architecture, and enterprise-scale infrastructure management. It dives deep into BGP, OSPF, EIGRP, SD-Access, and advanced security.</p><h3>Our Recommendation</h3><p>Start with CCNA to build a solid foundation. Once you have 1-2 years of hands-on experience, pursue CCNP to accelerate your career to senior engineer and architect roles.</p>`
    },
    {
        title: "Understanding OSPF: The Routing Protocol Every Engineer Must Know",
        slug: "ospf-explained",
        category: "Technical Deep Dive",
        date: "March 10, 2026",
        readTime: "7 min read",
        excerpt: "OSPF is one of the most widely deployed routing protocols in enterprise networks. Here is a clear, practical explanation of how it works and how to configure it.",
        content: `<p>Open Shortest Path First (OSPF) is a link-state routing protocol used extensively in enterprise networks. Unlike distance-vector protocols, OSPF builds a complete topology map of the network and calculates the shortest path using Dijkstra's algorithm.</p><h3>Key OSPF Concepts</h3><ul><li><strong>Router ID:</strong> A unique identifier for each OSPF router, usually the highest IP on a loopback interface.</li><li><strong>Areas:</strong> OSPF organizes routers into areas. Area 0 (the backbone) is mandatory and all other areas must connect to it.</li><li><strong>LSA Types:</strong> Link-State Advertisements are used to share topology information between routers.</li></ul><h3>Basic OSPF Configuration</h3><p>On a Cisco router, OSPF is configured with: <code>router ospf 1</code>, then <code>network [network] [wildcard] area [area-id]</code>. Always verify with <code>show ip ospf neighbor</code> and <code>show ip route ospf</code>.</p>`
    },
    {
        title: "SD-WAN Explained: Transforming Enterprise WAN in 2026",
        slug: "sdwan-explained",
        category: "Technology",
        date: "February 28, 2026",
        readTime: "5 min read",
        excerpt: "Software-Defined WAN is replacing traditional MPLS networks. Understand the architecture, key components, and why every enterprise is making the switch.",
        content: `<p>SD-WAN (Software-Defined Wide Area Network) has emerged as the go-to architecture for enterprises that need flexible, cost-effective, and cloud-ready connectivity. It replaces expensive, rigid MPLS circuits with intelligent, application-aware routing over multiple transport links including broadband, 4G/5G, and MPLS.</p><h3>Core SD-WAN Components</h3><ul><li><strong>vManage:</strong> The centralized management and orchestration controller (the GUI brain of SD-WAN).</li><li><strong>vSmart:</strong> The control plane controller that distributes routing policies to all edge devices.</li><li><strong>vBond:</strong> The orchestrator that authenticates and onboards new SD-WAN edge devices.</li><li><strong>vEdge/cEdge:</strong> The physical or virtual routers at each branch site.</li></ul><h3>Business Case</h3><p>Organizations report up to 50% reduction in WAN costs after migrating to SD-WAN, alongside significant improvements in application performance and cloud connectivity speed.</p>`
    },
    {
        title: "5 Lab Mistakes Every Networking Student Makes (And How to Avoid Them)",
        slug: "lab-mistakes-networking-students",
        category: "Tips & Tricks",
        date: "February 15, 2026",
        readTime: "4 min read",
        excerpt: "Most networking students hit the same walls in their lab sessions. Avoid these five common mistakes and accelerate your hands-on learning dramatically.",
        content: `<p>Lab practice is the heart of networking education. However, most beginners make the same avoidable mistakes that cost them hours of troubleshooting time. Here are the five most common ones and exactly how to fix them.</p><h3>1. Not Saving Configurations</h3><p>Always run <code>write memory</code> or <code>copy running-config startup-config</code> after making changes. Forgetting to save is the number one cause of "my lab stopped working after a reboot."</p><h3>2. Ignoring the Physical Layer</h3><p>Before debugging routing or switching, always verify the cable is connected and the interface is not administratively shut down with <code>no shutdown</code>.</p><h3>3. Skipping Verification Commands</h3><p>Configure and then immediately verify using <code>show ip route</code>, <code>show ip ospf neighbor</code>, <code>show vlan brief</code>. Never assume a configuration worked.</p><h3>4. Building Too Complex a Lab Too Soon</h3><p>Start simple. One router, one switch, two PCs. Master basic connectivity before adding VLANs, routing protocols, and ACLs.</p><h3>5. Not Documenting Your Topologies</h3><p>Draw every lab topology you build. This builds the muscle memory for reading and creating network diagrams — an essential professional skill.</p>`
    }
];

async function run() {
    console.log('🚀 Migrating all content to Strapi...\n');

    // About Us
    await request('/about-us', 'PUT', aboutData);
    console.log('✅ About Us updated');

    // Terms & Conditions
    await upsert('policy-pages', 'slug', 'terms', {
        title: 'Terms and Conditions',
        slug: 'terms',
        content: termsContent
    });
    console.log('✅ Terms & Conditions updated');

    // Refund Policy
    await upsert('policy-pages', 'slug', 'refund', {
        title: 'Refund Policy',
        slug: 'refund',
        content: refundContent
    });
    console.log('✅ Refund Policy updated');

    // Blogs
    for (const blog of blogs) {
        const res = await upsert('blogs', 'slug', blog.slug, blog);
        if (res.data) {
            console.log(`✅ Blog: ${blog.title}`);
        } else {
            console.error(`❌ Blog failed: ${blog.slug}`, res.error?.message || JSON.stringify(res.error));
        }
    }

    console.log('\n🏁 All content migrated! Refresh your browser.');
}

run().catch(console.error);

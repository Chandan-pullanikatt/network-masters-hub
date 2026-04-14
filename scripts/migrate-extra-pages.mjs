 

const STRAPI_URL = 'http://localhost:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

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

async function run() {
    console.log('🚀 Generating content for About Us, Policies, and Blogs...');

    // 1. About Us
    const aboutData = {
        title: "About Network Masters Hub",
        description: "Network Masters Hub is a premier IT training institute dedicated to transforming ambitious individuals into highly skilled networking professionals. With industry-expert instructors and state-of-the-art virtual labs, we bridge the gap between theoretical knowledge and practical execution.",
        mission: "To empower individuals with real-world networking skills and provide accessible, high-quality IT education that drives global career growth.",
        vision: "To be the most trusted and outcome-driven IT certification training platform globally, creating the next generation of top-tier network engineers."
    };
    await request('/about-us', 'PUT', aboutData);
    console.log('✅ About Us updated');

    // 2. Policy Pages
    const policies = [
        {
            title: "Terms and Conditions",
            slug: "terms",
            content: "<h3>1. Acceptance of Terms</h3><p>By accessing and enrolling in courses at Network Masters Hub, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p><h3>2. Course Enrollment</h3><p>All course enrollments are subject to availability and completed payment. Access to the course portal is provided exclusively to the enrolled student and cannot be shared.</p><h3>3. Intellectual Property</h3><p>All video content, study materials, and lab guides provided are the exclusive intellectual property of Network Masters Hub. Unauthorized distribution or copying is strictly prohibited.</p>"
        },
        {
            title: "Refund Policy",
            slug: "refund",
            content: "<h3>1. Refund Eligibility</h3><p>We are committed to delivering the highest quality training. However, if you are unsatisfied with our training program, you may request a refund within <strong>3 days</strong> of your enrollment date.</p><h3>2. Conditions for Refund</h3><p>Refunds will only be processed if you have attended a maximum of two live sessions and have not downloaded the premium study materials.</p><h3>3. Process</h3><p>To initiate a refund, please contact our support team at info@networkmastershub.com with your enrollment details and reason for cancellation.</p>"
        },
        {
            title: "Privacy Policy",
            slug: "privacy",
            content: "<h3>1. Information Collection</h3><p>We collect necessary personal information such as your name, email, and phone number when you register or inquire about our courses.</p><h3>2. Use of Information</h3><p>Your information is used strictly to provide you with course access, updates, and placement support. We never sell your personal data to third parties.</p>"
        }
    ];

    for (const policy of policies) {
        const existing = await request(`/policy-pages?filters[slug][$eq]=${policy.slug}`);
        if (existing.data && existing.data.length > 0) {
            await request(`/policy-pages/${existing.data[0].documentId || existing.data[0].id}`, 'PUT', policy);
        } else {
            await request('/policy-pages', 'POST', policy);
        }
    }
    console.log('✅ Policy Pages (Terms, Refund, Privacy) updated');

    // 3. Blogs
    const blogs = [
        {
            title: "How to Crack the CCNA 200-301 Exam in 2026",
            slug: "how-to-crack-ccna",
            category: "Certification",
            date: "April 06, 2026",
            readTime: "5 min read",
            excerpt: "Discover the best practical strategies, lab practice tips, and study resources you need to confidently pass your Cisco CCNA 200-301 exam on your first attempt.",
            content: "<p>The CCNA 200-301 exam continues to be the golden standard for entry-level networking professionals. However, passing it requires more than just memorizing commands—you need a deep understanding of packet flow and network fundamentals.</p><h3>1. Master Subnetting Without a Calculator</h3><p>Subnetting is the backbone of IP routing. You should be able to look at an IP address and instantly determine the network layout. Practice mental subnetting daily.</p><h3>2. Build Extensive Labs</h3><p>Do not rely on theory alone. Use Cisco Packet Tracer and GNS3 to build extensive networks. Set up OSPF, configure VLANs, and apply ACLs repeatedly until muscle memory takes over.</p>"
        },
        {
            title: "Why Network Automation is the Future",
            slug: "network-automation-future",
            category: "Technology",
            date: "March 20, 2026",
            readTime: "4 min read",
            excerpt: "Traditional CLI configuration is becoming obsolete. Learn why Python, Ansible, and API integration are essential skills for modern network engineers.",
            content: "<p>In the past, managing a network of 50 routers required logging into each one individually. Today, Software-Defined Networking (SDN) and Network Automation have completely changed the landscape.</p><h3>The Power of Python and APIs</h3><p>By learning Python and libraries like Netmiko or Paramiko, a task that took hours can now be executed across 1,000 devices in seconds using REST APIs and JSON data formatting.</p>"
        }
    ];

    for (const blog of blogs) {
        const existing = await request(`/blogs?filters[slug][$eq]=${blog.slug}`);
        if (existing.data && existing.data.length > 0) {
            await request(`/blogs/${existing.data[0].documentId || existing.data[0].id}`, 'PUT', blog);
        } else {
            await request('/blogs', 'POST', blog);
        }
    }
    console.log('✅ Sample Blogs updated');

    console.log('🏁 Content Migration Complete!');
}

run().catch(console.error);

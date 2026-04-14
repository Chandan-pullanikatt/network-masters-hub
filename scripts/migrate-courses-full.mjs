// Complete Course Data Migration — scraped from networkmastershub.com
// Run: node scripts/migrate-courses-full.mjs

const STRAPI_URL = 'http://localhost:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

async function put(docId, data) {
    const res = await fetch(`${STRAPI_URL}/api/courses/${docId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` },
        body: JSON.stringify({ data: { ...data, publishedAt: new Date() } })
    });
    return res.json();
}

async function getCourses() {
    const res = await fetch(`${STRAPI_URL}/api/courses`, {
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    });
    const d = await res.json();
    return d.data;
}

const ccnaData = {
    title: "Cisco CCNA 200–301 Course (Training & Certificate)",
    slug: "ccna-200-301",
    description: "Master the fundamentals of networking with our comprehensive CCNA course. Our curriculum is designed to take you from beginner to certified networking professional with practical, job-ready skills.",
    duration: "7 Weeks",
    modules: 6,
    videoHours: 60,
    price: 8500,
    hero: {
        badge: "Best Seller",
        title: "Cisco CCNA 200–301 Course (Training & Certificate)",
        subtitle: "Kickstart your networking career with the industry standard certification.",
        startDate: "16th March 2026",
        batches: [
            { name: "Weekday Evening Batch", time: "08:00 PM – 10:00 PM", days: "Monday – Friday" },
            { name: "Weekend Morning Batch", time: "10:00 AM – 01:00 PM", days: "Saturday, Sunday" }
        ]
    },
    overview: [
        { icon: "Network", title: "Foundations", desc: "OSI model, TCP/IP basics, physical cabling, and switching fundamentals" },
        { icon: "Route", title: "Routing", desc: "Static and dynamic routing (OSPF), VLAN configuration, and network segmentation" },
        { icon: "Shield", title: "Security", desc: "Access Control Lists (ACLs), port security, and VLAN security fundamentals" },
        { icon: "Bot", title: "Automation", desc: "Network automation basics, programmable networks, and modern networking concepts." }
    ],
    roadmap: [
        { step_id: "Step 1", title: "Network Fundamentals", desc: "Build a strong foundation with the OSI and TCP/IP models, cabling types, and essential networking components — the core building blocks of every network engineer.", topics: "OSI Model - IPv4/IPv6 Basics" },
        { step_id: "Step 2", title: "Network Access", desc: "Master Ethernet switching, VLAN configuration, Spanning Tree Protocol (STP), and inter-switch trunking concepts to control and segment networks efficiently.", topics: "VLANs - Spanning Tree Protocol" },
        { step_id: "Step 3", title: "IP Connectivity", desc: "Learn how to configure and troubleshoot IPv4/IPv6 addressing, static routing, and dynamic routing protocols like OSPF for real-world networking environments.", topics: "OSPF - Static Routes" },
        { step_id: "Step 4", title: "IP Services", desc: "Understand critical network services such as NAT (Network Address Translation), DHCP, NTP, and SNMP for monitoring, automation, and efficient device management.", topics: "NAT/DHCP - SNMP" },
        { step_id: "Step 5", title: "Security Fundamentals", desc: "Protect and secure networks by learning about threat landscapes, Access Control Lists (ACLs), VPN technologies, and port security best practices.", topics: "Firewalls - Network Security" },
        { step_id: "Step 6", title: "Automation & Programmability", desc: "Step into modern networking with Software-Defined Networking (SDN), REST APIs, JSON data formats, and automation tools used in enterprise environments.", topics: "REST APIs - SDN Controllers" }
    ],
    faqs: [
        { question: "Who Should Enroll in the CCNA Training at Network Masters Hub?", answer: "Our CCNA training is ideal for IT beginners, fresh graduates, helpdesk technicians, and anyone looking to start a career in networking. No prior networking experience is required." },
        { question: "What Practical Exposure Will I Gain During the CCNA Course?", answer: "You will get hands-on experience through scenario-based lab practices, configuring real-world network setups like routing (OSPF), switching (VLANs, STP), and security (ACLs) using Cisco Packet Tracer and GNS3/EVE-NG." },
        { question: "How Is This CCNA Course Different from Online Self-Learning?", answer: "Unlike self-learning, our course offers expert instructor-led HD sessions, weekly doubt-clearing, structured job interview support, soft skill guidance, and premium study notes to ensure logical understanding." },
        { question: "Does This Course Help with Job Preparation and Interviews?", answer: "Yes! We provide dedicated job and interview support, including resume-building, scenario-based interview discussions, soft skill guidance, and practical troubleshooting tickets to help you crack roles like L2 Network Engineer." },
        { question: "What Topics Are Covered Beyond Basic Networking Concepts?", answer: "Beyond basics, we cover modern networking skills including network automation, programmable networks (SDN), JSON data formats, REST APIs, and enterprise security." },
        { question: "Can I Pursue Advanced Networking Courses After Completing CCNA?", answer: "Absolutely. Understanding CCNA lays the perfect foundation for advanced certifications like CCNP Enterprise (ENCOR + ENARSI), SD-WAN, and specialized Network Automation courses." }
    ]
};

const ccnpData = {
    title: "CCNP (Encor and Enarsi) Online Training Course",
    slug: "ccnp-enterprise",
    description: "Advance your networking career with our comprehensive CCNP Enterprise training covering both ENCOR and ENARSI tracks for complete enterprise networking mastery.",
    duration: "12 Weeks",
    modules: 10,
    videoHours: 120,
    price: 15000,
    hero: {
        badge: "Advanced",
        title: "CCNP Enterprise Training",
        subtitle: "Take your networking skills to enterprise level with ENCOR and ENARSI.",
        startDate: "March 2026",
        batches: [
            { name: "Weekday Evening Batch", time: "7:00 PM – 9:00 PM", days: "Mon, Wed, Fri" },
            { name: "Weekend Morning Batch", time: "9:00 AM – 12:00 PM", days: "Sat, Sun" }
        ]
    },
    overview: [
        { icon: "Network", title: "Architecture", desc: "Enterprise network design, dual-stack architecture, and SD-Access fundamentals." },
        { icon: "Route", title: "Routing", desc: "Advanced OSPF, BGP, EIGRP, and route redistribution for enterprise environments." },
        { icon: "Shield", title: "Security", desc: "AAA, 802.1X, TrustSec, and enterprise security policies." },
        { icon: "Bot", title: "Automation", desc: "Network automation, Python scripting, and SD-WAN fundamentals." },
        { icon: "Cloud", title: "Virtualization", desc: "NFV, network virtualization, and cloud integration concepts." },
        { icon: "Wifi", title: "Wireless", desc: "Enterprise wireless architecture, WPA3, and WLAN troubleshooting." }
    ],
    roadmap: [
        { step_id: "Step 1", title: "Enterprise Architecture", desc: "Understand campus and WAN network architecture, dual-stack IPv4/IPv6, and SD-Access architecture fundamentals.", topics: "Campus Design, SD-Access, Dual Stack" },
        { step_id: "Step 2", title: "Advanced Routing", desc: "Master OSPF, EIGRP, BGP, and route redistribution across complex enterprise networks.", topics: "OSPF, BGP, EIGRP, Route Redistribution" },
        { step_id: "Step 3", title: "Enterprise Security", desc: "Implement AAA, 802.1X authentication, TrustSec, and comprehensive enterprise security policies.", topics: "AAA, 802.1X, TrustSec, DMVPN" },
        { step_id: "Step 4", title: "Virtual Networks", desc: "Learn VRF, MPLS, DMVPN, and IPsec for enterprise-scale VPN and segment routing.", topics: "VRF, MPLS, DMVPN, IPsec" },
        { step_id: "Step 5", title: "Infrastructure Services", desc: "Configure and troubleshoot DHCP, DNS, NTP, HSRP, and SNMP for enterprise infrastructure.", topics: "DHCP, DNS, NTP, HSRP" },
        { step_id: "Step 6", title: "Network Automation", desc: "Automate enterprise networks using Python, Ansible, REST APIs, and Cisco DNA Center.", topics: "Python, Ansible, REST APIs, DNA Center" }
    ],
    faqs: [
        { question: "Do I need CCNA before CCNP?", answer: "Cisco does not officially require CCNA, but we strongly recommend completing CCNA first as CCNP assumes foundational knowledge." },
        { question: "How long is the CCNP course?", answer: "The course runs for 12 weeks with 120+ hours covering both ENCOR (core) and ENARSI (advanced routing) tracks." },
        { question: "Are recorded sessions available?", answer: "Yes. All sessions are recorded and available in your portal within 2 hours of each live class." },
        { question: "What job roles does CCNP target?", answer: "CCNP targets L2/L3 Network Engineers, Network Architects, and Senior Network Administrators roles at MNCs and enterprises." }
    ]
};

const sdwanData = {
    title: "Cisco SD-WAN Online Course | Get Lifetime Access",
    slug: "cisco-sd-wan",
    description: "Master Cisco SD-WAN technology and learn how to design, deploy, and manage modern software-defined wide area networks for enterprise environments.",
    duration: "4 Weeks",
    modules: 6,
    videoHours: 40,
    price: 9999,
    hero: {
        badge: "Lifetime Access",
        title: "Cisco SD-WAN Online Course",
        subtitle: "Master software-defined networking and transform enterprise WAN management.",
        startDate: "Flexible Start",
        batches: [
            { name: "Self-Paced Online", time: "Anytime", days: "Lifetime Access" }
        ]
    },
    overview: [
        { icon: "Cloud", title: "SD-WAN Fundamentals", desc: "Understand SD-WAN architecture, components, and how it differs from traditional WAN." },
        { icon: "Network", title: "vManage", desc: "Master the vManage controller for centralized management and policy configuration." },
        { icon: "Route", title: "Routing & Policies", desc: "Configure OMP, data policies, control policies, and application-aware routing." },
        { icon: "Shield", title: "Security", desc: "Implement SD-WAN security policies, segmentation, and cloud security." },
        { icon: "Activity", title: "Monitoring", desc: "Monitor network performance, troubleshoot issues, and optimize WAN traffic." },
        { icon: "Bot", title: "Automation", desc: "Automate SD-WAN deployments using APIs and configuration templates." }
    ],
    roadmap: [
        { step_id: "Step 1", title: "SD-WAN Architecture", desc: "Learn SD-WAN components: vManage, vSmart, vBond, and vEdge/cEdge routers and their roles.", topics: "vManage, vSmart, vBond, vEdge" },
        { step_id: "Step 2", title: "Onboarding & ZTP", desc: "Master Zero Touch Provisioning (ZTP) and device onboarding in SD-WAN environments.", topics: "ZTP, PnP, Device Templates" },
        { step_id: "Step 3", title: "Control & Data Plane", desc: "Understand OMP routing, TLOC, transport locators, and data plane forwarding.", topics: "OMP, TLOC, BFD, IPsec" },
        { step_id: "Step 4", title: "Policies & QoS", desc: "Configure centralized and localized policies, application-aware routing, and QoS.", topics: "Data Policy, Control Policy, AAR, QoS" },
        { step_id: "Step 5", title: "Cloud Integration", desc: "Connect SD-WAN to cloud providers (AWS, Azure) and configure cloud security.", topics: "Cloud OnRamp, AWS, Azure, SASE" },
        { step_id: "Step 6", title: "Troubleshooting", desc: "Monitor, troubleshoot, and optimize SD-WAN networks using vManage and CLI tools.", topics: "Monitoring, Alerts, Troubleshooting CLI" }
    ],
    faqs: [
        { question: "Is CCNP required before SD-WAN?", answer: "Basic networking knowledge (CCNA level) is recommended. CCNP is not mandatory but helpful." },
        { question: "Does this come with lifetime access?", answer: "Yes. You get lifetime access to all recorded sessions, updates, and lab materials." },
        { question: "Are lab exercises included?", answer: "Yes. The course includes hands-on lab exercises using Cisco SD-WAN lab environments." }
    ]
};

const automationData = {
    title: "Complete Network Automation Online Course for Network Engineers",
    slug: "python-automation",
    description: "Learn Python programming and network automation to automate repetitive network tasks, interact with network devices via APIs, and build efficient automation scripts.",
    duration: "4 Weeks",
    modules: 6,
    videoHours: 40,
    price: 7999,
    hero: {
        badge: "High Demand",
        title: "Network Automation with Python",
        subtitle: "Automate your network. Elevate your career. Future-proof your skills.",
        startDate: "March 2026",
        batches: [
            { name: "Weekday Evening Batch", time: "8:00 PM – 10:00 PM", days: "Tue, Thu" },
            { name: "Weekend Batch", time: "10:00 AM – 12:00 PM", days: "Sat, Sun" }
        ]
    },
    overview: [
        { icon: "Code", title: "Python Basics", desc: "Variables, data types, loops, functions, and file handling for network engineers." },
        { icon: "Network", title: "Netmiko & Paramiko", desc: "SSH into network devices and automate configuration tasks using Python libraries." },
        { icon: "Activity", title: "NAPALM", desc: "Use NAPALM for multi-vendor network automation and configuration management." },
        { icon: "Globe", title: "REST APIs", desc: "Interact with network device APIs using Python requests and Postman." },
        { icon: "Bot", title: "Ansible", desc: "Write Ansible playbooks to automate network configuration across multiple devices." },
        { icon: "Database", title: "NETCONF/YANG", desc: "Use NETCONF and YANG models for modern programmatic network management." }
    ],
    roadmap: [
        { step_id: "Step 1", title: "Python Foundations", desc: "Master Python basics including variables, data structures, loops, functions, and file operations relevant to networking.", topics: "Python, Data Types, Functions, Files" },
        { step_id: "Step 2", title: "Network Libraries", desc: "Use Netmiko, Paramiko, and NAPALM to SSH into and automate Cisco, Juniper, and Arista devices.", topics: "Netmiko, Paramiko, NAPALM" },
        { step_id: "Step 3", title: "REST APIs", desc: "Interact with network device APIs using Python and automate workflows using JSON/XML data.", topics: "REST API, JSON, XML, Requests" },
        { step_id: "Step 4", title: "Ansible for Networks", desc: "Write Ansible playbooks to manage router/switch configurations at scale across your network.", topics: "Ansible, Playbooks, Inventory, Roles" },
        { step_id: "Step 5", title: "NETCONF & YANG", desc: "Use NETCONF protocol and YANG data models for next-generation network programmability.", topics: "NETCONF, YANG, ncclient" },
        { step_id: "Step 6", title: "Real Projects", desc: "Build end-to-end automation projects: bulk config push, automated audits, and topology discovery.", topics: "Projects, Automation Scripts, CI/CD" }
    ],
    faqs: [
        { question: "Do I need programming experience?", answer: "No. The course starts from Python basics and progresses to advanced network automation step by step." },
        { question: "Which network vendors are covered?", answer: "Cisco, Juniper, and Arista devices are covered using vendor-agnostic tools like NAPALM and Ansible." },
        { question: "Are real lab devices used?", answer: "Yes. You get access to lab environments with real and virtual network devices for hands-on practice." }
    ]
};

const comboData = {
    title: "CCNA & CCNP Combo Batch",
    slug: "ccna-ccnp-combo",
    description: "The ultimate networking bundle — complete your CCNA and CCNP Enterprise in one comprehensive program. Save time and money with our exclusive combo pricing.",
    duration: "16 Weeks",
    modules: 16,
    videoHours: 180,
    price: 18000,
    isCombo: true,
    hero: {
        badge: "Best Value",
        title: "CCNA + CCNP Combo Batch",
        subtitle: "Master both certifications in one go. Maximum learning, maximum savings.",
        startDate: "March 2026",
        batches: [
            { name: "Weekday Evening Batch", time: "7:00 PM – 9:00 PM", days: "Mon–Fri" },
            { name: "Weekend Intensive", time: "9:00 AM – 1:00 PM", days: "Sat, Sun" }
        ]
    },
    overview: [
        { icon: "Network", title: "CCNA Foundations", desc: "Complete CCNA 200-301 curriculum: OSI model, switching, routing, security, and automation." },
        { icon: "Route", title: "CCNP ENCOR", desc: "Advanced enterprise architecture, dual-stack, SD-Access, and automation." },
        { icon: "Shield", title: "CCNP ENARSI", desc: "Advanced routing protocols: OSPF, BGP, EIGRP, VRF, and troubleshooting." },
        { icon: "Award", title: "Dual Certification", desc: "Prepare for both CCNA and CCNP exams in one structured learning path." }
    ],
    roadmap: [
        { step_id: "Phase 1", title: "CCNA Core (Weeks 1–7)", desc: "Complete CCNA curriculum covering network fundamentals, switching, routing, IP services, security, and automation.", topics: "OSI, VLANs, OSPF, ACLs, Automation" },
        { step_id: "Phase 2", title: "CCNP ENCOR (Weeks 8–12)", desc: "Enterprise architecture, advanced routing, wireless, security, and virtualization for the ENCOR 350-401 exam.", topics: "SD-Access, BGP, EIGRP, 802.1X" },
        { step_id: "Phase 3", title: "CCNP ENARSI (Weeks 13–16)", desc: "Advanced routing and services: OSPF, EIGRP, BGP, VRF, DMVPN, and infrastructure troubleshooting.", topics: "OSPF v3, BGP, VRF, DMVPN, PBR" }
    ],
    faqs: [
        { question: "Do I get a discount on the combo batch?", answer: "Yes. The combo batch is priced significantly lower than buying CCNA and CCNP separately." },
        { question: "Can a complete beginner join the combo batch?", answer: "Yes. The combo batch starts from CCNA basics and progressively advances to CCNP level." },
        { question: "How long is the total course duration?", answer: "The combo program runs for 16 weeks with 180+ hours of content, labs, and mentor support." }
    ]
};

async function run() {
    console.log('🚀 Migrating Full Course Data...\n');
    const courses = await getCourses();
    const courseMap = {};
    courses.forEach(c => { courseMap[c.slug] = c.documentId; });

    const allCourses = [ccnaData, ccnpData, sdwanData, automationData, comboData];
    
    for (const courseData of allCourses) {
        const docId = courseMap[courseData.slug];
        if (!docId) { console.warn(`⚠️  Not found: ${courseData.slug}`); continue; }
        
        const res = await put(docId, courseData);
        if (res.data) {
            console.log(`✅ Updated: ${courseData.title}`);
        } else {
            console.error(`❌ Failed: ${courseData.slug}`, res.error?.message);
        }
    }
    
    console.log('\n🏁 All courses fully migrated! Refresh your browser.');
}

run().catch(console.error);


const STRAPI_URL = 'http://localhost:1337';
const TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

async function migrate() {
    try {
        const token = TOKEN;
        console.log('✅ Using provided Content API token.');

        const coursesData = [
            {
                slug: "ccna-200-301",
                flexiblePrice: 4999,
                isFlexible: true,
                hero: {
                    title: "Cisco CCNA 200–301 Course (Training & Certificate) (Recorded)",
                    subtitle: "Master the fundamentals of networking with our comprehensive CCNA course.",
                },
                overview: {
                    title: "Core Skills You'll Master",
                    description: "Our curriculum is designed to take you from beginner to certified networking professional with practical, job-ready skills",
                    skills: [
                        { title: 'Foundations', desc: 'OSI model, TCP/IP basics, physical cabling, and switching fundamentals' },
                        { title: 'Routing', desc: 'Static and dynamic routing (OSPF), VLAN configuration, and network segmentation' },
                        { title: 'Security', desc: 'Access Control Lists (ACLs), port security, and VLAN security fundamentals' },
                        { title: 'Automation', desc: 'Network automation basics, programmable networks, and modern networking concepts.' },
                    ]
                },
                roadmap: [
                    { id: '01', title: 'Network Fundamentals', desc: 'Build a strong foundation with the OSI and TCP/IP models, cabling types, and essential networking components — the core building blocks of every network engineer.', topics: 'OSI Model - IPv4/IPv6 Basics' },
                    { id: '02', title: 'Network Access', desc: 'Master Ethernet switching, VLAN configuration, Spanning Tree Protocol (STP), and inter-switch trunking concepts to control and segment networks efficiently.', topics: 'Ethernet Switching - VLANs' },
                    { id: '03', title: 'IP Connectivity', desc: 'Learn how to configure and troubleshoot IPv4/IPv6 addressing, static routing, and dynamic routing protocols like OSPF for real-world networking environments.', topics: 'OSPF - Static Routes' },
                    { id: '04', title: 'IP Services', desc: 'Understand critical network services such as NAT (Network Address Translation), DHCP, NTP, and SNMP for monitoring, automation, and efficient device management.', topics: 'NAT/DHCP - SNMP' },
                    { id: '05', title: 'Security Fundamentals', desc: 'Protect and secure networks by learning about threat landscapes, Access Control Lists (ACLs), VPN technologies, and port security best practices.', topics: 'Firewalls - Network Security' },
                    { id: '06', title: 'Automation & Programmability', desc: 'Step into modern networking with Software-Defined Networking (SDN), REST APIs, JSON data formats, and automation tools used in enterprise environments.', topics: 'REST APIs - SDN Controllers' }
                ],
                faqs: [
                    { question: "Who Should Enroll in the CCNA Training at Network Masters Hub?", answer: "This CCNA training program is perfect for students, fresh graduates, and working professionals looking to build a strong foundation in computer networking. No prior networking experience is required - we start from the basics and gradually move toward advanced concepts." },
                    { question: "What Practical Exposure Will I Gain During the CCNA Course?", answer: "At Network Masters Hub, the CCNA course includes real-time network configurations and hands-on troubleshooting scenarios. You'll work with routers, switches, and simulators to gain practical, industry-relevant experience." },
                    { question: "How Is This CCNA Course Different from Online Self-Learning?", answer: "Unlike self-paced online courses, this program offers live instructor-led sessions, doubt-clearing support, and dedicated mentorship. You'll also benefit from structured learning modules, regular assessments, and real-world examples that improve understanding and retention." },
                    { question: "Does This Course Help with Job Preparation and Interviews?", answer: "Yes. Our CCNA training focuses not only on certification but also on career readiness. Students receive interview preparation support, resume guidance, and exposure to real networking scenarios commonly discussed in technical interviews." }
                ]
            },
            {
                slug: "ccnp-enterprise",
                flexiblePrice: 8999,
                isFlexible: true,
                hero: {
                    title: "CCNP (Encor and Enarsi) Online Training Course (Recorded)",
                    subtitle: "Advance your career with professional-level networking skills.",
                },
                overview: {
                    title: "Program Overview",
                    description: "A dual-focus approach to master both core and concentration areas.",
                    skills: [
                        { title: '350-401 ENCOR', desc: 'Implementing and Operating Cisco Enterprise Network Core Technologies. (Dual stack IPv4 and IPv6 architecture)' },
                        { title: '300-410 ENARSI', desc: 'Implementing Cisco Enterprise Advanced Routing and Services. (Layer 3 technologies & Routing Protocols)' }
                    ]
                },
                roadmap: [
                    { id: '01', title: 'Architecture (ENCOR)', desc: 'Understand how enterprise networks are designed and how core components work together to deliver scalable, reliable, and efficient communication.' },
                    { id: '02', title: 'Automation (ENCOR)', desc: 'Learn automation concepts that simplify network operations, improve efficiency, and streamline configuration and management tasks.' },
                    { id: '03', title: 'Infrastructure Security (ENARSI)', desc: 'Learn how to secure routing infrastructure and protect critical network services to ensure a safe and resilient enterprise environment.' },
                    { id: '04', title: 'Layer-3 Technologies (ENARSI)', desc: 'Master advanced routing protocols and real-world troubleshooting techniques used in complex enterprise networks.' }
                ],
                faqs: [
                    { question: "Is CCNA required?", answer: "CCNA level knowledge is highly recommended." },
                    { question: "Does this cover both exams?", answer: "Yes, it covers both ENCOR (Core) and ENARSI (Concentration)." }
                ]
            },
            {
                slug: "python-automation",
                flexiblePrice: 8999,
                isFlexible: true,
                hero: {
                    title: "Complete Network Automation Online Course (Recorded)",
                    subtitle: "Automate network tasks using Python.",
                },
                overview: {
                    title: "Network Programmability",
                    description: "The future of networking is code. Learn the tools to stay relevant.",
                    skills: [
                        { title: 'Python', desc: 'Python basics, data structures, and libraries' },
                        { title: 'Libraries', desc: 'Netmiko, Napalm, Paramiko, and Nornir' },
                        { title: 'APIs', desc: 'REST APIs, JSON, XML, and Postman' },
                        { title: 'Ansible', desc: 'Playbooks, inventory, and roles for network automation' }
                    ]
                },
                roadmap: [
                    { id: '01', title: 'Python Basics', desc: 'Build a strong foundation in Python programming tailored for network engineers.' },
                    { id: '02', title: 'Network Automation Foundation', desc: 'Understand core automation concepts, tools, and workflows used in modern networking.' },
                    { id: '03', title: 'Device-Level Network Automation', desc: 'Learn how to automate routers and switches using powerful libraries and direct connections.' }
                ],
                faqs: [
                    { question: "Do I need coding experience?", answer: "No, we start from scratch." }
                ]
            },
            {
                slug: "cisco-sd-wan",
                flexiblePrice: 5999,
                isFlexible: true,
                hero: {
                    title: "Cisco SD-WAN Online Course (Recorded)",
                    subtitle: "Master Software-Defined WAN.",
                },
                overview: {
                    title: "Program Overview",
                    description: "Master Software-Defined WAN (SD-WAN) with our comprehensive Cisco SD-WAN course.",
                    skills: [
                        { title: 'SD-WAN Architecture', desc: 'Master the Orchestration, Management, Control, and Data planes within the Cisco SD-WAN fabric.' },
                        { title: 'Deployment & Config', desc: 'End-to-end controller deployment (vManage, vBond, vSmart) and WAN Edge router onboarding.' },
                        { title: 'Policies & Traffic', desc: 'Implementing Control and Data policies for intelligent path selection and Application-Aware Routing.' }
                    ]
                },
                roadmap: [
                    { id: '01', title: 'Architecture', desc: 'Understand SD-WAN fundamentals, architecture design, and the roles of control, data, and management planes in modern enterprise networks.' },
                    { id: '02', title: 'Controller Deployment', desc: 'Learn the step-by-step process of deploying and configuring SD-WAN controllers: vManage, vBond, and vSmart.' }
                ],
                faqs: [
                    { question: "Do I need a lab?", answer: "We provide hosted labs for practice." }
                ]
            },
            {
                slug: "ccna-ccnp-combo",
                flexiblePrice: 4999,
                isFlexible: true,
                hero: {
                    title: "CCNA & CCNP Combo Batch (Recorded)",
                    subtitle: "Comprehensive networking mastery.",
                },
                overview: {
                    title: "Complete Networking Journey",
                    description: "Save time and money by combining the associate and professional levels.",
                    skills: [
                        { title: 'CCNA (Foundation Level)', desc: 'Prerequisite & Basics' },
                        { title: 'OSI Model & Architecture', desc: 'Mastering the 7 layers and end-to-end data flow.' }
                    ]
                },
                roadmap: [
                    { id: '01', title: 'CCNA (200-301)', desc: 'Build a strong foundation in Cisco networking fundamentals, including routing, switching, IP services, and network security.' },
                    { id: '02', title: 'CCNP Enterprise', desc: 'Advance your enterprise networking expertise through two core training components—ENCOR and ENARSI.' }
                ],
                faqs: [
                    { question: "Is this intensive?", answer: "Yes, it covers a lot of ground effectively." }
                ]
            }
        ];

        for (const course of coursesData) {
            console.log(`⏳ Migrating ${course.slug}...`);
            
            // Find existing course by slug
            const existingRes = await fetch(`${STRAPI_URL}/api/courses?filters[slug][$eq]=${course.slug}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const existing = await existingRes.json();

            const method = (existing.data && existing.data.length > 0) ? 'PUT' : 'POST';
            const url = (existing.data && existing.data.length > 0) 
                ? `${STRAPI_URL}/api/courses/${existing.data[0].id}`
                : `${STRAPI_URL}/api/courses`;

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    data: {
                        ...course,
                        publishedAt: new Date()
                    }
                })
            });

            if (!res.ok) {
                const err = await res.text();
                console.error(`❌ Failed to migrate ${course.slug}:`, err);
            } else {
                console.log(`✅ ${course.slug} migrated successfully.`);
            }
        }

        console.log('🏁 All flexible courses migrated.');
    } catch (error) {
        console.error('💥 Migration error:', error);
    }
}

migrate();

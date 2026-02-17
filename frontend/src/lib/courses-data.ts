import { Course } from '@/types';
import { User, Server, Shield, Activity, Database, Globe, Lock, Cpu, Cloud, Code, Compass, Lightbulb, Layers, Route, ShieldCheck, Bot, Share2, Settings, LineChart, Terminal, Boxes, ArrowLeftRight, Cog } from 'lucide-react';

export const courses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200–301 Course (Training & Certificate)",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking with our comprehensive CCNA course.",
            duration: "7 Weeks", // From homepage
            modules: 6,
            videoHours: 60,
            price: 8500, // From homepage
            image: { data: { id: 1, attributes: { url: '/assets/p1.webp', alternativeText: 'CCNA', width: 640, height: 360 } } },
            hero: {
                title: "Cisco CCNA 200–301 Course (Training & Certificate)",
                subtitle: "Kickstart your networking career with the industry standard certification.",
                price: 8500,
                originalPrice: 15000,
                startDate: "June 15, 2024",
                batches: [
                    { name: "Weekday Evening Batch", time: "08:00 PM – 10:00 PM", days: "Monday – Friday", status: "Filling Fast", startDate: "23rd February 2026" },
                    { name: "Weekend Morning Batch", time: "10:00 AM – 01:00 PM", days: "Saturday, Sunday", status: "Open", startDate: "28th February 2026" }
                ]
            },
            overview: {
                title: "Core Skills You'll Master",
                description: "Our curriculum is designed to take you from beginner to certified networking professional with practical, job-ready skills",
                skills: [
                    { title: 'Foundations', icon: Layers, desc: 'OSI model, TCP/IP basics, physical cabling, and switching fundamentals' },
                    { title: 'Routing', icon: Route, desc: 'Static and dynamic routing (OSPF), VLAN configuration, and network segmentation' },
                    { title: 'Security', icon: ShieldCheck, desc: 'Access Control Lists (ACLs), port security, and VLAN security fundamentals' },
                    { title: 'Automation', icon: Bot, desc: 'Network automation basics, programmable networks, and modern networking concepts.' },
                ]
            },

            roadmap: [
                { id: '01', title: 'Network Fundamentals', desc: 'Build a strong foundation with the OSI and TCP/IP models, cabling types, and essential networking components — the core building blocks of every network engineer.', topics: 'OSI Model - IPv4/IPv6 Basics' },
                { id: '02', title: 'Network Access', desc: 'Master Ethernet switching, VLAN configuration, Spanning Tree Protocol (STP), and inter-switch trunking concepts to control and segment networks efficiently.', topics: 'VLANs - Spanning Tree Protocol' },
                { id: '03', title: 'IP Connectivity', desc: 'Learn how to configure and troubleshoot IPv4/IPv6 addressing, static routing, and dynamic routing protocols like OSPF for real-world networking environments.', topics: 'OSPF - Static Routes' },
                { id: '04', title: 'IP Services', desc: 'Understand critical network services such as NAT (Network Address Translation), DHCP, NTP, and SNMP for monitoring, automation, and efficient device management.', topics: 'NAT/DHCP - SNMP' },
                { id: '05', title: 'Security Fundamentals', desc: 'Protect and secure networks by learning about threat landscapes, Access Control Lists (ACLs), VPN technologies, and port security best practices.', topics: 'Firewalls - Network Security' },
                { id: '06', title: 'Automation & Programmability', desc: 'Step into modern networking with Software-Defined Networking (SDN), REST APIs, JSON data formats, and automation tools used in enterprise environments.', topics: 'REST APIs - SDN Controllers' }
            ],
            faqs: [
                { question: "Do I need prior experience?", answer: "No, this course starts from the basics." },
                { question: "Is lab access included?", answer: "Yes, 24/7 lab access is provided." },
                { question: "What is the passing score?", answer: "The passing score for CCNA 200-301 is roughly 825/1000." },
                { question: "How long is the certification valid?", answer: "CCNA certification is valid for 3 years." }
            ]
        }
    },
    {
        id: 2,
        attributes: {
            title: "CCNP (Encor and Enarsi) Online Training Course",
            slug: "ccnp-enterprise",
            description: "Advance your career with professional-level networking skills.",
            duration: "12 Weeks", // From homepage
            modules: 10,
            videoHours: 120,
            price: 25000, // From homepage
            image: { data: { id: 2, attributes: { url: '/assets/p2.webp', alternativeText: 'CCNP', width: 640, height: 360 } } },
            hero: {
                title: "CCNP (Encor and Enarsi) Online Training Course",
                subtitle: "Advance your career with professional-level networking skills and deep dive into enterprise technologies.",
                price: 25000,
                originalPrice: 40000,
                startDate: "Upcoming",
                batches: [
                    { name: "Weekday Evening Batch", time: "05:00 PM – 07:00 PM", days: "Monday – Friday", status: "Filling Fast", startDate: "23rd February, 2026" },
                    { name: "Weekend Evening Batch", time: "05:00 PM – 08:00 PM", days: "Saturday, Sunday", status: "Open", startDate: "28th February, 2026" }
                ]
            },
            overview: {
                title: "Program Overview",
                description: "A dual-focus approach to master both core and concentration areas.",
                skills: [
                    {
                        title: '350-401 ENCOR',
                        icon: Cpu,
                        desc: 'Implementing and Operating Cisco Enterprise Network Core Technologies.',
                        points: [
                            'Dual stack (IPv4 and IPv6) architecture',
                            'Virtualization and Cloud Connectivity',
                            'Network Assurance & Monitoring'
                        ]
                    },
                    {
                        title: '300-410 ENARSI',
                        icon: Route,
                        desc: 'Implementing Cisco Enterprise Advanced Routing and Services.',
                        points: [
                            'Layer 3 technologies & Routing Protocols',
                            'VPN services and Infrastructure Security',
                            'Advanced Troubleshooting techniques'
                        ]
                    }
                ]
            },
            roadmapModules: {
                encor: [
                    { id: '01', title: 'Architecture', desc: 'Understand how enterprise networks are designed and how core components work together to deliver scalable, reliable, and efficient communication.' },
                    { id: '02', title: 'Automation', desc: 'Learn automation concepts that simplify network operations, improve efficiency, and streamline configuration and management tasks' },
                    { id: '03', title: 'Infrastructure', desc: 'Master switching and routing fundamentals used in enterprise environments to build stable and high-performing networks' },
                    { id: '04', title: 'IP Services', desc: 'Explore essential IP services that ensure smooth, secure, and reliable communication across enterprise networks' },
                    { id: '05', title: 'Network Assurance', desc: 'Develop skills to monitor, troubleshoot, and maintain network performance for consistent uptime and optimal reliability' },
                    { id: '06', title: 'Security', desc: 'Build a strong foundation in securing enterprise networks against common threats, vulnerabilities, and unauthorized access.' },
                    { id: '07', title: 'Virtualization', desc: 'Understand virtualization concepts used in modern enterprise network deployments to enhance flexibility and scalability.' }
                ],
                enarsi: [
                    { id: '01', title: 'Infrastructure Security', desc: 'Learn how to secure routing infrastructure and protect critical network services to ensure a safe and resilient enterprise environment.' },
                    { id: '02', title: 'Layer-3 Technologies', desc: 'Master advanced routing protocols and real-world troubleshooting techniques used in complex enterprise networks.' },
                    { id: '03', title: 'VPN Technology', desc: 'Understand how secure VPN solutions are designed and implemented to enable safe and encrypted communication across enterprise networks.' }
                ]
            },
            roadmap: [], // Default empty, handled by component logic for this course
            faqs: [
                { question: "Is CCNA required?", answer: "CCNA level knowledge is highly recommended." },
                { question: "Does this cover both exams?", answer: "Yes, it covers both ENCOR (Core) and ENARSI (Concentration)." }
            ]
        }
    },
    {
        id: 3,
        attributes: {
            title: "Cisco SD-WAN Online Course | Get Lifetime Access",
            slug: "cisco-sd-wan",
            description: "Master Software-Defined WAN.",
            duration: "4 Weeks", // From homepage
            modules: 6,
            videoHours: 40,
            price: 15000, // From homepage
            image: { data: { id: 3, attributes: { url: '/assets/p3.webp', alternativeText: 'SD-WAN', width: 640, height: 360 } } },
            hero: {
                title: "Cisco SD-WAN Online Course",
                subtitle: "Master Software-Defined WAN and revolutionize your network infrastructure.",
                price: 15000,
                originalPrice: 20000,
                startDate: "Upcoming",
                batches: []
            },
            overview: {
                title: "Program Overview",
                description: "A dual-focus approach to master both core and concentration areas.",
                skills: [
                    { title: 'SD-WAN Architecture', icon: Share2, desc: 'Master the Orchestration, Management, Control, and Data planes within the Cisco SD-WAN fabric.' },
                    { title: 'Deployment & Config', icon: Settings, desc: 'End-to-end controller deployment (vManage, vBond, vSmart) and WAN Edge router onboarding.' },
                    { title: 'Policies & Traffic', icon: Route, desc: 'Implementing Control and Data policies for intelligent path selection and Application-Aware Routing.' },
                    { title: 'SD-WAN Security', icon: Lock, desc: 'Securing the fabric with Enterprise Firewall, IPS, URL Filtering, and Advanced Malware Protection.' },
                    { title: 'Monitoring & Troubleshoot', icon: LineChart, desc: 'Using vManage for real-time monitoring, diagnostic tools, and fabric-wide troubleshooting.' },
                    { title: 'Automation & API', icon: Bot, desc: 'Leveraging REST APIs for network automation and vManage integration with external tools.' }
                ]
            },
            roadmap: [
                { id: '01', title: 'Architecture', desc: 'Understand SD-WAN fundamentals, architecture design, and the roles of control, data, and management planes in modern enterprise networks.', topics: 'Control Plane - Data Plane - Mgmt Plane' },
                { id: '02', title: 'Controller Deployment', desc: 'Learn the deployment and configuration of SD-WAN controllers, including vManage, vSmart, and vBond, to build a fully functional SD-WAN environment.', topics: 'vManage - vSmart - vBond' },
                { id: '03', title: 'Router Deployment', desc: 'Master the onboarding, configuration, and integration of SD-WAN edge routers within enterprise network infrastructures.', topics: 'Edge Routers - Onboarding - Config' },
                { id: '04', title: 'Policies', desc: 'Explore centralized policy creation for intelligent traffic steering, application awareness, and optimized path control.', topics: 'Traffic Steering - App Aware - Path Control' },
                { id: '05', title: 'Security and QoS', desc: 'Implement SD-WAN security features including IPSec encryption, network segmentation, and quality of service (QoS) to ensure secure and reliable performance.', topics: 'IPSec - Segmentation - QoS' },
                { id: '06', title: 'Management and Operation', desc: 'Develop skills in monitoring, analytics, troubleshooting, and managing day-to-day SD-WAN operations for high network availability and performance.', topics: 'Monitoring - Analytics - Troubleshooting' }
            ],
            faqs: [
                { question: "Do I need a lab?", answer: "We provide hosted labs for practice." }
            ]
        }
    },
    {
        id: 4,
        attributes: {
            title: "Complete Network Automation Online Course for Network Engineers",
            slug: "python-automation",
            description: "Automate network tasks using Python.",
            duration: "4 Weeks", // From homepage
            modules: 5,
            videoHours: 40,
            price: 15000, // From homepage
            image: { data: { id: 4, attributes: { url: '/assets/p4.webp', alternativeText: 'Python', width: 640, height: 360 } } },
            hero: {
                title: "Complete Network Automation Online Course",
                subtitle: "Automate network tasks using Python. Stop doing manual tasks. Learn to script, automate, and orchestrate.",
                price: 15000,
                originalPrice: 25000,
                startDate: "Upcoming",
                batches: [
                    { name: "Weekend Workshop", time: "11:00 AM – 2:00 PM (IST)", days: "Saturday Only", status: "Open" }
                ]
            },
            overview: {
                title: "Network Programmability",
                description: "The future of networking is code. Learn the tools to stay relevant.",
                skills: [
                    { title: 'Python', icon: Terminal, desc: 'Python basics, data structures, and libraries' },
                    { title: 'Libraries', icon: Boxes, desc: 'Netmiko, Napalm, Paramiko, and Nornir' },
                    { title: 'APIs', icon: ArrowLeftRight, desc: 'REST APIs, JSON, XML, and Postman' },
                    { title: 'Ansible', icon: Cog, desc: 'Playbooks, inventory, and roles for network automation' }
                ]
            },
            roadmap: [
                { id: '01', title: 'Python Basics', desc: 'Build a strong foundation in Python programming tailored for network engineers.' },
                { id: '02', title: 'Network Automation Foundation', desc: 'Understand core automation concepts, tools, and workflows used in modern networking.' },
                { id: '03', title: 'Device-Level Network Automation', desc: 'Learn to automate routers and switches using scripts, APIs, and CLI-based automation.' },
                { id: '04', title: 'Controller-Based Network Automation', desc: 'Explore SDN controllers and centralized automation using platforms and REST APIs.' },
                { id: '05', title: 'Operations', desc: 'Master monitoring, troubleshooting, and maintaining automated network environments.' },
                { id: '06', title: 'AI in Automation', desc: 'Discover how AI enhances network automation with intelligent analysis and predictive operations.' }
            ],
            faqs: [
                { question: "Do I need coding experience?", answer: "No, we start from scratch." }
            ]
        }
    },
    {
        id: 5,
        attributes: {
            title: "CCNA & CCNP Combo Batch",
            slug: "ccna-ccnp-combo",
            description: "Comprehensive networking mastery.",
            duration: "20 Weeks", // From homepage
            modules: 16,
            videoHours: 180,
            price: 30000, // From homepage
            image: { data: { id: 5, attributes: { url: '/assets/p5.webp', alternativeText: 'Combo', width: 640, height: 360 } } },
            hero: {
                title: "CCNA & CCNP Combo Batch",
                subtitle: "The ultimate package to take you from a novice to a professional network engineer.",
                price: 30000,
                originalPrice: 45000,
                startDate: "Upcoming",
                batches: [
                    { name: "Fast Track", time: "6:00 PM – 9:00 PM (IST)", days: "Mon-Fri", status: "Waitlist" }
                ]
            },
            overview: {
                title: "Complete Networking Journey",
                description: "Save time and money by combining the associate and professional levels.",
                skills: [
                    { title: 'Foundations', icon: User, desc: 'Solid CCNA base' },
                    { title: 'Advanced Routing', icon: Server, desc: 'Complex OSPF/BGP scenarios' },
                    { title: 'Security', icon: Shield, desc: 'End-to-end network security' },
                    { title: 'Design', icon: Cpu, desc: 'Enterprise and Data Center design concepts' }
                ]
            },
            roadmap: [
                { id: '01', title: 'CCNA (200–301)', desc: 'Build a strong foundation in Cisco networking fundamentals, including routing, switching, IP services, and network security. Detailed topic coverage is available on the CCNA course page.' },
                { id: '02', title: 'CCNP Enterprise', desc: 'Advance your enterprise networking expertise through two core training components—ENCOR and ENARSI—covering advanced routing, infrastructure, security, and troubleshooting skills required for professional-level roles.' }
            ],
            faqs: [
                { question: "Is this intensive?", answer: "Yes, it covers a lot of ground effectively." }
            ]
        }
    }
];


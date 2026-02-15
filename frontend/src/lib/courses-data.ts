import { Course } from '@/types';
import { User, Server, Shield, Activity, Database, Globe, Lock, Cpu, Cloud, Code, Compass, Lightbulb } from 'lucide-react';

export const courses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200–301 Course (Training & Certificate)",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking with our comprehensive CCNA course.",
            duration: "6 weeks", // From homepage
            modules: 5,
            videoHours: 40,
            price: 15000, // From homepage
            image: { data: { id: 1, attributes: { url: '/assets/p1.webp', alternativeText: 'CCNA', width: 640, height: 360 } } },
            hero: {
                title: "Cisco CCNA 200–301 Course (Training & Certificate)",
                subtitle: "Kickstart your networking career with the industry standard certification.",
                price: 15000,
                originalPrice: 25000,
                startDate: "June 15, 2024",
                batches: [
                    { name: "Weekend Batch", time: "10:00 AM – 02:00 PM", days: "Saturday, Sunday", status: "Open" },
                    { name: "Weekday Evening", time: "07:00 PM – 09:00 PM", days: "Mon – Fri", status: "Filling Fast" }
                ]
            },
            overview: {
                title: "Course Overview",
                description: "A comprehensive deep-dive into networking fundamentals.",
                skills: [
                    { title: 'Network Fundamentals', icon: Globe, desc: 'Routers, Switches, Cabling, TCP/UDP' },
                    { title: 'Network Access', icon: Database, desc: 'VLANs, STP, EtherChannel' },
                    { title: 'IP Connectivity', icon: Server, desc: 'IPv4/IPv6 Routing, OSPF' },
                    { title: 'IP Services', icon: Activity, desc: 'DHCP, DNS, NTP, QoS' },
                    { title: 'Security Fundamentals', icon: Shield, desc: 'VPNs, ACLs, Security Policies' },
                    { title: 'Automation', icon: Code, desc: 'REST APIs, SDN, Puppet/Chef' },
                ]
            },
            roadmapModules: {
                encor: [], // Not used for CCNA
                enarsi: []
            },
            roadmap: [
                { id: '01', title: 'Network Fundamentals', desc: 'Introduction to networking concepts, routers, switches, and cabling.' },
                { id: '02', title: 'IP Connectivity', desc: 'Mastering IPv4/IPv6 addressing, subnetting, and routing protocols.' },
                { id: '03', title: 'Network Access', desc: 'Understanding VLANs, Trunking, Spanning Tree Protocol, and EtherChannel.' },
                { id: '04', title: 'IP Services', desc: 'Configuring DHCP, DNS, NTP, and Quality of Service (QoS) for network optimization.' },
                { id: '05', title: 'Security Fundamentals', desc: 'Implementing basic security measures, VPNs, ACLs, and device hardening.' },
                { id: '06', title: 'Automation & Programmability', desc: 'Introduction to network automation, REST APIs, and Software-Defined Networking (SDN).' }
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
            duration: "15 weeks", // From homepage
            modules: 10,
            videoHours: 60,
            price: 25000, // From homepage
            image: { data: { id: 2, attributes: { url: '/assets/p2.webp', alternativeText: 'CCNP', width: 640, height: 360 } } },
            hero: {
                title: "CCNP (Encor and Enarsi) Online Training Course",
                subtitle: "Advance your career with professional-level networking skills and deep dive into enterprise technologies.",
                price: 25000,
                originalPrice: 40000,
                startDate: "Upcoming",
                batches: [
                    { name: "Weekend Intensive", time: "09:00 AM – 01:00 PM (IST)", days: "Saturday, Sunday", status: "Filling Fast" }
                ]
            },
            overview: {
                title: "Program Overview",
                description: "A dual-focus approach to master both core and concentration areas.",
                skills: [
                    {
                        title: '350-401 ENCOR',
                        icon: Compass,
                        desc: 'Implementing and Operating Cisco Enterprise Network Core Technologies.',
                        points: [
                            'Dual stack (IPv4 and IPv6) architecture',
                            'Virtualization and Cloud Connectivity',
                            'Network Assurance & Monitoring'
                        ]
                    },
                    {
                        title: '300-410 ENARSI',
                        icon: Lightbulb,
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
            duration: "7 weeks", // From homepage
            modules: 10,
            videoHours: 35,
            price: 15000, // From homepage
            image: { data: { id: 3, attributes: { url: '/assets/p3.webp', alternativeText: 'SD-WAN', width: 640, height: 360 } } },
            hero: {
                title: "Cisco SD-WAN Online Course",
                subtitle: "Master Software-Defined WAN and revolutionize your network infrastructure.",
                price: 15000,
                originalPrice: 20000,
                startDate: "Upcoming",
                batches: [
                    { name: "Regular Batch", time: "8:00 PM – 10:00 PM (IST)", days: "Mon, Wed, Fri", status: "Open" }
                ]
            },
            overview: {
                title: "Program Overview",
                description: "A dual-focus approach to master both core and concentration areas.",
                skills: [
                    { title: 'SD-WAN Architecture', icon: Cloud, desc: 'Master the Orchestration, Management, Control, and Data planes within the Cisco SD-WAN fabric.' },
                    { title: 'Deployment & Config', icon: Server, desc: 'End-to-end controller deployment (vManage, vBond, vSmart) and WAN Edge router onboarding.' },
                    { title: 'Policies & Traffic', icon: Globe, desc: 'Implementing Control and Data policies for intelligent path selection and Application-Aware Routing.' },
                    { title: 'SD-WAN Security', icon: Shield, desc: 'Securing the fabric with Enterprise Firewall, IPS, URL Filtering, and Advanced Malware Protection.' },
                    { title: 'Monitoring & Troubleshoot', icon: Activity, desc: 'Using vManage for real-time monitoring, diagnostic tools, and fabric-wide troubleshooting.' },
                    { title: 'Automation & API', icon: Code, desc: 'Leveraging REST APIs for network automation and vManage integration with external tools.' }
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
            title: "Complete Python Automation Online Course for Network Engineers",
            slug: "python-automation",
            description: "Automate network tasks using Python.",
            duration: "7 weeks", // From homepage
            modules: 10,
            videoHours: 25,
            price: 15000, // From homepage
            image: { data: { id: 4, attributes: { url: '/assets/p4.webp', alternativeText: 'Python', width: 640, height: 360 } } },
            hero: {
                title: "Complete Python Automation Online Course",
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
                    { title: 'Python', icon: Code, desc: 'Python basics, data structures, and libraries' },
                    { title: 'Libraries', icon: Database, desc: 'Netmiko, Napalm, Paramiko, and Nornir' },
                    { title: 'APIs', icon: Globe, desc: 'REST APIs, JSON, XML, and Postman' },
                    { title: 'Ansible', icon: Server, desc: 'Playbooks, inventory, and roles for network automation' }
                ]
            },
            roadmap: [
                { id: '01', title: 'Python Basics', desc: 'Variables, loops, functions, and data types specifically for network engineers.', topics: 'Lists - Dictionaries - Loops' },
                { id: '02', title: 'Connectivity', desc: 'Connecting to devices using SSH via Paramiko and Netmiko.', topics: 'SSH - Telnet' },
                { id: '03', title: 'Data Handling', desc: 'Parsing and manipulating data using Regex, JSON, and YAML.', topics: 'JSON - YAML - Regex' },
                { id: '04', title: 'Abstraction', desc: 'Using Napalm for vendor-agnostic automation.', topics: 'Getters - Config Merge' },
                { id: '05', title: 'Ansible', desc: 'Agentless automation using Ansible playbooks.', topics: 'Inventory - Playbooks' },
                { id: '06', title: 'DevOps', desc: 'Git, CI/CD, and pipeline basics for network configurations.', topics: 'Git - Jenkins' }

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
            duration: "20 weeks", // From homepage
            modules: 20,
            videoHours: 100,
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


import { Course } from '@/types';
import { User, Server, Shield, Activity, Database, Globe, Lock, Cpu, Cloud, Code } from 'lucide-react';

export const courses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200–301 Course (Training & Certificate)",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking.",
            duration: "7 weeks", // From homepage
            modules: 10,
            videoHours: 45, // Inferred from "45 days" duration mention or generic
            price: 8499, // From homepage
            image: { data: { id: 1, attributes: { url: '/assets/p1.webp', alternativeText: 'CCNA', width: 640, height: 360 } } },
            hero: {
                title: "Become a Job-Ready Network Engineer with CCNA (200-301)",
                subtitle: "Master the fundamentals of networking, security, and automation through hands-on labs and expert-led mentorship and launch your career with confidence.",
                price: 8499,
                originalPrice: 12000,
                startDate: "Upcoming",
                batches: [
                    { name: "Weekday Batch", time: "Flexible", days: "Monday - Friday", status: "Open" },
                    { name: "Weekend Batch", time: "Flexible", days: "Saturday & Sunday", status: "Open" }
                ]
            },
            overview: {
                title: "Program Overview",
                description: "This CCNA program covers networking foundations, routing & switching, network services & security, and troubleshooting skills.",
                skills: [
                    { title: 'Foundations', icon: User, desc: 'OSI vs TCP/IP, IP addressing & Subnetting, Data flow' },
                    { title: 'Routing & Switching', icon: Server, desc: 'VLANs, trunking, inter-VLAN routing, Static & dynamic routing' },
                    { title: 'Security', icon: Shield, desc: 'NAT, DHCP, DNS, ACLs, Basic network security' },
                    { title: 'Troubleshooting', icon: Activity, desc: 'Identify issues, CLI commands, Real-life scenarios' },
                ]
            },
            roadmap: [
                { id: '01', title: 'Network Fundamentals', desc: 'Understand how networks work, including devices, protocols, and data flow basics.', topics: 'Devices - Protocols - Data Flow' },
                { id: '02', title: 'IP Connectivity', desc: 'Learn IP addressing, subnetting, and routing concepts for network communication.', topics: 'IP Addressing - Subnetting - Routing' },
                { id: '03', title: 'Network Access', desc: 'Configure and manage switches, VLANs, and access to wired and wireless networks.', topics: 'Switches - VLANs - Wireless' },
                { id: '04', title: 'IP Services', desc: 'DHCP, DNS, NAT, and other essential network services.', topics: 'DHCP - DNS - NAT' },
                { id: '05', title: 'Security Fundamentals', desc: 'Network security basics, VPNs, ACLs, and Layer 2 security features.', topics: 'VPNs - ACLs - Layer 2 Security' },
                { id: '06', title: 'Automation', desc: 'Introduction to network automation, SDN, and APIs.', topics: 'SDN - APIs - Configuration Management' },
            ],
            faqs: [
                { question: "What is the duration of the course?", answer: "The course duration is approximately 45 days or 7 weeks." },
                { question: "Is certification included?", answer: "The course prepares you for the CCNA 200-301 certification exam, which is taken separately." },
                { question: "Do you offer lab access?", answer: "Yes, we provide unlimited lab access for practice." }
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
            price: 29999, // From homepage
            image: { data: { id: 2, attributes: { url: '/assets/p2.webp', alternativeText: 'CCNP', width: 640, height: 360 } } },
            hero: {
                title: "CCNP (Encor and Enarsi) Online Training Course",
                subtitle: "Advance your career with professional-level networking skills and deep dive into enterprise technologies.",
                price: 29999,
                originalPrice: 40000,
                startDate: "Upcoming",
                batches: [
                    { name: "Weekend Intensive", time: "09:00 AM – 01:00 PM (IST)", days: "Saturday, Sunday", status: "Filling Fast" }
                ]
            },
            overview: {
                title: "Advanced Enterprise Skills",
                description: "Targeted for network engineers looking to upgrade their skills to the professional level.",
                skills: [
                    { title: 'Advanced Routing', icon: Server, desc: 'Deep dive into OSPF, EIGRP, BGP, and path control' },
                    { title: 'Switching', icon: Database, desc: 'Advanced VLANs, STP, and High Availability' },
                    { title: 'Virtualization', icon: Cloud, desc: 'Network virtualization, VRF, and GRE tunnels' },
                    { title: 'Assurance', icon: Activity, desc: 'Network assurance, monitoring, and troubleshooting tools' },
                ]
            },
            roadmap: [
                { id: '01', title: 'Architecture', desc: 'Enterprise network architecture, tiering, and design principles.', topics: 'Design - High Availability' },
                { id: '02', title: 'Virtualization', desc: 'Understanding device virtualization, data path virtualization, and network virtualization.', topics: 'VRF - GRE - LISP' },
                { id: '03', title: 'Infrastructure', desc: 'Layer 2, Layer 3, Wireless, and IP Services.', topics: 'MST - BGP - QoS' },
                { id: '04', title: 'Network Assurance', desc: 'Diagnosing network problems using tools like debug, conditionally debug, trace route, ping, SNMP, and Syslog.', topics: 'NetFlow - SPAN - IP SLA' },
                { id: '05', title: 'Security', desc: 'Device access control, infrastructure security features, and wireless security features.', topics: 'CoPP - ACLs - AAA' },
                { id: '06', title: 'Automation', desc: 'Python, JSON, XML, YAML, NETCONF, RESTCONF, and EEM.', topics: 'EEM - RESTCONF - Ansible' },
            ],
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
            price: 14999, // From homepage
            image: { data: { id: 3, attributes: { url: '/assets/p3.webp', alternativeText: 'SD-WAN', width: 640, height: 360 } } },
            hero: {
                title: "Cisco SD-WAN Online Course",
                subtitle: "Master Software-Defined WAN and revolutionize your network infrastructure.",
                price: 14999,
                originalPrice: 20000,
                startDate: "Upcoming",
                batches: [
                    { name: "Regular Batch", time: "8:00 PM – 10:00 PM (IST)", days: "Mon, Wed, Fri", status: "Open" }
                ]
            },
            overview: {
                title: "SD-WAN Mastery",
                description: "Transition from traditional WAN to the flexible, secure, and cost-effective SD-WAN.",
                skills: [
                    { title: 'Overlay', icon: Cloud, desc: 'OMP, TLOCs, and Fabric operation' },
                    { title: 'Templates', icon: Code, desc: 'Feature and Device templates configuration' },
                    { title: 'Policies', icon: Shield, desc: 'Centralized and Local policies for traffic control' },
                    { title: 'Onboarding', icon: Server, desc: 'Zero Touch Provisioning and PnP' }
                ]
            },
            roadmap: [
                { id: '01', title: 'Introduction', desc: 'SD-WAN components, architecture, and benefits over traditional WAN.', topics: 'vSmart - vBond - vManage' },
                { id: '02', title: 'Deployment', desc: 'Controller deployment, certificate management, and initial bringing up.', topics: 'Certificates - ZTP' },
                { id: '03', title: 'Templates', desc: 'Creating and attaching device and feature templates.', topics: 'CLI vs Feature Templates' },
                { id: '04', title: 'Policies', desc: 'Traffic flow manipulation, application aware routing, and security policies.', topics: 'App-Route - Cflowd' },
                { id: '05', title: 'Security', desc: 'Zone based firewall, IPS, and URL filtering within SD-WAN.', topics: 'ZBFW - URL Filtering' },
                { id: '06', title: 'Management', desc: 'Upgrading, monitoring, and troubleshooting the SD-WAN fabric.', topics: 'Upgrade - Restore' }
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
            price: 19999, // From homepage
            image: { data: { id: 4, attributes: { url: '/assets/p4.webp', alternativeText: 'Python', width: 640, height: 360 } } },
            hero: {
                title: "Complete Python Automation Online Course",
                subtitle: "Automate network tasks using Python. Stop doing manual tasks. Learn to script, automate, and orchestrate.",
                price: 19999,
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
            price: 34999, // From homepage
            image: { data: { id: 5, attributes: { url: '/assets/p5.webp', alternativeText: 'Combo', width: 640, height: 360 } } },
            hero: {
                title: "CCNA & CCNP Combo Batch",
                subtitle: "The ultimate package to take you from a novice to a professional network engineer.",
                price: 34999,
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
                { id: '01', title: 'CCNA Phase', desc: 'Weeks 1-7: Covering all CCNA 200-301 topics.', topics: 'Fundamentals - Access' },
                { id: '02', title: 'Transition', desc: 'Week 8: Bridging the gap and advanced labs.', topics: 'Complex Labs' },
                { id: '03', title: 'CCNP Core', desc: 'Weeks 9-14: ENCOR material and architecture.', topics: 'Architecture - Virtualization' },
                { id: '04', title: 'CCNP Concentration', desc: 'Weeks 15-20: ENARSI deep dive into routing.', topics: 'Advanced Routing - Services' },
            ],
            faqs: [
                { question: "Is this intensive?", answer: "Yes, it covers a lot of ground effectively." }
            ]
        }
    }
];

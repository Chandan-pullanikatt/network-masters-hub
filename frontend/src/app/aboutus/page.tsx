"use client";

import Image from "next/image";
import { UserCheck, Server, Briefcase } from "lucide-react";

export default function AboutUsPage() {
    return (
        <div className="bg-[#F5F8FC] min-h-screen flex flex-col items-center w-full">
            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-6 md:px-12 lg:px-[120px] flex flex-col gap-12 md:gap-[80px] mb-12 md:mb-[80px]">

                    <section className="flex flex-col items-center text-center mt-32 md:mt-[172px] w-full max-w-[823px] mx-auto">
                        <div className="bg-[#003366] border border-blue-400/30 rounded-3xl p-6 md:p-12 flex flex-col items-center gap-4 shadow-lg">
                            {/* Small Top Badge */}
                            <div className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm">
                                <span className="text-[14px] text-white font-medium tracking-wide">
                                    Leading the IT Education Revolution
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-3xl md:text-[44px] font-bold text-white leading-[1.2] tracking-tight mt-2">
                                Empowering the Next Generation <br /> of Network Engineers
                            </h1>

                            {/* Subtext */}
                            <p className="text-[16px] text-blue-100 max-w-[600px] leading-relaxed">
                                We bridge the gap between academic knowledge and real-world networking challenges through immersive, hands-on training aligned with global certification standards.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2 — OUR CORE VALUES */}
                    <section className="w-full bg-[#EAF1F8] rounded-xl px-6 py-10 md:px-[40px] md:py-[64px]">
                        <div className="flex flex-col items-center gap-8 md:gap-[48px]">
                            {/* Heading Block */}
                            <div className="text-center">
                                <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-2">Our Core Values</h2>
                                <p className="text-[16px] text-slate-600 font-medium">
                                    The principles that define our educational philosophy.
                                </p>
                            </div>

                            {/* Value Cards Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[40px] w-full">
                                {/* Card 1 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <UserCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Expert-Led Instruction</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            Gain direct mentorship from certified and industry-experienced networking professional.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Round the clock Lab Access</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            Practice, experiment, and strengthen your technical skills with hands-on infrastructure designed for real industry scenarios.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Personalised Career Guidance</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            From certification preparation to job readiness, we support your journey toward securing a professional role in networking and IT infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3 — JOURNEY SECTION */}
                    <section className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-[40px]">
                        {/* Left Column (Text) */}
                        <div className="flex-1 max-w-[600px] flex flex-col gap-4">
                            <h2 className="text-[28px] font-bold text-[#1a1a1a] leading-tight">
                                A Journey Rooted in Technical Excellence and a Passion for Mentorship
                            </h2>
                            <div className="space-y-4 text-[16px] text-slate-600 leading-relaxed">
                                <p>
                                    Network Masters Hub was founded with a clear vision — to bridge the gap between theoretical knowledge and real-world IT infrastructure expertise.
                                </p>
                                <p>
                                    The journey began with Pankaj’s career as a Network Engineer, where hands-on experience across enterprise environments shaped a deep understanding of networking systems, troubleshooting, and infrastructure design. Over the years, this technical foundation evolved into mastery — mentoring aspiring professionals, leading advanced training programs, and guiding more than 5,000+ students toward successful IT careers.
                                </p>
                                <p>
                                    With over a decade of industry and training experience, Network Masters Hub stands as a platform built on practical exposure, real-world scenarios, and career-focused learning.
                                </p>
                                <p>
                                    Our mission is simple yet powerful — to elevate the standards of networking education and equip learners with the technical confidence, problem-solving ability, and industry-ready skills required to thrive in the 21st-century IT landscape.
                                </p>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="flex-shrink-0 w-full lg:w-[491px]">
                            <div className="relative w-full h-[350px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/aboutus1.png"
                                    alt="Our Journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="w-full bg-[#F5F8FC] py-10 md:py-[80px]">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-[40px]">
                            {/* Left Column (Founder Image) */}
                            <div className="flex-shrink-0 w-full lg:w-[491px]">
                                <div className="relative w-full h-[400px] lg:h-[780px] rounded-[16px] overflow-hidden">
                                    <Image
                                        src="/assets/cef.png"
                                        alt="Pankaj Sethi - Founder"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Right Column (Content Card) */}
                            <div className="bg-white rounded-[16px] p-[32px] w-full max-w-[600px] shadow-sm">
                                <div className="flex flex-col gap-4">
                                    {/* Label */}
                                    <span className="text-[12px] font-bold text-[#003366] tracking-wider uppercase">
                                        Meet Our Visionary
                                    </span>

                                    {/* Name & Title */}
                                    <div>
                                        <h3 className="text-[28px] font-bold text-[#1a1a1a]">
                                            Pankaj Sethi
                                        </h3>
                                        <p className="text-[14px] font-bold text-[#003366] mt-1">
                                            Chief Executive & Founder
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="text-[15px] text-slate-600 leading-[160%] space-y-4">
                                        <p>
                                            Pankaj Sethi is the driving force behind Network Masters Hub — a technology leader, mentor, and industry practitioner committed to redefining networking education in India.
                                        </p>
                                        <p>
                                            Beginning his career as a Network Engineer, Pankaj built his expertise through extensive hands-on experience in enterprise IT environments, working across complex infrastructures and mission-critical networks. Over the years, his deep technical foundation evolved into a mastery of both execution and mentorship — bridging the gap between industry requirements and classroom learning.
                                        </p>
                                        <p>
                                            With more than a decade of industry exposure and having guided 5,000+ aspiring professionals, Pankaj has established himself as a trusted authority in networking and infrastructure training. His ability to simplify complex architectures into practical, real-world applications has empowered countless learners to build confident and successful IT careers.
                                        </p>
                                        <p>
                                            Under his leadership, Network Masters Hub stands as a results-driven platform focused on hands-on expertise, structured career pathways, and industry-ready skill development — setting new benchmarks in professional networking education.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4.5 — DIRECTOR PROFILE */}
                    <section className="w-full bg-[#F5F8FC] py-10 md:py-[80px]">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-[40px]">
                            {/* Left Column (Director Image) */}
                            <div className="flex-shrink-0 order-1 lg:order-1 w-full lg:w-[491px]">
                                {/* Keeping image on left to match "aligned exactly in the same layout" request */}
                                <div className="relative w-full h-[400px] lg:h-[780px] rounded-[16px] overflow-hidden">
                                    <Image
                                        src="/assets/chiefdirector.jpeg"
                                        alt="Dr. Ravika Sethi - Director"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Right Column (Content Card) */}
                            <div className="bg-white rounded-[16px] p-[32px] w-full max-w-[600px] shadow-sm order-2 lg:order-2">
                                <div className="flex flex-col gap-4">
                                    {/* Label */}
                                    <span className="text-[12px] font-bold text-[#003366] tracking-wider uppercase">
                                        Meet Our Director
                                    </span>

                                    {/* Name & Title */}
                                    <div>
                                        <h3 className="text-[28px] font-bold text-[#1a1a1a]">
                                            Dr. Ravika Sethi
                                        </h3>
                                        <p className="text-[14px] font-bold text-[#003366] mt-1">
                                            Director – Network Masters Hub
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="text-[15px] text-slate-600 leading-[160%] space-y-4">
                                        <p>
                                            Ravika Sethi is a dynamic marketing strategist and academic professional with over 15 years of experience in marketing, brand development, and business growth. She holds an MBA in Finance & Marketing and a PhD in Management, combining strategic insight with strong analytical expertise.
                                        </p>
                                        <p>
                                            With extensive experience in strategic marketing, digital branding, social media management, lead generation, and performance-driven campaigns, she has consistently driven measurable growth and strengthened brand positioning across domains.
                                        </p>
                                        <p>
                                            As Director and Marketing & Social Media Manager at Network Masters Hub, Ravika leads the organization’s growth strategy, strengthens its digital presence, and aligns operations with long-term vision—building a future-ready learning ecosystem and positioning Network Masters Hub as a trusted name in advanced networking and technology education.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5 — CERTIFICATIONS */}
                    <section className="w-full bg-white py-10 md:py-[80px] rounded-2xl my-8 shadow-sm border border-slate-100">
                        <div className="flex flex-col items-center text-center gap-10 max-w-[1000px] mx-auto px-4 md:px-6">

                            {/* Header Content */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-[#EAF1F8] border border-blue-100 rounded-full px-4 py-1.5 backdrop-blur-sm">
                                    <span className="text-[12px] text-[#003366] font-bold tracking-wide uppercase">
                                        Global Certifications
                                    </span>
                                </div>
                                <h2 className="text-[28px] font-bold text-[#1a1a1a]">
                                    Validated Expertise
                                </h2>
                                <p className="text-[16px] text-slate-600 max-w-[800px] leading-relaxed">
                                    "Certified with CCNA, Cisco Certified Specialist, and CCNP Enterprise, I bring advanced enterprise networking expertise backed by globally recognized Cisco standards. My approach focuses on practical skills, real-world troubleshooting, and job-ready implementation — not just theory."
                                </p>
                            </div>

                            {/* Images Grid */}
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-2">
                                {/* Cert 1 */}
                                <div className="relative w-[180px] h-[180px] grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                                    <Image
                                        src="/assets/aboutus2.png"
                                        alt="CCNA Certification"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Cert 2 */}
                                <div className="relative w-[180px] h-[180px] grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                                    <Image
                                        src="/assets/aboutus3.png"
                                        alt="Cisco Certified Specialist"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Cert 3 */}
                                <div className="relative w-[180px] h-[180px] grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                                    <Image
                                        src="/assets/aboutus4.png"
                                        alt="CCNP Enterprise"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

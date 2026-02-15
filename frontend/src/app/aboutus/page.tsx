"use client";

import Image from "next/image";
import { User, Monitor, Compass } from "lucide-react";

export default function AboutUsPage() {
    return (
        <div className="bg-[#F5F8FC] min-h-screen flex flex-col items-center w-full">
            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-[120px] flex flex-col gap-[80px] mb-[80px]">

                    {/* SECTION 1 — HERO */}
                    <section className="flex flex-col items-center text-center mt-[172px] gap-2 w-full max-w-[823px] mx-auto">
                        {/* Small Top Badge */}
                        <div className="bg-white/50 border border-slate-200 rounded-full px-4 py-1.5 backdrop-blur-sm">
                            <span className="text-[14px] text-[#003366] font-medium tracking-wide">
                                Leading the IT Education Revolution
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-[44px] font-bold text-[#1a1a1a] leading-[1.2] tracking-tight">
                            Empowering the Next Generation <br /> of Network Engineers
                        </h1>

                        {/* Subtext */}
                        <p className="text-[16px] text-slate-600 max-w-[600px] leading-relaxed">
                            We bridge the gap between academic knowledge and real-world networking challenges through immersive, hands-on training aligned with global certification standards.
                        </p>
                    </section>

                    {/* SECTION 2 — OUR CORE VALUES */}
                    <section className="w-full bg-[#EAF1F8] rounded-xl px-[40px] py-[64px]">
                        <div className="flex flex-col items-center gap-[48px]">
                            {/* Heading Block */}
                            <div className="text-center">
                                <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-2">Our Core Values</h2>
                                <p className="text-[16px] text-slate-600 font-medium">
                                    The principles that define our educational philosophy.
                                </p>
                            </div>

                            {/* Value Cards Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] w-full">
                                {/* Card 1 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Person Instruction</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            Benefit from live instruction by passionate Cisco expert
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <Monitor className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Round-the-clock lab access</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            You will enjoy access to a cutting-edge lab environment to refine your abilities
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white rounded-xl p-[24px] flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="bg-[#EAF1F8] p-3 rounded-lg text-[#003366]">
                                        <Compass className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Personalized Career Guidance</h3>
                                        <p className="text-[14px] text-slate-600 leading-relaxed">
                                            Secure your networking role with PM Networking training for Cisco technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3 — JOURNEY SECTION */}
                    <section className="w-full flex flex-col lg:flex-row items-center gap-[40px]">
                        {/* Left Column (Text) */}
                        <div className="flex-1 max-w-[600px] flex flex-col gap-4">
                            <h2 className="text-[28px] font-bold text-[#1a1a1a] leading-tight">
                                A Journey Fueled by Technical Curiosity and a Passion for Teaching
                            </h2>
                            <div className="space-y-4 text-[16px] text-slate-600 leading-relaxed">
                                <p>
                                    Founded in 2012, NetAcademy began as a single-server setup in a small office. Today, we've grown into a trusted IT education hub, empowering thousands of students to master the infrastructure powering the modern digital world.
                                </p>
                                <p>
                                    Our mission is simple yet powerful — to democratize high-quality networking education and equip learners with the skills needed to thrive in the 21st century.
                                </p>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="flex-shrink-0">
                            <div className="relative w-full lg:w-[491px] h-[290px] rounded-[24px] overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/aboutus1.png"
                                    alt="Our Journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4 — MEET OUR VISIONARY */}
                    <section className="w-full bg-[#F5F8FC] py-[80px]">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px]">
                            {/* Left Column (Founder Image) */}
                            <div className="flex-shrink-0">
                                <div className="relative w-full lg:w-[491px] h-auto rounded-[16px] overflow-hidden">
                                    {/* Assuming cef.png is the founder based on context. If not, can be swapped. */}
                                    <Image
                                        src="/assets/cef.png"
                                        alt="Pankaj Sethi - Founder"
                                        width={491}
                                        height={550}
                                        className="object-cover w-full h-auto rounded-[16px]"
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
                                            Pankaj Sethi, the visionary behind Network Masters Hub, is not just an instructor but a catalyst for transformation in the field of networking. Armed with a Bachelor of Technology degree from BRCM College of Engineering and Technology, Bhiwani, and an MBA from Symbiosis International University, Pankaj honed his skills at various MNCs for over 15 years before following his true calling—teaching.
                                        </p>
                                        <p>
                                            His passion for simplifying complex networking concepts has earned him the reputation of being one of the top educators. With over 4 years of teaching experience, Pankaj has guided countless students and professionals to achieve remarkable success in their careers. Network Masters Hub, under his adept mentorship, has emerged as the fastest-growing platform in India for CISCO Certification, offering a beacon of knowledge and excellence to all aspiring networking professionals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

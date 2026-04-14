import Image from "next/image";
import { getStrapiData, getStrapiMedia } from "@/lib/strapi";
import { Globe, BookOpen, Users, Award } from "lucide-react";

export default async function AboutUsPage() {
    let aboutData: any = null;
    try {
        const response = await getStrapiData('/about-us', { populate: '*' });
        aboutData = response.data?.attributes || response.data;
    } catch (e) {
        console.error("Error fetching about us data:", e);
    }

    // --- Hero ---
    const heroTitle = aboutData?.heroTitle || "Leading the IT Education Revolution";
    const heroSubtitle = aboutData?.heroSubtitle || "Empowering the Next Generation of Network Engineers";
    const heroSubtext = aboutData?.heroSubtext || "We bridge the gap between academic knowledge and real-world networking challenges through immersive, hands-on training aligned with global certification standards.";

    // --- Core Values ---
    const coreValuesHeading = aboutData?.coreValuesHeading || "Our Core Values";
    const coreValuesSubheading = aboutData?.coreValuesSubheading || "The principles that define our educational philosophy.";
    const coreValues = [
        {
            icon: <Users className="w-6 h-6 text-[#003366]" />,
            title: aboutData?.coreValue1Title || "Expert-Led Instruction",
            desc: aboutData?.coreValue1Desc || "Gain direct mentorship from certified and industry-experienced networking professionals.",
        },
        {
            icon: <Globe className="w-6 h-6 text-[#003366]" />,
            title: aboutData?.coreValue2Title || "Round the Clock Lab Access",
            desc: aboutData?.coreValue2Desc || "Practice, experiment, and strengthen your technical skills with hands-on infrastructure designed for real industry scenarios.",
        },
        {
            icon: <BookOpen className="w-6 h-6 text-[#003366]" />,
            title: aboutData?.coreValue3Title || "Personalised Career Guidance",
            desc: aboutData?.coreValue3Desc || "From certification preparation to job readiness, we support your journey toward securing a professional role in networking and IT infrastructure.",
        },
    ];

    // --- Journey ---
    const journeyHeading = aboutData?.journeyHeading || "A Journey Rooted in Technical Excellence and a Passion for Mentorship";
    const journeyImage = getStrapiMedia(aboutData?.journeyImage) || "/assets/aboutus1.png";

    // --- Director ---
    const directorImage = getStrapiMedia(aboutData?.directorPhoto) || "/assets/chiefdirector.jpeg";

    // --- Founder/Visionary ---
    const founderImage = getStrapiMedia(aboutData?.founderPhoto) || "/assets/cef.png";

    // --- Certifications ---
    const certLogos = aboutData?.certificationLogos?.map((logo: any) => getStrapiMedia(logo)).filter(Boolean) || [
        "/assets/aboutus2.png",
        "/assets/aboutus3.png",
        "/assets/aboutus4.png",
    ];
    const certificationsTitle = aboutData?.certificationsTitle || "Validated Expertise";
    const certificationsDesc = aboutData?.certificationsDesc || "Certified with CCNA, Cisco Certified Specialist, and CCNP Enterprise, I bring advanced enterprise networking expertise backed by globally recognized Cisco standards. My approach focuses on practical skills, real-world troubleshooting, and job-ready implementation — not just theory.";

    return (
        <div className="bg-[#F5F8FC] min-h-screen">
            {/* Hero */}
            <div className="bg-[#003366] text-white pt-32 pb-20 text-center">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {heroTitle}
                    </h1>
                    <p className="text-xl text-blue-100 font-semibold mb-4">
                        {heroSubtitle}
                    </p>
                    <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                        {heroSubtext}
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="container mx-auto px-4 md:px-6 py-16 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 text-center md:text-left">
                   <div className="w-full">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{coreValuesHeading}</h2>
                        <p className="text-slate-500">{coreValuesSubheading}</p>
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreValues.map((val, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#003366] transition-colors">
                                <span className="group-hover:text-white transition-colors">{val.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Journey */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#003366] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Our Journey</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">{journeyHeading}</h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                {aboutData?.journeyText ? (
                                    <div dangerouslySetInnerHTML={{ __html: aboutData.journeyText }} />
                                ) : (
                                    <>
                                        <p>Network Masters Hub was founded with a clear vision — to bridge the gap between theoretical knowledge and real-world IT infrastructure expertise.</p>
                                        <p>The journey began with Pankaj's career as a Network Engineer, where hands-on experience across enterprise environments shaped a deep understanding of networking systems, troubleshooting, and infrastructure design. Over the years, this technical foundation evolved into mastery — mentoring aspiring professionals, leading advanced training programs, and guiding more than <strong className="text-slate-900">5,000+ students</strong> toward successful IT careers.</p>
                                        <p>With over a decade of industry and training experience, Network Masters Hub stands as a platform built on practical exposure, real-world scenarios, and career-focused learning.</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="w-full lg:w-[500px] flex-shrink-0">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-8 ring-slate-50">
                                <Image src={journeyImage} alt="Our Journey" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Director */}
            <div id="director" className="container mx-auto px-4 md:px-6 py-24 max-w-6xl border-t border-slate-100">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image 
                                src={directorImage} 
                                alt={aboutData?.directorName || "Dr. Ravika Sethi"} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10 lg:hidden">
                                <h3 className="text-2xl font-bold text-white mb-1">{aboutData?.directorName || "Dr. Ravika Sethi"}</h3>
                                <p className="text-white/80 font-medium tracking-wide">{aboutData?.directorRole || "Director"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative">
                            <div className="absolute top-0 right-0 p-8 text-blue-50">
                                <Users className="w-24 h-24 rotate-12" />
                            </div>
                            <p className="text-[#003366] font-bold text-xs uppercase tracking-[0.2em] mb-4">Meet Our Director</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                                {aboutData?.directorName || "Dr. Ravika Sethi"}
                            </h2>
                            <p className="text-[#003366] font-bold text-lg mb-10 pb-2 border-b-2 border-blue-50 inline-block">
                                {aboutData?.directorRole || "Director – Network Masters Hub"}
                            </p>
                            
                            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-none space-y-5">
                                {aboutData?.directorBio ? (
                                    <div dangerouslySetInnerHTML={{ __html: aboutData.directorBio }} />
                                ) : (
                                    <>
                                        <p>Ravika Sethi is a dynamic marketing strategist and academic professional with over 15 years of experience in marketing, brand development, and business growth. She holds an MBA in Finance &amp; Marketing and a PhD in Management, combining strategic insight with strong analytical expertise.</p>
                                        <p>With extensive experience in strategic marketing, digital branding, social media management, lead generation, and performance-driven campaigns, she has consistently driven measurable growth and strengthened brand positioning across domains.</p>
                                        <p>As Director and Marketing &amp; Social Media Manager at Network Masters Hub, Ravika leads the organization's growth strategy, strengthens its digital presence, and aligns operations with long-term vision — building a future-ready learning ecosystem and positioning Network Masters Hub as a trusted name in advanced networking and technology education.</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Visionary */}
            <div id="visionary" className="bg-slate-50 py-24 border-t border-slate-100 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-stretch">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group bg-white">
                                <Image 
                                    src={founderImage} 
                                    alt={aboutData?.founderName || "Pankaj Sethi"} 
                                    fill 
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10 lg:hidden text-white">
                                    <h3 className="text-2xl font-bold mb-1">{aboutData?.founderName || "Pankaj Sethi"}</h3>
                                    <p className="text-white/80 font-medium tracking-wide">{aboutData?.founderRole || "Chief Executive & Founder"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center">
                            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative w-full">
                                <div className="absolute top-0 right-0 p-8 text-blue-50/50">
                                    <Award className="w-24 h-24 -rotate-12" />
                                </div>
                                <p className="text-[#003366] font-bold text-xs uppercase tracking-[0.2em] mb-4">Meet Our Visionary</p>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {aboutData?.founderName || "Pankaj Sethi"}
                                </h2>
                                <p className="text-[#003366] font-bold text-lg mb-10 pb-2 border-b-2 border-blue-50 inline-block">
                                    {aboutData?.founderRole || "Chief Executive & Founder"}
                                </p>
                                
                                <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-none space-y-6">
                                    {aboutData?.founderBio ? (
                                        <div dangerouslySetInnerHTML={{ __html: aboutData.founderBio }} />
                                    ) : (
                                        <>
                                            <p className="font-semibold text-slate-900 italic border-l-4 border-[#003366] pl-6 mb-8 text-xl">
                                                "Beginning his career as a Network Engineer, Pankaj built his expertise through experience in enterprise IT environments."
                                            </p>
                                            <p>Pankaj Sethi is the driving force behind Network Masters Hub — a technology leader, mentor, and industry practitioner committed to redefining networking education in India.</p>
                                            <p>With more than a decade of industry exposure and having guided 5,000+ aspiring professionals, Pankaj has established himself as a trusted authority in networking and infrastructure training.</p>
                                        </>
                                    )}
                                </div>
                                
                                <div className="mt-12 flex items-center gap-10">
                                    <div className="text-center">
                                        <p className="text-3xl font-extrabold text-[#003366]">10+</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Years Experience</p>
                                    </div>
                                    <div className="w-px h-12 bg-slate-100"></div>
                                    <div className="text-center">
                                        <p className="text-3xl font-extrabold text-[#003366]">5000+</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Mentees Guided</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Certifications */}
            <div className="container mx-auto px-4 md:px-6 py-32 max-w-5xl">
                <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-blue-50 text-center relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-50 text-[#003366] text-xs font-black rounded-full mb-10 uppercase tracking-[0.2em]">
                            <Globe className="w-4 h-4" />
                            Global Certifications
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight">{certificationsTitle}</h2>
                        
                        <div className="relative max-w-3xl mx-auto mb-20">
                            <span className="absolute -top-6 -left-8 text-8xl text-blue-100 font-serif opacity-50">"</span>
                            <blockquote className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed italic relative z-10">
                                {certificationsDesc}
                            </blockquote>
                            <span className="absolute -bottom-16 -right-8 text-8xl text-blue-100 font-serif opacity-50">"</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-center justify-items-center">
                            {certLogos.map((logo: string, i: number) => (
                                <div key={i} className="group relative w-full aspect-[4/3] max-w-[280px]">
                                    <div className="absolute inset-0 bg-slate-50 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform"></div>
                                    <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center p-8 group-hover:shadow-xl transition-all group-hover:-translate-y-2">
                                        <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <Image 
                                                src={logo} 
                                                alt={`Certification ${i + 1}`} 
                                                fill 
                                                className="object-contain" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

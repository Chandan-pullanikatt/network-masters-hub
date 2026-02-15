"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#F6FAFF] min-h-screen flex flex-col items-center w-full">
            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-[40px] pt-[64px] pb-[120px] flex flex-col items-center">

                    {/* Header Section */}
                    <div className="text-center flex flex-col items-center mb-[48px]">
                        <h1 className="text-[44px] font-bold text-[#1a1a1a] leading-[1.2] tracking-tight mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-[14px] text-slate-500 font-medium">
                            Last Updated: October 24, 2023
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="w-full max-w-[800px] bg-white rounded-[12px] p-[32px] shadow-sm">

                        {/* Intro Paragraph */}
                        <p className="text-[16px] text-slate-600 leading-relaxed mb-[32px]">
                            At Network Masters Hub, we are committed to protecting the privacy and security of our students and visitors. This Privacy Policy describes how we collect, use, and safeguard your personal information when you interact with our IT and networking education platform.
                        </p>

                        <div className="space-y-[32px]">
                            {/* Information We Collect */}
                            <section>
                                <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                                    </span>
                                    Information We Collect
                                </h2>
                                <ul className="space-y-3 text-[15px] text-slate-600 leading-relaxed list-disc pl-5 marker:text-[#003366]">
                                    <li><span className="font-semibold text-[#1a1a1a]">Personal Identification:</span> Name, email address, phone number, and mailing address provided during registration.</li>
                                    <li><span className="font-semibold text-[#1a1a1a]">Academic Progress:</span> Course enrollment details, quiz results, certification progress, and lab completion status.</li>
                                    <li><span className="font-semibold text-[#1a1a1a]">Technical Data:</span> IP addresses, browser type, device identifiers, and operating system information used to access our labs.</li>
                                </ul>
                            </section>

                            {/* How We Use Your Information */}
                            <section>
                                <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                    </span>
                                    How We Use Your Information
                                </h2>
                                <p className="text-[15px] text-slate-600 mb-2">Your data allows us to maintain a secure and effective learning environment:</p>
                                <ul className="space-y-3 text-[15px] text-slate-600 leading-relaxed list-disc pl-5 marker:text-[#003366]">
                                    <li>To deliver educational content, manage your student account, and process course certifications.</li>
                                    <li>To provide technical support for our virtual networking labs and troubleshooting assistance.</li>
                                    <li>To send periodic updates regarding course curriculum changes, new networking workshops, and community news.</li>
                                </ul>
                            </section>

                            {/* Data Protection */}
                            <section>
                                <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                                    </span>
                                    Data Protection
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed">
                                    As an IT education provider, we take security seriously. We implement industry-standard encryption (SSL/TLS) for all data transfers. Our internal databases are protected by multi-layered firewalls and access controls. We regularly conduct vulnerability assessments of our Learning Management System (LMS) to ensure your data remains secure against evolving cyber threats.
                                </p>
                            </section>

                            {/* Third-Party Sharing */}
                            <section>
                                <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                    </span>
                                    Third-Party Sharing
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed">
                                    We do not sell your personal data to third parties. We only share information with trusted service providers who assist us in operating our website, conducting our business, or servicing our users, such as payment processors (Stripe) and cloud infrastructure providers (AWS/Azure). These parties are contractually obligated to keep your information confidential.
                                </p>
                            </section>

                            {/* Cookies */}
                            <section>
                                <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
                                    </span>
                                    Cookies
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed">
                                    We use cookies to enhance your browsing experience and analyze site traffic. Essential cookies are required for site functionality, such as keeping you logged into the student portal. Analytical cookies help us understand which networking courses are most popular so we can improve our curriculum. You can choose to disable cookies through your browser settings, though some site features may become unavailable.
                                </p>
                            </section>

                        </div>



                    </div>

                </div>
            </div>
            {/* Footer is global, no need to add here */}

        </div>
    );
}

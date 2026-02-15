"use client";

import Link from "next/link";
import { GraduationCap, ShieldCheck, TrendingUp, RefreshCw, AlertTriangle, ExternalLink, Linkedin, Twitter } from "lucide-react";

export default function DisclaimerPage() {
    return (
        <div className="bg-[#F6FAFF] min-h-screen flex flex-col items-center w-full relative">
            {/* Background Pattern dots - simulating the subtle dots in the design if possible, 
                 using a simple radial gradient or just clean background for now as per other pages */}

            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-[40px] pt-[64px] pb-[120px] flex flex-col items-center">

                    {/* Header Section */}
                    <div className="w-full max-w-[800px] mb-[48px]">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-[#003366] tracking-widest uppercase mb-4">
                            <span className="text-slate-400">LEGAL</span>
                            <span className="text-slate-300">›</span>
                            <span>DISCLAIMER</span>
                        </div>

                        <h1 className="text-[44px] font-bold text-[#003366] leading-[1.2] tracking-tight mb-2">
                            Disclaimer
                        </h1>
                        <p className="text-[14px] text-slate-400 italic">
                            Last Updated: October 24, 2023
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="w-full max-w-[800px] bg-white rounded-[12px] p-[48px] shadow-sm">

                        <div className="space-y-[48px]">
                            {/* Educational Purpose */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                                    <GraduationCap className="text-[#003366] w-6 h-6" />
                                    Educational Purpose
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed text-justify">
                                    The information provided by <strong className="text-[#003366]">Network Masters Hub</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website and through our educational programs is for general educational and skill-development purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site or our course materials.
                                </p>
                            </section>

                            {/* Professional Boundaries */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-[#003366] w-6 h-6" />
                                    Professional Boundaries
                                </h2>

                                <div className="space-y-4">
                                    {/* No Job Guarantees */}
                                    <div className="bg-[#F6FAFF] rounded-lg p-6 border border-slate-50 flex gap-4">
                                        <div className="bg-[#003366] p-2 rounded w-fit h-fit shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /><path d="M22 17H2" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">No Job Guarantees</h3>
                                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                                Participation in our courses, labs, or mentorship programs does not guarantee employment, promotion, or any specific salary increase. Employment outcomes depend on individual market conditions and employer requirements.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Individual Results */}
                                    <div className="bg-[#F6FAFF] rounded-lg p-6 border border-slate-50 flex gap-4">
                                        <div className="bg-white p-2 rounded w-fit h-fit shrink-0 border border-slate-100">
                                            <TrendingUp className="text-[#003366] w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">Individual Results</h3>
                                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                                Success in IT and Networking requires consistent effort and practice. Results vary per individual and are dependent on personal dedication, prior experience, and the ability to apply learned concepts in practical scenarios.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Evolving Technical Content */}
                                    <div className="bg-[#F6FAFF] rounded-lg p-6 border border-slate-50 flex gap-4">
                                        <div className="bg-white p-2 rounded w-fit h-fit shrink-0 border border-slate-100">
                                            <RefreshCw className="text-[#003366] w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">Evolving Technical Content</h3>
                                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                                The field of Information Technology is rapidly evolving. While we strive to keep our content current, some modules may reference technologies or protocols that have been updated or deprecated by their respective vendors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Limitation of Liability */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                                    <AlertTriangle className="text-[#003366] w-6 h-6" />
                                    Limitation of Liability
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed text-justify">
                                    Under no circumstance shall Network Masters Hub have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided. Your use of the site and your reliance on any information is solely at your own risk. This includes, but is not limited to, hardware damage during labs, data loss, or misconfiguration of production environments based on educational examples.
                                </p>
                            </section>

                            {/* External Links Disclaimer */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                                    <ExternalLink className="text-[#003366] w-6 h-6" />
                                    External Links Disclaimer
                                </h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed text-justify mb-6">
                                    Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Network Masters Hub. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                                </p>

                                <div className="bg-[#F8F9FA] border-l-4 border-[#003366] p-4 rounded-r-lg">
                                    <p className="text-[12px] text-slate-500 italic leading-relaxed">
                                        <strong className="text-slate-700 not-italic">Note:</strong> Third-party logos and trademarks (such as Cisco, Juniper, AWS, or Microsoft) are the property of their respective owners and are used for identification purposes only.
                                    </p>
                                </div>
                            </section>

                        </div>



                    </div>

                </div>
            </div>


        </div>
    );
}

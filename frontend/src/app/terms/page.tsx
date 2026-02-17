"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="bg-[#F6FAFF] min-h-screen flex flex-col items-center w-full">
            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-6 py-10 md:px-[40px] md:pt-[64px] md:pb-[120px] flex flex-col items-center">

                    {/* Header Section */}
                    <div className="text-center flex flex-col items-center mb-[48px]">
                        {/* Badge */}
                        <div className="bg-[#EAF1F8] border border-slate-200 rounded-full px-3 py-1 mb-4">
                            <span className="text-[12px] text-[#003366] font-bold tracking-wide uppercase">
                                Legal Documentation
                            </span>
                        </div>

                        <h1 className="text-[44px] font-bold text-[#1a1a1a] leading-[1.2] tracking-tight mb-2">
                            Terms & Conditions
                        </h1>
                        <p className="text-[14px] text-slate-500 font-medium">
                            Effective Date: January 1, 2024 &nbsp;•&nbsp; Last Modified: May 15, 2024
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="w-full max-w-[800px] bg-white rounded-[12px] p-[32px] shadow-sm relative overflow-hidden">
                        {/* Background watermark/shape if needed, but keeping simple for now */}

                        {/* Intro Paragraph */}
                        <div className="border-l-4 border-[#003366] pl-4 mb-[32px]">
                            <p className="text-[16px] text-[#1a1a1a] font-medium leading-relaxed">
                                Please read these terms and conditions carefully before using our platform. By accessing Network Masters Hub, you agree to be bound by these provisions designed to protect our educational integrity and your user experience.
                            </p>
                        </div>

                        <div className="space-y-[32px]">
                            {/* 1. Use of Website */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4">1. Use of Website</h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                                    Network Masters Hub provides specialized IT and Networking education services. Access to this platform is granted under the following conditions:
                                </p>
                                <ul className="space-y-3 text-[15px] text-slate-600 leading-relaxed">
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-[#003366] shrink-0"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        <span>
                                            <strong className="text-[#1a1a1a]">Educational Purpose:</strong> The content provided is strictly for individual learning and skill development in the field of Information technology.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-[#003366] shrink-0"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        <span>
                                            <strong className="text-[#1a1a1a]">Prohibition of Resale:</strong> Users are strictly prohibited from reselling, redistributing, or sub-licensing any course material, lab access, or proprietary configurations.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-[#003366] shrink-0"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        <span>
                                            <strong className="text-[#1a1a1a]">Account Misuse:</strong> Shared credentials or concurrent logins from multiple geographic locations may result in automatic account suspension without refund.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-[#003366] shrink-0"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        <span>
                                            <strong className="text-[#1a1a1a]">Ethical Hacking:</strong> Use of our virtual labs for malicious activities against external systems is strictly forbidden and will be reported to authorities.
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            {/* 2. Enrollment & Access */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4">2. Enrollment & Access</h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                                    Your enrollment in our programs constitutes a contractual agreement between you and Network Masters Hub regarding the following terms:
                                </p>
                                <div className="bg-[#F6FAFF] rounded-lg p-6 grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">PAYMENTS</h4>
                                        <p className="text-[14px] text-slate-700 leading-relaxed">
                                            All course fees must be paid in full prior to gaining access to restricted modules. We utilize secure payment gateways, no financial data is stored on our local servers.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">DURATION</h4>
                                        <p className="text-[14px] text-slate-700 leading-relaxed">
                                            Standard enrollment provides 12 months of access unless otherwise specified in your specific tier of purchase.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[14px] text-slate-500 mt-4 italic">
                                    We reserve the right to modify course content, update lab topologies, and retire outdated material to ensure our curriculum remains aligned with industry certifications (Cisco, Juniper, CompTIA, etc.).
                                </p>
                            </section>

                            {/* 3. Intellectual Property */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4">3. Intellectual Property</h2>
                                <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4">
                                    {/* Using t&c1.png as requested */}
                                    <Image
                                        src="/assets/t&c1.png"
                                        alt="Intellectual Property Protection"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <p className="text-white font-medium italic text-center px-4">
                                            &quot;Protecting the innovation and effort behind our world-class networking curriculum.&quot;
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                                    All materials including but not limited to high-definition video lectures, proprietary network diagrams, downloadable workbooks, source code, and company logos are the exclusive intellectual property of Network Masters Hub. Unauthorized duplication, screen recording, or automated scraping of our content is a violation of international copyright laws.
                                </p>
                            </section>

                            {/* 4. Limitation of Liability */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4">4. Limitation of Liability</h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                                    While we strive for excellence, Network Masters Hub provides all educational services &quot;as is&quot; and &quot;as available.&quot; Users acknowledge the following:
                                </p>
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <table className="w-full text-[14px] text-slate-600">
                                        <thead className="bg-[#F6FAFF] border-b border-slate-200">
                                            <tr>
                                                <th className="px-6 py-3 text-left font-bold text-[#1a1a1a]">Category</th>
                                                <th className="px-6 py-3 text-left font-bold text-[#1a1a1a]">Disclaimer Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-[#1a1a1a]">Exam Results</td>
                                                <td className="px-6 py-4">Enrollment does not guarantee passing scores on official certification exams (CCNA, CCNP, etc.).</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-[#1a1a1a]">Career Outcomes</td>
                                                <td className="px-6 py-4">We do not guarantee job placement, salary increases, or specific employment offers post-completion.</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-[#1a1a1a]">Technical Issues</td>
                                                <td className="px-6 py-4">We are not liable for outages caused by user-end ISP issues or third-party cloud provider failures.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* 5. Modifications */}
                            <section>
                                <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-4">5. Modifications</h2>
                                <p className="text-[15px] text-slate-600 leading-relaxed">
                                    Network Masters Hub reserves the right to periodically update these Terms & Conditions to reflect changes in legal requirements or our service offerings. We will notify active students of significant changes via the email address associated with their account.
                                </p>
                                <p className="text-[15px] text-slate-600 leading-relaxed mt-2">
                                    Continued use of the website after such changes constitutes your acceptance of the new terms. We recommend checking this page monthly for updates.
                                </p>
                            </section>

                        </div>

                        {/* Contact Box at Bottom */}
                        <div className="mt-[64px] text-center pt-[32px] border-t border-slate-100">
                            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Have questions about our terms?</h3>
                            <p className="text-[14px] text-slate-600 mb-6">
                                Our legal and support teams are here to help clarify any points of concern.
                            </p>
                            <div className="flex justify-center gap-4">
                                <a href="mailto:legal@networkmastershub.com" className="flex items-center gap-2 px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors">
                                    <Mail className="w-4 h-4" />
                                    Email Legal Dept
                                </a>
                                <Link href="/contact" className="flex items-center gap-2 px-6 py-3 bg-[#F6FAFF] text-[#003366] border border-[#EAF1F8] rounded-lg font-medium hover:bg-[#EAF1F8] transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    Contact Support
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

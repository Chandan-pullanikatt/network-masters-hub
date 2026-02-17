"use client";

import Link from "next/link";
import { Ban, UserX, Headphones, Info, ShieldCheck, CheckCircle } from "lucide-react";

export default function RefundPolicyPage() {
    return (
        <div className="bg-[#F6FAFF] min-h-screen flex flex-col items-center w-full relative">

            {/* Page Container */}
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Content Container */}
                <div className="w-full max-w-[1200px] px-6 pt-10 md:px-[40px] md:pt-[64px] flex flex-col items-center">

                    {/* Header Section */}
                    <div className="w-full max-w-[800px] mb-[48px] text-center flex flex-col items-center">
                        <h1 className="text-[44px] font-bold text-white bg-[#003366] px-6 py-2 rounded-lg leading-[1.2] tracking-tight mb-4 uppercase">
                            Refund Policy
                        </h1>
                        <div className="bg-[#E7F0FF] text-[#0047AB] px-4 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-2 mb-6">
                            <Info className="w-4 h-4" />
                            Important Enrollment Information
                        </div>
                        <p className="text-[15px] text-slate-600 leading-relaxed max-w-[600px]">
                            At Network Masters Hub, we strive to provide world-class IT education. We strongly recommend all prospective students to thoroughly review course details, syllabus, and prerequisites before completing enrollment.
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="w-full max-w-[800px] bg-white rounded-[12px] p-[48px] shadow-sm mb-[64px]">

                        <div className="space-y-[48px]">
                            {/* Strict No-Refund Policy */}
                            <section className="flex gap-4 items-start">
                                <div className="bg-[#003366] p-2.5 rounded-lg shrink-0 text-white mt-1">
                                    <Ban className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-3">
                                        Strict No-Refund Policy
                                    </h2>
                                    <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                                        Due to the immediate access to proprietary course materials, curriculum frameworks, and instructor schedules, Network Masters Hub maintains a <strong className="text-[#1a1a1a]">Strict No-Refund Policy</strong> for all digital and live services. Once a purchase is made, the sale is considered final.
                                    </p>

                                    <div className="bg-[#F6FAFF] border border-slate-100 rounded-lg p-5">
                                        <h3 className="text-[14px] font-bold text-[#003366] flex items-center gap-2 mb-3">
                                            <ShieldCheck className="w-4 h-4" />
                                            This policy applies to all offerings, including:
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-[14px] text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
                                                Live Instructor-Led Training
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
                                                Pre-recorded Video Courses
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
                                                Specialized Intensive Workshops
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
                                                Digital Labs and Materials
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px bg-slate-100 w-full"></div>

                            {/* Non-Transferable Enrollment */}
                            <section className="flex gap-4 items-start">
                                <div className="bg-[#EAF1F8] p-2.5 rounded-lg shrink-0 text-[#003366] mt-1">
                                    <UserX className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-3">
                                        Non-Transferable Enrollment
                                    </h2>
                                    <p className="text-[15px] text-slate-600 leading-relaxed">
                                        Enrollments are uniquely assigned to individual students. Access permissions and course certifications are non-transferable. Users may not sell, trade, or gift their enrollment access to another individual. Any attempt to share account credentials or transfer seats without prior written authorization from Network Masters Hub administration will result in immediate termination of access without a refund.
                                    </p>
                                </div>
                            </section>

                            <div className="h-px bg-slate-100 w-full"></div>

                            {/* Technical or Access Issues */}
                            <section className="flex gap-4 items-start">
                                <div className="bg-[#EAF1F8] p-2.5 rounded-lg shrink-0 text-[#003366] mt-1">
                                    <Headphones className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-3">
                                        Technical or Access Issues
                                    </h2>
                                    <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
                                        We are committed to ensuring you have a seamless learning experience. If you encounter technical difficulties—such as login errors, video playback issues, or lab connectivity problems—our dedicated support team is available to assist you.
                                    </p>

                                    <div className="flex gap-4 mb-4">
                                        <Link href="/contact" className="flex items-center gap-2 px-6 py-2.5 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors text-[14px]">
                                            <Headphones className="w-4 h-4" />
                                            Contact Technical Support
                                        </Link>
                                        <Link href="/contact" className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#003366] text-[#003366] rounded-lg font-medium hover:bg-[#F6FAFF] transition-colors text-[14px]">
                                            <Info className="w-4 h-4" />
                                            Visit Help Center
                                        </Link>
                                    </div>

                                    <p className="text-[12px] text-slate-500 italic">
                                        *Note: Technical difficulties do not constitute grounds for a refund. We will work diligently to resolve any platform-side issues as quickly as possible.
                                    </p>
                                </div>
                            </section>

                        </div>



                    </div>

                </div>
            </div>

            {/* Before You Enroll Section */}
            <div className="w-full max-w-[1000px] mb-12 md:mb-[120px] mx-auto px-6 md:px-[40px]">
                <div className="bg-[#EAF1F8]/50 rounded-[16px] p-8">
                    <h3 className="font-bold text-[#1a1a1a] mb-4">Before You Enroll</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 text-[13px] text-slate-600">
                            <div className="bg-[#003366] text-white p-0.5 rounded">
                                <CheckCircle className="w-3 h-3" />
                            </div>
                            Confirm system requirements for labs
                        </div>
                        <div className="flex items-center gap-3 text-[13px] text-slate-600">
                            <div className="bg-[#003366] text-white p-0.5 rounded">
                                <CheckCircle className="w-3 h-3" />
                            </div>
                            Review the full course syllabus
                        </div>
                        <div className="flex items-center gap-3 text-[13px] text-slate-600">
                            <div className="bg-[#003366] text-white p-0.5 rounded">
                                <CheckCircle className="w-3 h-3" />
                            </div>
                            Check prerequisite knowledge level
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Footer (handled by layout) */}
        </div>
    );
}

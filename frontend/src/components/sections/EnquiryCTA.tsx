"use client";

import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const EnquiryCTA = () => {
    return (
        <section className="py-20 bg-[#EBF5FA]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl bg-white max-w-6xl mx-auto">

                    {/* Left Side - Dark Blue Visual */}
                    <div className="lg:w-[40%] bg-[#003B70] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Background decorative elements - attempting to match the 'x' pattern or subtle texture if possible, otherwise keeping clean dark blue */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 leading-tight">Book Your Complimentary<br />Career Consultation</h2>
                                <p className="text-blue-100/90 text-lg">
                                    Schedule a Free 1-on-1 Session for Personalized Guidance!
                                </p>
                            </div>

                            <div className="space-y-6 mt-8">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Call Us</p>
                                        <p className="font-bold text-lg">+91 7840018889</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <MessageSquare className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Chat on WhatsApp</p>
                                        <p className="font-bold text-lg">+91 7840018889</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Email Us</p>
                                        <p className="font-bold text-lg">admin@networkbulls.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-[60%] p-12 bg-white">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Send an Enquiry</h3>
                            <p className="text-slate-500 text-sm">Complete the form below and our team will get back to you within 24 hours</p>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-900">Full Name</label>
                                    <input className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="Enter Name *" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-900">Last Name</label>
                                    <input className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="Enter Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-900">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="Enter Email" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-900">Phone Number</label>
                                    <input type="tel" className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="Enter Phone Number *" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-900">Course Interested</label>
                                <div className="relative">
                                    <select className="w-full bg-slate-50 border-none rounded-md px-4 py-3 text-slate-600 focus:ring-1 focus:ring-blue-600 outline-none appearance-none text-sm cursor-pointer">
                                        <option>Cisco CCNA 200–301 Course (Training & Certificate)</option>
                                        <option>CCNP (ENCORE and ENARSI) Online Training Course</option>
                                        <option>Cisco SD-WAN Online Course (Lifetime Access)</option>
                                        <option>Complete Python Automation Online Course for Network Engineers</option>
                                        <option>CCNA & CCNP Combo Batch</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-900">Message</label>
                                <textarea rows={4} className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-1 focus:ring-blue-600 outline-none text-sm resize-none" placeholder="Tell us about your career goals and what you're looking to achieve..."></textarea>
                            </div>

                            <Button size="lg" className="w-full bg-[#003B70] hover:bg-[#002a50] text-white py-6 text-base font-semibold rounded-md mt-2">
                                Send
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EnquiryCTA;


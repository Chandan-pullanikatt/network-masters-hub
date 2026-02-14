"use client";

import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const EnquiryCTA = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl bg-white max-w-6xl mx-auto">

                    {/* Left Side - Dark Blue Visual */}
                    <div className="lg:w-[40%] bg-[#0B3B75] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.2) 0%, transparent 20%)' }}></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Book Your Complimentary Career Consultation</h2>
                                <p className="text-blue-100/90 text-lg">
                                    Schedule a Free 1-on-1 Session for Personalized Guidance!
                                </p>
                            </div>

                            <div className="space-y-6 mt-8">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200">Call Us</p>
                                        <p className="font-semibold text-lg">+91 7840018889</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200">Chat on WhatsApp</p>
                                        <p className="font-semibold text-lg">+91 7840018889</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200">Email Us</p>
                                        <p className="font-semibold text-lg">admin@networkmastershub.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-[60%] p-12 bg-white">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Send an Enquiry</h3>
                            <p className="text-slate-600">Complete the form below and our team will get back to you within 24 hours</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Full Name</label>
                                    <input className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter Name *" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Last Name</label>
                                    <input className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter Email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Phone Number</label>
                                    <input type="tel" className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter Phone Number *" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900">Course Interested</label>
                                <select className="w-full bg-slate-50 border-none rounded-md px-4 py-3 text-slate-600 focus:ring-2 focus:ring-blue-600 outline-none appearance-none">
                                    <option>CCNA 200-301</option>
                                    <option>CCNP Enterprise</option>
                                    <option>Python Automation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900">Message</label>
                                <textarea rows={4} className="w-full bg-slate-50 border-none rounded-md px-4 py-3 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Tell us about your career goals and what you&apos;re looking to achieve..."></textarea>
                            </div>

                            <Button size="lg" className="w-full bg-[#0B3B75] hover:bg-[#092d5a] text-white py-6 text-lg">
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

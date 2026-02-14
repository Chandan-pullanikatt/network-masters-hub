import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 bg-slate-50" id="contact">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-slate-600 mb-8">
                            Have questions about our courses or need career guidance? Fill out the form or reach us directly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                                    <p className="text-slate-600">+91 98765 43210</p>
                                    <p className="text-slate-600">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                                    <p className="text-slate-600">admissions@networkmastershub.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                                    <p className="text-slate-600">
                                        123, Tech Plaza, Sector 5<br />
                                        Electronic City, Bangalore - 560100
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                                    <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 9876543210" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="course" className="text-sm font-medium text-slate-700">Interested Course</label>
                                <select id="course" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                    <option value="">Select a course</option>
                                    <option value="ccna">CCNA 200-301</option>
                                    <option value="ccnp">CCNP Enterprise</option>
                                    <option value="python">Python Automation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Tell us about your learning goals..."></textarea>
                            </div>

                            <Button className="w-full">Submit Enquiry</Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

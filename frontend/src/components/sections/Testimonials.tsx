import { Quote } from 'lucide-react';

const testimonials = Array(6).fill({
    name: "Rahul Menon",
    role: "Junior Network Engineer",
    message: "Before joining, networking felt overwhelming. The structured labs and step-by-step guidance helped me understand real infrastructure environments. I didn't just clear concepts I gained confidence. Today, I handle live configurations without hesitation."
});

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories from Our Learners</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                        See how structured training and hands-on labs helped our students become job-ready IT professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-slate-50">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <Quote className="w-10 h-10 text-gray-200 rotate-180 fill-gray-100" />
                            </div>

                            <p className="text-slate-600 leading-relaxed flex-grow text-[15px]">
                                {testimonial.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

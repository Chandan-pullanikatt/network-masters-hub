import Image from 'next/image';

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Network Engineer @ Cisco",
        message: "Network Masters Hub transformed my career. The CCNA training was hands-on and the instructors were industry veterans.",
        image: "/avatars/rahul.jpg"
    },
    {
        name: "Priya Patel",
        role: "System Administrator @ Wipro",
        message: "The Python Automation course is a game changer. I've automated 50% of my daily tasks. Highly recommended!",
        image: "/avatars/priya.jpg"
    },
    {
        name: "Amit Kumar",
        role: "L2 Support Engineer @ HCL",
        message: "Best place for networking certifications. The lab access and personalized mentorship helped me crack my CCNP exam.",
        image: "/avatars/amit.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Students Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-2xl relative">
                            <div className="absolute top-8 right-8 text-blue-500 text-6xl opacity-20 font-serif">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic">
                                "{testimonial.message}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-600 rounded-full overflow-hidden relative">
                                    {/* Placeholder for avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">IMG</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

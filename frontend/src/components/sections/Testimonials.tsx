import { Quote } from 'lucide-react';
import { MotionSection, MotionDiv } from '@/components/ui/motion-container';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const testimonials = [
    {
        name: "Riya Bhardwaj",
        role: "CCNA Student",
        message: "Before joining the CCNA batch, networking concepts felt confusing and too technical. The structured lab sessions and practical topology explanations changed everything for me. Subnetting, VLANs, routing protocols — all became simple when practiced live. I didn’t just prepare for an exam; I built real networking confidence."
    },
    {
        name: "Anant Raj",
        role: "Network Automation Student",
        message: "Before this course, automation felt intimidating. But learning Python basics along with network automation tools made everything smooth. Seeing configurations get deployed automatically was a game changer. It helped me understand where the networking industry is heading."
    },
    {
        name: "Rahul Srivastava",
        role: "CCNP Student",
        message: "CCNP always felt like a difficult milestone, but the way advanced routing protocols like OSPF, EIGRP, and BGP were explained made it manageable. Complex topics were broken into small, understandable parts. The real-world scenarios shared during the sessions gave me industry-level clarity."
    },
    {
        name: "Samrat",
        role: "CCNA Student",
        message: "What I loved most about the CCNA course was the hands-on approach. Every concept was followed by lab implementation. Instead of memorizing commands, we understood why we were configuring them. Today, I can troubleshoot basic network issues confidently in real environments."
    },
    {
        name: "Ritesh Yadav",
        role: "CCNP Student",
        message: "The CCNP batch didn’t just focus on certification. We worked on multi-layer switching, redundancy protocols, and enterprise-level network designs. The troubleshooting approach taught here helped me think like a real network engineer rather than just a student preparing for exams."
    },
    {
        name: "Sneha Verma",
        role: "SD-WAN Student",
        message: "SD-WAN sounded complex initially, but the step-by-step explanation of architecture, controllers, policies, and real deployment scenarios made it simple. The labs gave me clarity on how enterprise WAN environments are evolving. This course truly upgraded my understanding of modern networking."
    },
    {
        name: "Karthik Reddy",
        role: "CCNA + CCNP Student",
        message: "Joining the combo batch was the best decision. The transition from fundamentals to advanced concepts was very smooth. The structured roadmap ensured that I didn’t miss any foundational clarity while moving towards advanced networking. It felt like a complete career transformation program."
    },
    {
        name: "Harsh Sharma",
        role: "Course Student",
        message: "The trainer has a unique way of simplifying even the most complicated networking concepts. Real-life examples, whiteboard explanations, and lab-based demonstrations made learning very engaging. Doubts were cleared patiently, no matter how basic they seemed."
    },
    {
        name: "Rihatik Kumar",
        role: "Network Student",
        message: "Earlier, I hesitated to touch live devices. But after practicing structured labs repeatedly, I developed the confidence to configure routers and switches without fear. The practical exposure reduced my nervousness during interviews and real-time troubleshooting."
    }
];

const Testimonials = () => {
    return (
        <section className="pt-20 pb-0 bg-[#F8F9FA]">
            <div className="max-w-[1280px] mx-auto w-full px-6">
                <MotionDiv
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories from Our Learners</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                            See how structured training and hands-on labs helped our students become job-ready IT professionals.
                        </p>
                    </MotionDiv>
                </MotionDiv>

                <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <MotionDiv key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-slate-50">
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
                        </MotionDiv>
                    ))}
                </MotionSection>
            </div>
        </section>
    );
};

export default Testimonials;

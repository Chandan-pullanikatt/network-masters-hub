import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const specificFaqs = [
    {
        question: "Who Should Enroll in the CCNA Training at Network Masters Hub?",
        answer: "This CCNA training program is perfect for students, fresh graduates, and working professionals looking to build a strong foundation in computer networking. No prior networking experience is required - we start from the basics and gradually move toward advanced concepts."
    },
    {
        question: "What Practical Exposure Will I Gain During the CCNA Course?",
        answer: "At Network Masters Hub, the CCNA course includes real-time network configurations and hands-on troubleshooting scenarios. You'll work with routers, switches, and simulators to gain practical, industry-relevant experience."
    },
    {
        question: "How Is This CCNA Course Different from Online Self-Learning?",
        answer: "Unlike self-paced online courses, this program offers live instructor-led sessions, doubt-clearing support, and dedicated mentorship. You'll also benefit from structured learning modules, regular assessments, and real-world examples that improve understanding and retention."
    },
    {
        question: "Does This Course Help with Job Preparation and Interviews?",
        answer: "Yes. Our CCNA training focuses not only on certification but also on career readiness. Students receive interview preparation support, resume guidance, and exposure to real networking scenarios commonly discussed in technical interviews."
    },
    {
        question: "What Topics Are Covered Beyond Basic Networking Concepts?",
        answer: "The course covers routing and switching fundamentals, IP addressing, VLANs, wireless networking, basic network security, automation concepts, and an introduction to modern networking technologies — all aligned with the latest CCNA syllabus."
    },
    {
        question: "Can I Pursue Advanced Networking Courses After Completing CCNA?",
        answer: "Absolutely. CCNA serves as a strong foundation for advanced certifications such as CCNP, network security programs, and specializations in enterprise networking, data centers, and cloud networking."
    }
];

const FAQ = () => {
    return (
        <section className="py-20 bg-slate-50" id="faq">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Answers to Your Most Common Questions</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {specificFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-white border text-left px-6 py-2 rounded-xl shadow-sm data-[state=open]:border-blue-500 data-[state=open]:ring-1 data-[state=open]:ring-blue-500 transition-all">
                            <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:no-underline py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;

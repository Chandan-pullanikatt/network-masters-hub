import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionSection, MotionDiv } from '@/components/ui/motion-container';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface FAQProps {
    items?: Array<{
        question: string;
        answer: string;
    }>;
}

const defaultFaqs = [
    {
        question: "Who Should Enroll in the CCNA Training at Network Masters Hub?",
        answer: "This CCNA training program is perfect for students, fresh graduates, and working professionals looking to build a strong foundation in computer networking."
    },
    {
        question: "What Practical Exposure Will I Gain During the CCNA Course?",
        answer: "At Network Masters Hub, the CCNA course includes real-time network configurations and hands-on troubleshooting scenarios."
    }
];

const FAQ = ({ items }: FAQProps) => {
    const faqList = (items && items.length > 0) ? items : defaultFaqs;

    return (
        <section className="py-20 bg-slate-50" id="faq">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <MotionDiv
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white bg-[#003366] px-6 py-2 rounded-lg inline-block mb-2">Frequently Asked Questions</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className="text-slate-500">Answers to Your Most Common Questions</p>
                    </MotionDiv>
                </MotionDiv>

                <MotionSection className="w-full space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqList.map((faq, index) => (
                            <MotionDiv key={index} variants={fadeInUp} className="bg-white border text-left px-6 py-2 rounded-xl shadow-sm transition-all">
                                <AccordionItem value={`item-${index}`} className="border-none">
                                    <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:no-underline py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </MotionDiv>
                        ))}
                    </Accordion>
                </MotionSection>
            </div>
        </section>
    );
};

export default FAQ;

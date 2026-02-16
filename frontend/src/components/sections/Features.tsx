import { ShieldCheck, Monitor, Award, UserCheck, Video } from 'lucide-react';
import { MotionSection, MotionDiv } from '@/components/ui/motion-container';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const features = [
    {
        icon: Monitor,
        title: "Engage with Live Learning",
        description: "Clear Your Doubts Instantly in our Interactive Sessions. Join us for a Fun and Immersive Learning Experience!"
    },
    {
        icon: ShieldCheck,
        title: "Unlimited Lab Access",
        description: "Practice Anytime, Anywhere. Perfect Your Skills Through Repetitive Practice!"
    },
    {
        icon: UserCheck,
        title: "Personalized Mentorship",
        description: "Receive Individualized Guidance at Network Masters Hub. Let Our Advisors Help You Choose the Perfect Course Based on Your Skills and Interests"
    },
    {
        icon: Video,
        title: "On-Demand Video Learning",
        description: "Dive into the Latest Syllabus with Pre-Recorded Videos, Available 24/7. Enhance Your Understanding with Quizzes, Assignments, and Detailed Feedback!"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
                <MotionDiv
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learners Choose us</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className="text-slate-600">A minimalist, modern approach to networking education focused on outcomes.</p>
                    </MotionDiv>
                </MotionDiv>

                <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <MotionDiv key={index} variants={fadeInUp} className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white text-center h-full">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </MotionDiv>
                    ))}
                </MotionSection>
            </div>
        </section>
    );
};

export default Features;

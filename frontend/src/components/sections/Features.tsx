import { MotionSection, MotionDiv } from '@/components/ui/motion-container';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { getIcon } from '@/lib/icons';

interface FeaturesProps {
    data?: {
        title?: string;
        description?: string;
        featureItems?: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
}

const defaultFeatures = [
    { icon: "Monitor", title: "Live Learning", description: "Interactive Sessions with instant doubt clearing." },
    { icon: "ShieldCheck", title: "Unlimited Lab Access", description: "Practice Anytime, Anywhere." },
    { icon: "UserCheck", title: "Mentorship", description: "Personalized guidance from experts." },
    { icon: "Video", title: "On-Demand Video", description: "24/7 Available pre-recorded videos." }
];

const Features = ({ data }: FeaturesProps) => {
    const features = data?.featureItems || defaultFeatures;

    return (
        <section className="py-20 bg-white" id="features">
            <div className="max-w-[1280px] mx-auto w-full px-6">
                <MotionDiv variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data?.title || "Why Learners Choose us"}</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className="text-slate-600">{data?.description || "A minimalist, modern approach to networking education focused on outcomes."}</p>
                    </MotionDiv>
                </MotionDiv>

                <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = getIcon(feature.icon);
                        return (
                            <MotionDiv key={index} variants={fadeInUp} className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white text-center h-full">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </MotionDiv>
                        );
                    })}
                </MotionSection>
            </div>
        </section>
    );
};

export default Features;

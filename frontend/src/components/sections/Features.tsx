import { ShieldCheck, Monitor, Award } from 'lucide-react';

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
        icon: Award,
        title: "Certification Upon Completion",
        description: "Stand Out in Your Field with a Dedicated Certificate. Showcase Your Expertise and Differentiate Yourself."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learners Choose us</h2>
                    <p className="text-slate-600">A minimalist, modern approach to networking education focused on outcomes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import { getIcon } from '@/lib/icons';

interface StepsProps {
    data?: {
        title?: string;
        description?: string;
        stepItems?: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
}

const defaultSteps = [
    { icon: "UserCircle", title: "Create Your Free Account", description: "Sign up with your email in just a few seconds." },
    { icon: "BookOpen", title: "Choose the Right Course", description: "Explore our wide range of courses and enroll." },
    { icon: "GraduationCap", title: "Begin Your Journey", description: "Dive into lessons, quizzes, and earn certificates." }
];

const Steps = ({ data }: StepsProps) => {
    const steps = data?.stepItems || defaultSteps;

    return (
        <section className="py-20 bg-[#EBF5FA]">
            <div className="max-w-[1280px] mx-auto w-full px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: data?.title || "Start Learning with Network Masters <br className='hidden md:block' /> Hub in Just 3 Simple Steps" }} />
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                        {data?.description || "A structured, flexible approach designed to take you from enrollment to industry-ready with clarity and confidence."}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {steps.map((step, index) => {
                            const Icon = getIcon(step.icon);
                            return (
                                <div key={index} className="flex flex-col items-start text-left space-y-4 md:px-4 pt-8 md:pt-0 first:pt-0">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                                        <Icon className="h-6 w-6 text-[#0B3B75]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;

import { UserCircle, BookOpen, GraduationCap } from 'lucide-react';

const Steps = () => {
    return (
        <section className="py-20 bg-[#EBF5FA]">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Start Learning with Network Masters <br className="hidden md:block" /> Hub in Just 3 Simple Steps</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                        A structured, flexible approach designed to take you from enrollment to industry-ready with clarity and confidence.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {/* Step 1 */}
                        <div className="flex flex-col items-start text-left space-y-4 md:pr-4 pt-8 md:pt-0 first:pt-0">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                                <UserCircle className="h-6 w-6 text-[#0B3B75]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Free Account</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Sign up with your email in just a few seconds. It&apos;s quick, simple, and completely free to get started.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-start text-left space-y-4 md:px-4 pt-8 md:pt-0">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                                <BookOpen className="h-6 w-6 text-[#0B3B75]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Choose the Right Course</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Explore our wide range of courses and enroll in the one that matches your interests and goals
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-start text-left space-y-4 md:pl-4 pt-8 md:pt-0">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                                <GraduationCap className="h-6 w-6 text-[#0B3B75]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Begin Your Learning Journey</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Dive into easy-to-follow lessons, test your knowledge with interactive quizzes, and earn certificates to showcase your achievements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;

import { UserPlus, Book, Rocket } from 'lucide-react';

const Steps = () => {
    return (
        <section className="py-20 bg-blue-50 border-y border-blue-100">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning in Just 3 Simple Steps</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A structured, flexible approach designed to take you from enrollment to industry-ready with clarity and confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center border-4 border-blue-100">
                            <UserPlus className="h-10 w-10 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">1. Create Your Free Account</h3>
                            <p className="text-slate-600 mt-2">Sign up with your email in just a few seconds. It&apos;s quick, simple, and completely free to get started.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center border-4 border-blue-100">
                            <Book className="h-10 w-10 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">2. Choose the Right Course</h3>
                            <p className="text-slate-600 mt-2">Explore our wide range of courses and enroll in the one that matches your interests and goals.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center border-4 border-blue-100">
                            <Rocket className="h-10 w-10 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">3. Begin Your Learning Journey</h3>
                            <p className="text-slate-600 mt-2">Dive into easy-to-follow lessons, test your knowledge, and earn industry-recognized certifications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;

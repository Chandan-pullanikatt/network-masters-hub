import { Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        name: "Amit Yadav",
        initials: "AY",
        date: "1 month ago",
        rating: 5,
        text: "Excellent course structure! The hands-on labs were a game-changer for me. I finally understood OSPF concepts which I struggled with for months. Highly recommended for anyone starting their networking journey."
    },
    {
        id: 2,
        name: "Sarah Kapoor",
        initials: "SK",
        date: "3 weeks ago",
        rating: 5,
        text: "The mentor support is outstanding. Every time I got stuck in a lab session, I received immediate help. The CCNA 200-301 syllabus coverage is very detailed."
    }
];

export default function StudentReviews() {
    return (
        <section className="bg-white py-16">
            <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Student Reviews & Feedback</h2>
                    <p className="text-slate-600">See what our community of engineers has to say about their learning experience.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Left Column - Rating Summary */}
                    <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-8 h-fit">
                        <div className="text-center mb-6">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">AVERAGE RATING</h3>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-5xl font-bold text-blue-600">4.9</span>
                                <div className="flex flex-col items-start">
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-5 h-5 fill-blue-600 text-blue-600" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-500 font-medium">Out of 5 stars</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { stars: "5 Star", percent: "85%", width: "85%" },
                                { stars: "4 Star", percent: "10%", width: "10%" },
                                { stars: "3 Star", percent: "5%", width: "5%" },
                                { stars: "2 Star", percent: "0%", width: "0%" },
                                { stars: "1 Star", percent: "0%", width: "0%" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm">
                                    <span className="font-medium text-slate-700 w-12">{item.stars}</span>
                                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 rounded-full"
                                            style={{ width: item.width }}
                                        ></div>
                                    </div>
                                    <span className="text-slate-500 w-8 text-right">{item.percent}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Post Review CTA */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Post Your Reviews and comments</h3>

                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50">
                                <Button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm gap-2 h-12 px-6 rounded-full mb-3">
                                    <Image src="/assets/google-logo.png" alt="Google" width={20} height={20} className="w-5 h-5" />
                                    Login with Google to Rate & Review
                                </Button>
                                <p className="text-xs text-slate-400">Only verified students can post reviews</p>
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                                                {review.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{review.name}</h4>
                                                <div className="flex gap-0.5 mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm text-slate-400">{review.date}</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm pl-16">
                                        {review.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-8 text-center">
                            <Button variant="outline" className="rounded-full w-full max-w-2xl h-12 text-blue-600 border-blue-100 hover:bg-blue-50 font-medium">
                                Load More Reviews
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

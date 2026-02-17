import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Course } from '@/types';

interface PopularCourseCardProps {
    course: Course;
}

const PopularCourseCard: React.FC<PopularCourseCardProps> = ({ course }) => {
    const { title, slug, duration, modules, videoHours, image, price } = course.attributes;
    const imageUrl = image?.data?.attributes?.url || '/placeholder-course.jpg';

    // Helper to determine module count
    const moduleCount = Array.isArray(modules) ? modules.length : (typeof modules === 'number' ? modules : 10);

    return (
        <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden h-full transition-all hover:shadow-md">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Optional: Add a badge if needed, e.g. "Best Seller" */}
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 min-h-[3rem]">
                    {title}
                </h3>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-5 h-5 flex items-center justify-center bg-slate-100 rounded text-slate-400">
                            <div className="w-2.5 h-2.5 bg-slate-300 rounded-sm"></div>
                        </div>
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-5 h-5 flex items-center justify-center bg-slate-100 rounded text-slate-400">
                            <div className="w-2.5 h-2.5 bg-slate-300 rounded-sm"></div>
                        </div>
                        <span>{moduleCount} Modules</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-5 h-5 flex items-center justify-center bg-slate-100 rounded text-slate-400">
                            <div className="w-2.5 h-2.5 bg-slate-300 rounded-sm"></div>
                        </div>
                        <span>{videoHours}+ Hours of video content</span>
                    </div>
                </div>

                {/* Button */}
                <Button
                    className="w-full bg-[#0B3B75] hover:bg-[#092e5c] text-white font-medium rounded-md py-6"
                    asChild
                >
                    <Link href={`/courses/${slug}`}>
                        Know More
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default PopularCourseCard;

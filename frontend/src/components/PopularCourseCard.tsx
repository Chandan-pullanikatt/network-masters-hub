import Link from 'next/link';
import { Button } from '@/components/ui/button';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface PopularCourseCardProps {
    course: any;
}

const PopularCourseCard: React.FC<PopularCourseCardProps> = ({ course }) => {
    // Strapi 5 is flat, Strapi 4 uses .attributes
    const data = course.attributes || course;
    const { title, slug, duration, modules, videoHours, image } = data;
    
    // Build image URL from Strapi 5 flat structure
    const rawUrl = image?.url || image?.data?.attributes?.url || image?.data?.url;
    const imageUrl = rawUrl
        ? (rawUrl.startsWith('http') ? rawUrl : `${STRAPI_URL}${rawUrl}`)
        : null;

    // Helper to determine module count
    const moduleCount = typeof modules === 'number' ? modules : (Array.isArray(modules) ? modules.length : 10);

    return (
        <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden h-full transition-all hover:shadow-md">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-medium">No Image</span>
                    </div>
                )}
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
                        <span>{videoHours}+ Hours of content</span>
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

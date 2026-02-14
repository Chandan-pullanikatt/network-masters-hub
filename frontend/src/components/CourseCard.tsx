import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Video } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const { title, slug, duration, modules, videoHours, price, image } = course.attributes;
    const imageUrl = image?.data?.attributes?.url || '/placeholder-course.jpg';

    // Modules count handling (if modules is JSON/RichText)
    const moduleCount = Array.isArray(modules) ? modules.length : 10; // Default/Fallback

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full">
            <div className="aspect-video w-full overflow-hidden relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    ${price}
                </div>
            </div>

            <div className="flex flex-col flex-1 p-5 space-y-4">
                <h3 className="text-xl font-bold tracking-tight line-clamp-2 min-h-[3.5rem]">{title}</h3>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        <span>{videoHours} Hrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{moduleCount} Mods</span>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={`/courses/${slug}`}>View Details</Link>
                    </Button>
                    <Button size="sm">Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

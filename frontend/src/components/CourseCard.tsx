import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Video } from 'lucide-react';
import { Course } from '@/types';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const { title, slug, duration, modules, videoHours, price, image } = course.attributes;
    const imageUrl = image?.data?.attributes?.url || '/placeholder-course.jpg';
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    // Modules count handling (if modules is JSON/RichText)
    const moduleCount = Array.isArray(modules) ? modules.length : 10; // Default/Fallback

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            toast.error("Please login to add items to cart");
            router.push("/login");
            return;
        }
        addToCart(course);
        toast.success("Added to cart");
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
            <div className="h-[170px] w-full overflow-hidden relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                    ${price}
                </div>
            </div>

            <div className="flex flex-col flex-1 p-2.5 space-y-2">
                <div className="flex-1">
                    <h3 className="text-[15px] font-bold tracking-tight text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors min-h-[2.25rem]">
                        {title}
                    </h3>
                </div>

                <div className="flex items-center justify-between text-[10px] font-medium text-slate-500 py-1.5 border-t border-slate-100 mt-1">
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        <span>{videoHours} Hrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{moduleCount} Mods</span>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2 pt-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs w-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 border-slate-200" asChild>
                        <Link href={`/courses/${slug}`}>View Details</Link>
                    </Button>
                    <Button
                        size="sm"
                        className="h-7 text-xs w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

export interface StrapiImage {
    data: {
        id: number;
        attributes: {
            url: string;
            alternativeText: string;
            width: number;
            height: number;
        };
    };
}

export interface Course {
    id: number;
    attributes: {
        title: string;
        slug: string;
        description: string;
        duration: string;
        modules: string[] | object | number; // Rich text, JSON, or simple count
        videoHours: number;
        price: number;
        image: StrapiImage;
        // Extended fields for Course Detail Page
        hero?: {
            badge?: string;
            title: string;
            subtitle: string;
            price: number;
            originalPrice?: number;
            startDate?: string;
            batches?: {
                name: string;
                time: string;
                days: string;
                status: string;
            }[];
        };
        overview?: {
            title: string;
            description: string;
            skills: {
                title: string;
                icon: any; // LucideIcon type if possible, or any
                desc: string;
                points?: string[];
            }[];
        };
        roadmap?: {
            id: string;
            title: string;
            desc: string;
            topics?: string;
        }[];
        roadmapModules?: {
            [key: string]: {
                id: string;
                title: string;
                desc: string;
                topics?: string;
            }[];
        };
        faqs?: {
            question: string;
            answer: string;
        }[];
    };
}

export interface FAQ {
    id: number;
    attributes: {
        question: string;
        answer: string;
    };
}

export interface Testimonial {
    id: number;
    attributes: {
        name: string;
        role: string;
        message: string;
    };
}

export interface EnquiryPayload {
    name: string;
    email: string;
    phone: string;
    course: string; // Course ID or Title
    message: string;
}

export interface OrderPayload {
    customerName: string;
    email: string;
    phone: string;
    courses: number[]; // Array of course IDs
    totalAmount: number;
    paymentStatus: 'pending' | 'success' | 'failed';
    paymentMethod: 'razorpay' | 'manual';
    razorpayPaymentId?: string;
}

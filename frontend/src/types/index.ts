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

export interface CourseFields {
    title: string;
    slug: string;
    description: string;
    duration?: string;
    modules?: string[] | object | number;
    videoHours: number;
    price: number;
    image: StrapiImage;
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
            startDate?: string;
        }[];
    };
    overview?: {
        title: string;
        description: string;
        skills: {
            title: string;
            icon: any;
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
    flexiblePrice?: number;
    isFlexible?: boolean;
    schedule?: {
        name: string;
        time: string;
        days: string;
        mode: string;
    }[];
}

export interface Course extends Partial<CourseFields> {
    id: number;
    attributes?: CourseFields;
}

export interface FAQFields {
    question: string;
    answer: string;
}

export interface FAQ extends Partial<FAQFields> {
    id: number;
    attributes?: FAQFields;
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

"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
    children: ReactNode;
    className?: string;
    viewportAmount?: number;
}

export const MotionSection = ({
    children,
    className,
    viewportAmount = 0.2,
    ...props
}: MotionSectionProps) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: "-50px" }}
            variants={staggerContainer}
            className={className}
            {...props}
        >
            {children}
        </motion.section>
    );
};

interface MotionDivProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    delay?: number;
    variants?: Variants;
    initial?: any;
    whileInView?: any;
    viewport?: any;
    animate?: any;
}

export const MotionDiv = ({
    children,
    className,
    delay = 0,
    variants = fadeInUp,
    ...props
}: MotionDivProps) => {
    return (
        <motion.div
            variants={variants}
            transition={{ delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

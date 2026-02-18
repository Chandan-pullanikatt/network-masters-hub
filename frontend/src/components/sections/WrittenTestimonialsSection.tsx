"use client";

const testimonials = [
    {
        name: "Karan Mehta",
        text: "“I had completed CCNA earlier but everything felt disconnected. Here, concepts were explained in a way that actually linked together. For the first time, networking started making sense instead of feeling memorized.”"
    },
    {
        name: "Sneha Arora",
        text: "“Coming from a non-technical background, I was terrified of networking. But the way topics were broken down from scratch made it incredibly easy to grasp. I never thought I’d enjoy learning about IP/OSPF!”"
    },
    {
        name: "Rohit Verma",
        text: "“Most courses teach commands, but here we learned WHY we type those commands. The deep dive into packet flow and real-world scenarios gave me the confidence to crack my interview.”"
    },
    {
        name: "Anjali Nair",
        text: "“During my internship, I struggled to troubleshoot basic issues. After this training, I can not only configure devices but also isolate faults logically. It’s a complete game-changer.”"
    },
    {
        name: "Harsh Gupta",
        text: "“I was stuck at L1 support for 2 years. This training bridged the gap to L2/L3 level knowledge. The hands-on labs on complex topologies gave me the exposure I was missing in my job.”"
    },
    {
        name: "Mohammed Faizan",
        text: "“Subnetting used to feel like a nightmare. Now I can do it in my head! The tricks and logic taught here are simply brilliant. Every session felt like an eye-opener.”"
    },
    {
        name: "Divya Sharma",
        text: "“The interview-focused discussions were the best part. We didn't just learn protocols; we debated design choices and troubleshooting steps, which is exactly what interviewers ask.”"
    },
    {
        name: "Akash Yadav",
        text: "“The biggest difference is clarity. I used to memorize definitions, but now I can visualize how data moves across a network. If you want to build a solid foundation, this is the place.”"
    },
    {
        name: "Nitin Raj",
        text: "“I had watched many YouTube videos before, but they only scraped the surface. This structured training connected all the dots. I finally feel like a real Network Engineer.”"
    }
];

export default function WrittenTestimonialsSection() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="space-y-12">
                    {testimonials.map((t, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-slate-900 font-serif md:text-2xl">
                                {t.name}
                            </h3>
                            <p className="text-slate-700 text-lg leading-relaxed italic font-serif">
                                {t.text}
                            </p>
                            {/* Divider for all except last */}
                            {index !== testimonials.length - 1 && (
                                <div className="w-full h-px bg-slate-200 mt-8"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

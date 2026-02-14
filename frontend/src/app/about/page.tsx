import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold mb-4">About Network Masters Hub</h1>
                <p className="text-lg text-slate-700 leading-relaxed">
                    Network Masters Hub is a premier IT training institute dedicated to shaping the next generation of networking professionals.
                    Founded by industry veterans with over 15 years of experience in Cisco technologies and automation, we bridge the gap between
                    theoretical knowledge and real-world application.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                    Our mission is to provide affordable, high-quality, and hands-on training in CCNA, CCNP, and Network Automation.
                    We believe in "learning by doing," which is why our curriculum is heavily focused on lab exercises and troubleshooting scenarios.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="p-6 bg-blue-50 rounded-xl text-center">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">5000+</h3>
                        <p className="font-medium">Students Trained</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl text-center">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
                        <p className="font-medium">Placement Success</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl text-center">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                        <p className="font-medium">Corporate Partners</p>
                    </div>
                </div>

                <div className="text-center">
                    <Button size="lg" asChild>
                        <Link href="/courses">Explore Our Courses</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

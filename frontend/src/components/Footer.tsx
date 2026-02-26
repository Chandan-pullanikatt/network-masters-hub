import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url("/topo-pattern.svg")', backgroundSize: 'cover' }}>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo/Brand Area (Placeholder Box in Design) */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block bg-white p-2 rounded-xl mb-6">
                            <Image
                                src="/assets/footer-logo.png"
                                alt="Network Masters Logo"
                                width={240}
                                height={80}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        </Link>
                        {/* Alternatively use text if no logo image */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-gray-200">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/aboutus" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Connect With Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-gray-200">Support</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/refund" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Empty Column for spacing or additional widgets */}
                    <div></div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; Copy {new Date().getFullYear()}. All Rights Reserved, Develop by <span className="text-white font-medium">Net Work Masters</span>
                    </p>

                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/TheNetworkMastersHub/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors group">
                            <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                        </Link>
                        <Link href="https://www.instagram.com/networkmastershub/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors group">
                            <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
                        </Link>
                        <Link href="https://www.youtube.com/@NetworkMastersHub" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors group">
                            <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/112090362/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors group">
                            <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

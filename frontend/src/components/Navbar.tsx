"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import CoursesDropdown from '@/components/CoursesDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart } = useCart();
    const cartItemCount = cart.length;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Regular links excluding 'Courses' which is now special
    const navLinks = [
        { name: 'Home', href: '/' },
        // Courses is handled separately
        { name: 'About Us', href: '/#about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Connect With Us', href: '/#contact' },
    ];

    const navbarClasses = isHome
        ? `fixed top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
            ? "bg-background/95 backdrop-blur border-border text-foreground shadow-sm"
            : "border-transparent bg-transparent text-white"
        }`
        : "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground";

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    {/* Logo placeholder or text */}
                    <div className="h-8 w-12 bg-gray-200/20 rounded backdrop-blur-sm"></div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className={`text-sm font-medium transition-colors hover:text-primary ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''}`}
                    >
                        Home
                    </Link>

                    {/* Dropdown for Courses */}
                    <CoursesDropdown isScrolled={isScrolled} isHome={isHome} />

                    <Link
                        href="/#about"
                        className={`text-sm font-medium transition-colors hover:text-primary ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''}`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/blog"
                        className={`text-sm font-medium transition-colors hover:text-primary ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''}`}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/#contact"
                        className={`text-sm font-medium transition-colors hover:text-primary ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''}`}
                    >
                        Connect With Us
                    </Link>

                    <div className="flex items-center gap-4 ml-4">
                        <Button variant="ghost" size="icon" className={`relative ${isHome && !isScrolled ? 'text-white hover:text-white/80 hover:bg-white/10' : ''}`} asChild>
                            <Link href="/cart">
                                <ShoppingCart className="h-5 w-5" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </Button>
                        <Button variant="ghost" className={`text-sm font-medium ${isHome && !isScrolled ? 'text-white hover:text-white/80 hover:bg-white/10' : ''}`} asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-[#003366] hover:bg-[#002244] text-white" asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={`md:hidden ${isHome && !isScrolled ? 'text-white' : 'text-foreground'}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-background text-foreground h-[calc(100vh-64px)] overflow-y-auto">
                    <Link href="/" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Mobile Courses Section */}
                    <div className="space-y-2">
                        <div className="font-semibold text-sm text-primary">Courses</div>
                        <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-1">
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">In Person Training</div>
                                <Link href="/#courses" className="block text-sm text-slate-700 hover:text-[#003366] py-1" onClick={() => setIsOpen(false)}>
                                    View All Courses
                                </Link>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Flexible Learning</div>
                                <Link href="/#courses" className="block text-sm text-slate-700 hover:text-[#003366] py-1" onClick={() => setIsOpen(false)}>
                                    View All Courses
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/#about" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/blog" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/#contact" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        Connect With Us
                    </Link>
                    <div className="pt-4 border-t space-y-3">
                        <Button className="w-full justify-start" variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="w-full bg-[#003366]" asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

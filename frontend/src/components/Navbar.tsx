"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4">
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
                <div className="md:hidden border-t p-4 space-y-4 bg-background text-foreground">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full">Get Started</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

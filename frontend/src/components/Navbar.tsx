"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // Ensure lucide-react is installed
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'About Us', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-primary">Network Masters Hub</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm">Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-background">
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

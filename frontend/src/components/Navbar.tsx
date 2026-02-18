"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, ChevronDown, LogOut } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import CoursesDropdown from '@/components/CoursesDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart } = useCart();
    const { user, logout } = useAuth();
    const cartItemCount = cart.length;
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Close profile dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

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
                    {/* Logo */}
                    <Image
                        src="/assets/logo.png"
                        alt="Network Masters Logo"
                        width={180}
                        height={56}
                        className="h-12 md:h-14 w-auto object-contain"
                        priority
                    />
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
                        href="/aboutus"
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

                        {user ? (
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isHome && !isScrolled
                                        ? 'text-white hover:bg-white/10'
                                        : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    <span className="text-sm font-semibold max-w-[150px] truncate">{user.username}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 py-1 animate-in fade-in zoom-in-95 duration-200 origin-top-right overflow-hidden">
                                        <button
                                            onClick={logout}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left transition-colors"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Button variant="ghost" className={`text-sm font-medium ${isHome && !isScrolled ? 'text-white hover:text-white/80 hover:bg-white/10' : ''}`} asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="bg-[#003366] hover:bg-[#002244] text-white" asChild>
                                    <Link href="/register">Register</Link>
                                </Button>
                            </>
                        )}
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
                    {user && (
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg mb-4 border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm font-bold">
                                {getInitials(user.username || user.email)}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-slate-900 truncate">{user.username}</p>
                                <p className="text-xs text-slate-500 truncate">{user.email}</p>
                            </div>
                        </div>
                    )}

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

                    <Link href="/aboutus" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/blog" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/#contact" className="block text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                        Connect With Us
                    </Link>

                    <div className="pt-4 border-t space-y-3">
                        {user ? (
                            <>

                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-md justify-center"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Button className="w-full justify-start" variant="ghost" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="w-full bg-[#003366]" asChild>
                                    <Link href="/register">Get Started</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

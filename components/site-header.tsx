'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For getting the current path
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

export function SiteHeader() {
  const pathname = usePathname();

  // Links array for dynamic navigation
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    // { href: "/academy", label: "Academy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex md:min-h-[82px] items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 relative">
            <Image src="/icons/logo-color.svg" alt="Logo" width={60} height={60} className="" />
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-foreground via-foreground to-foreground bg-clip-text text-[24px] box-content font-extrabold text-transparent text-center select-none">
              Int+
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-[#666666] via-[#666666] to-[#666666] bg-clip-text text-[24px] font-extrabold text-transparent text-center select-auto">
              Int+
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-auto items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-normal transition-colors hover:text-primary whitespace-nowrap ${
                pathname === link.href
                  ? 'bg-[#1A1A1A] border border-[#1F1F1F] rounded-full text-foreground' // Active styles
                  : 'text-foreground'
              }`}
            >
              <span className="absolute mx-auto py-2 px-4 flex border w-fit bg-gradient-to-r blur-md from-foreground via-foreground to-foreground bg-clip-text box-content text-white text-transparent text-center select-none">
                {link.label}
              </span>
              <h1 className="relative top-0 w-fit h-auto py-2 px-4 justify-center flex bg-gradient-to-r items-center from-[#666666] via-[#666666] to-[#666666] bg-clip-text text-white text-transparent text-center select-auto">
                {link.label}
              </h1>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <Button variant="ghost" size="icon" className="size-8">
              <Menu className="size-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    // key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === link.href
                        ? 'bg-[#1A1A1A] px-4 py-2 border border-[#1F1F1F] rounded-full text-foreground' // Active styles
                        : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

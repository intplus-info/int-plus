import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background text-white pt-16 pb-8">
      <div className="container mx-auto">
        {/* Top section with logo and social */}
        <div className="flex justify-between items-center mb-12">
          <div className="w-12 h-12">
            {/* Replace with your actual logo */}
            <Link href="/" className="flex items-center space-x-2 relative">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm hidden md:block">Follow Us On Social Media</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Image
                  src='/icons/linkedin.svg'
                  alt='Linkedin'
                  width={48}
                  height={48}
                  className=''
                />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Image
                  src='/icons/instagram.svg'
                  alt='Linkedin'
                  width={48}
                  height={48}
                  className=''
                />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Image
                  src='/icons/twitter.svg'
                  alt='Linkedin'
                  width={48}
                  height={48}
                  className=''
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t-2 w-full mb-8' />

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Home */}
          <div>
            <h3 className="font-semibold mb-4">Home</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">MVP Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruitment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">QA &Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Achievements</a></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold mb-4">Careers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">Job Openings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefits & Perks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employee Refral</a></li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className="font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">Our Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="hidden md:block border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className='lg:w-1/2'>©2023 Int+ · All Rights Reserved.</div>
            <div className="flex gap-4 lg:w-1/2  justify-between">
              <div>Version 3.0</div>
              <span className='flex gap-4'>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="md:hidden border-t pt-8 mt-8">
          <div className="flex flex-col justify-between items-center text-sm text-muted-foreground">
            <div className='lg:w-1/2'>©2023 Int+ · All Rights Reserved.</div>
            <span className='grid grid-cols-2 mt-4 text-center gap-4'>
              <div>Version 3.0</div>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}


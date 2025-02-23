import Image from 'next/image';
import Link from 'next/link';

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

interface NavigationLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: NavigationLink[];
}

interface FooterProps {
  logo: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
  sections: FooterSection[];
  copyright: string;
  version: string;
  policies: NavigationLink[];
}

export default function Footer({
  logo,
  socialLinks,
  sections,
  copyright,
  version,
  policies,
}: FooterProps) {
  return (
    <footer className="bg-background text-white pt-16 pb-8">
      <div className="container mx-auto">
        {/* Top section with logo and social */}
        <div className="flex justify-between items-center mb-12">
          <div className="w-12 h-12">
            <Link href="/" className="flex items-center space-x-2 relative">
              <Image src={logo.src} alt={logo.alt} width={40} height={40} className="" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm hidden md:block">Follow Us On Social Media</span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-gray-300 hover:translate-y-2 hover:shadow-md hover:shadow-accent-foreground/20 rounded-full transition-all ease-in-out duration-300"
                >
                  <Image src={social.icon} alt={social.alt} width={48} height={48} className="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full mb-8" />

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="hidden md:block border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="lg:w-1/2">{copyright}</div>
            <div className="flex gap-4 lg:w-1/2 justify-between">
              <div>{version}</div>
              <span className="flex gap-4">
                {policies.map((policy, index) => (
                  <a key={index} href={policy.href} className="hover:text-white transition-colors">
                    {policy.title}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section for mobile */}
        <div className="md:hidden border-t pt-8 mt-8">
          <div className="flex flex-col justify-between items-center text-sm text-muted-foreground">
            <div className="lg:w-1/2">{copyright}</div>
            <span className="grid grid-cols-2 mt-4 text-center gap-4">
              <div>{version}</div>
              {policies.map((policy, index) => (
                <a key={index} href={policy.href} className="hover:text-white transition-colors">
                  {policy.title}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

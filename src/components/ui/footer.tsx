import React from "react";
import { Building2, Twitter, Github, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const platformLinks = [
    { name: "For Startups", href: "#" },
    { name: "For Investors", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Success Stories", href: "#" },
  ];

  const resourceLinks = [
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "API Docs", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      target: "_self",
    },
    {
      name: "GitHub",
      href: "https://github.com/SudiptaPaul-31/PitchNest",
      icon: Github,
      target: "_blank",
    },
    {
      name: "Telegram",
      href: "https://t.me/pitchnest_od",
      icon: Send,
      target: "_blank",
    },
  ];

  return (
    <footer
      className={`bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-200 py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center  space-x-2">
              <Image
                src="/pitchnest-logo.jpg"
                alt="pitchnest-logo"
                width={100}
                height={10}
                className="w-40 h-20"
              />
            </Link>
            {/* <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PitchNest</span>
            </div> */}
            <p className="text-slate-400 leading-relaxed">
              Connecting innovative startups with strategic investors to build
              the future of business.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 relative flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 PitchNest. All rights reserved.
          </p>

          <div className="md:hidden mb-4">
            <span className="text-slate-400 text-center block">
              Made with ❤️ for entrepreneurs worldwide
            </span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.target}
                  rel={
                    social.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <span className="text-slate-400 text-center">
              Made with ❤️ for entrepreneurs worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

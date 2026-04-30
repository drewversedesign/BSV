"use client";

import Link from "next/link";
import { Gauge, Mail, Info, FileText } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Browse Auctions", href: "#auctions" },
    { label: "Sell a Vehicle", href: "#" },
    { label: "How It Works", href: "#features" },
    { label: "Pricing", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socials = [
  { icon: Mail, label: "Mail", href: "#" },
  { icon: Info, label: "Info", href: "#" },
  { icon: FileText, label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground font-bold text-xl w-fit"
            >
              <Gauge className="w-6 h-6 text-primary" aria-hidden="true" />
              <span>
                Rev<span className="text-primary">Auction</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The world&apos;s most trusted marketplace for rare and exotic
              vehicles. Bid with confidence, win with purpose.
            </p>
            {/* Newsletter */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest">
                Get auction alerts
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter subscription"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-md bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} RevAuction, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

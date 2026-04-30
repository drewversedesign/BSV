import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "12,400+", label: "Vehicles Sold" },
  { value: "$2.1B", label: "Total Bids Placed" },
  { value: "94K+", label: "Registered Bidders" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrcg_iddAY37GD5TJ57EVms9ezoYD2cXS-LvCHKBq79szwGKiF2f6AM-VW7Sh8gaExCSWZH4jpZce2qgusUfFi4rzif5Ysyo3-8KcOxxBVYwM6UpEQybYfi-l5-kU--FqqYaTFoZm7JT9gm84oHMftyXaTSrnL0AQ8ZE3HKSk5NDo9V0_XJHSo7A7MFWXPGqysh-cZ_5A3UNhymW8lxM-clmCyRt00WxqWcLDXwPugRXPQRr4vNGq-VIxEaD2-FeLdN_3SgZv3LWQ')",
        }}
        aria-hidden="true"
      />
      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0 bg-background/70"
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col gap-8">
        {/* Badge */}
        <div className="flex items-center gap-2 w-fit">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Live Auctions Now Open
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight text-balance max-w-4xl">
          Drive the{" "}
          <span className="text-primary">Extraordinary.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          The premier destination for rare, exotic, and collector vehicles.
          Bid with confidence. Win without compromise.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#auctions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Browse Auctions
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            How It Works
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-4 pt-8 border-t border-border/50">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
        <ChevronDown className="w-5 h-5" aria-hidden="true" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
}

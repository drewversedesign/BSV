import {
  ShieldCheck,
  Zap,
  Search,
  BarChart3,
  Globe,
  HeadphonesIcon,
} from "lucide-react";

const bentoItems = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every vehicle undergoes a rigorous 150-point inspection by our certified mechanics before listing. Zero surprises.",
    size: "large", // spans 2 cols
    accent: "border-primary/30 bg-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description:
      "Lightning-fast bid engine with millisecond updates. Never miss a winning moment.",
    size: "small",
    accent: "border-border bg-card",
    iconColor: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Access live price trends, historical auction data, and valuation tools to bid smarter.",
    size: "small",
    accent: "border-border bg-card",
    iconColor: "text-accent",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Filter by make, model, year, mileage, condition, price range, and more. Find exactly what you're looking for.",
    size: "small",
    accent: "border-border bg-card",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Ship to 60+ countries. Our logistics network handles customs, insurance, and door-to-door delivery worldwide.",
    size: "large",
    accent: "border-accent/20 bg-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Dedicated specialists available 24/7 to assist with bids, inspections, and paperwork.",
    size: "small",
    accent: "border-border bg-card",
    iconColor: "text-primary",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance max-w-xl">
            Built for Serious Collectors.
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Every tool you need to find, evaluate, and win the vehicle of your
            dreams — all in one place.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* Row 1: large + small + small */}
          <BentoCard item={bentoItems[0]} className="md:col-span-1 md:row-span-2" />
          <BentoCard item={bentoItems[1]} className="md:col-span-1" />
          <BentoCard item={bentoItems[2]} className="md:col-span-1" />

          {/* Row 2 continues with row-span from row 1, plus two more */}
          <BentoCard item={bentoItems[3]} className="md:col-span-1" />
          <BentoCard item={bentoItems[4]} className="md:col-span-1" />

          {/* Row 3 */}
          <BentoCard item={bentoItems[5]} className="md:col-span-1" />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  item,
  className = "",
}: {
  item: (typeof bentoItems)[number];
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={`relative rounded-xl border p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 ${item.accent} ${className}`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center bg-background border border-border ${item.iconColor}`}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

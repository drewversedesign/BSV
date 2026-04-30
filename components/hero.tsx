import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrcg_iddAY37GD5TJ57EVms9ezoYD2cXS-LvCHKBq79szwGKiF2f6AM-VW7Sh8gaExCSWZH4jpZce2qgusUfFi4rzif5Ysyo3-8KcOxxBVYwM6UpEQybYfi-l5-kU--FqqYaTFoZm7JT9gm84oHMftyXaTSrnL0AQ8ZE3HKSk5NDo9V0_XJHSo7A7MFWXPGqysh-cZ_5A3UNhymW8lxM-clmCyRt00WxqWcLDXwPugRXPQRr4vNGq-VIxEaD2-FeLdN_3SgZv3LWQ"
          alt="Luxury Sedan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Premium Vehicles.<br />
            <span className="text-blue-500">Unbeatable Value.</span>
          </h1>
          <p className="text-white/80 text-xl mb-10 max-w-lg leading-relaxed">
            Access exclusive bank-seized inventory featuring high-end luxury vehicles, SUVs, and performance cars at a fraction of market value. Updated daily.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#auctions"
              className="h-[52px] px-8 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Browse Inventory
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="h-[52px] px-8 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm transition-all flex items-center"
            >
              How it Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

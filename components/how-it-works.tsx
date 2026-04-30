import { Search, Gavel, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Inspect",
    description: "Explore our daily updated inventory of bank-seized assets. Review detailed inspection reports and vehicle histories."
  },
  {
    icon: Gavel,
    title: "Place Your Bid",
    description: "Register for free and place bids on your preferred vehicles. Our transparent auction model ensures fair market value."
  },
  {
    icon: Truck,
    title: "Secure Delivery",
    description: "Once won, our logistics team handles the paperwork and coordinates secure delivery to your doorstep."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest mb-4 block text-xs">The Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How BSV Premium Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{index + 1}. {step.title}</h3>
              <p className="text-slate-500 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

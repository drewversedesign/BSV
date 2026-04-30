import { ShieldCheck, Visibility, Payments } from "@/components/icons";

export default function Features() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 py-[56px]">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest mb-4 block">The BSV Advantage</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built on Trust and Transparency</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Trust Card */}
        <div className="bg-white p-8 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors text-blue-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-slate-900">Verified Trust</h3>
          <p className="text-slate-500 leading-relaxed">Every vehicle in our inventory is strictly vetted through legal bank seizure protocols, ensuring clear titles and transparent histories.</p>
        </div>

        {/* Transparency Card */}
        <div className="bg-white p-8 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors text-orange-600">
            <Visibility className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-slate-900">Total Transparency</h3>
          <p className="text-slate-500 leading-relaxed">Detailed inspection reports, high-resolution imagery, and complete maintenance logs are provided for every listed asset.</p>
        </div>

        {/* Value Card */}
        <div className="bg-white p-8 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors text-slate-600">
            <Payments className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-slate-900">Exceptional Value</h3>
          <p className="text-slate-500 leading-relaxed">Bypass dealership markups. Our auction model allows you to acquire premium luxury assets at true market liquidation prices.</p>
        </div>
      </div>
    </section>
  );
}

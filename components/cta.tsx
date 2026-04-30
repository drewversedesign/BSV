import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 py-20">
      <div className="bg-black rounded-[24px] p-12 md:p-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0071E3_0%,_transparent_70%)]"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold leading-tight text-white mb-6">Ready to find your next vehicle?</h2>
          <p className="text-white/60 text-lg mb-10">Join thousands of verified buyers who get notified the moment premium seizures hit our marketplace.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-[52px] px-10 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Create Free Account
            </button>
            <Link href="#" className="w-full sm:w-auto h-[52px] px-10 bg-transparent text-white border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

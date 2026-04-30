import Link from "next/link";
import { Mail, Info, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <span className="text-lg font-bold text-slate-900 mb-4 block">BSV Premium</span>
          <p className="text-sm text-slate-500 mb-6">Luxury asset liquidation specialized for banking institutions and high-net-worth buyers.</p>
          <div className="flex gap-4 text-slate-400">
            <Info className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <FileText className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">Auction Rules</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">FAQ</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">Legal Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Company</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">Terms of Service</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-900 underline">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Get daily seizure alerts direct to your inbox.</p>
          <div className="flex gap-2">
            <input
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-600/20 outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 mt-12 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 text-center">© 2024 Bank Seized Vehicles (BSV). All vehicles are sold as-is. Bank seizure listings are updated daily and subject to prior sale.</p>
      </div>
    </footer>
  );
}

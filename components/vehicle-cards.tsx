"use client";

import { useState } from "react";
import { Gavel, ChevronRight } from "lucide-react";

export type Vehicle = {
  id: number;
  year: number;
  make: string;
  model: string;
  specs: string | null;
  mileage: number | null;
  current_bid: number | null;
  image_url: string | null;
  status: string | null;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function VehicleCards({ initialVehicles }: { initialVehicles: Vehicle[] }) {
  return (
    <section className="bg-[#F5F5F7] py-[56px]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest mb-2 block text-xs">Live Auctions</span>
            <h2 className="text-3xl font-bold text-slate-900">Latest Seizures</h2>
          </div>
          <a className="text-blue-600 font-semibold flex items-center gap-1 hover:underline" href="#">
            View All
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          src={vehicle.image_url || ""}
          alt={`${vehicle.year} ${vehicle.make}`}
        />
        {vehicle.status && (
          <div className={`absolute top-4 left-4 ${vehicle.status === 'New Listing' ? 'bg-red-600' : 'bg-blue-600'} text-white text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter`}>
            {vehicle.status}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-slate-900">{vehicle.year} {vehicle.make} {vehicle.model}</h4>
        </div>
        <p className="text-slate-500 text-xs mb-4">{vehicle.specs} • {vehicle.mileage?.toLocaleString()} mi</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <p className="text-slate-400 text-[11px] uppercase font-bold">Current Bid</p>
            <p className="text-blue-600 font-bold text-lg">{formatCurrency(vehicle.current_bid || 0)}</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-600">
            <Gavel className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

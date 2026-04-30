"use client";

import { useState, useEffect } from "react";
import { Clock, Fuel, Gauge, ArrowUpRight } from "lucide-react";

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
  const [filter, setFilter] = useState("All");
  const filters = ["All", "New Listing", "Ending Soon", "Featured", "Rare"];

  const filtered =
    filter === "All"
      ? initialVehicles
      : initialVehicles.filter((v) => v.status === filter);

  return (
    <section id="auctions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Live Auctions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
              Vehicles Up for Bid
            </h2>
          </div>

          {/* Filter pills */}
          <div
            role="tablist"
            aria-label="Filter vehicles"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 flex justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors">
            View All Auctions
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group rounded-xl overflow-hidden border border-border bg-card flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:border-primary/30 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={vehicle.image_url || "/placeholder.svg"}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          loading="lazy"
        />
        {/* Tag */}
        {vehicle.status && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
              vehicle.status === "New Listing" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
            }`}
          >
            {vehicle.status}
          </span>
        )}
        {/* Timer placeholder */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground text-xs font-semibold">
          <Clock className="w-3 h-3 text-primary" aria-hidden="true" />
          <span>2d 14m</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Title */}
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            {vehicle.year} · {vehicle.make}
          </p>
          <h3 className="text-base font-bold text-foreground">{vehicle.model}</h3>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5" aria-hidden="true" />
            {vehicle.mileage?.toLocaleString()} mi
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="w-3.5 h-3.5" aria-hidden="true" />
            {vehicle.specs}
          </span>
          <span className="font-semibold text-green-400">
            Excellent
          </span>
        </div>

        {/* Pricing */}
        <div className="mt-auto pt-4 border-t border-border flex items-end justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-muted-foreground">Current Bid</p>
            <p className="text-xl font-black text-foreground">
              {formatCurrency(vehicle.current_bid || 0)}
            </p>
          </div>
        </div>

        {/* Bid Button */}
        <button className="w-full py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">
          Place Bid
        </button>
      </div>
    </article>
  );
}

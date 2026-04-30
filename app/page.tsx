import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import VehicleCards, { Vehicle } from "@/components/vehicle-cards";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { getSql } from "@/lib/db";

const FALLBACK_VEHICLES: Vehicle[] = [
  {
    id: 1,
    year: 2023,
    make: "Range Rover",
    model: "Sport",
    specs: "V8 Supercharged",
    mileage: 12400,
    current_bid: 78200,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP_j1NH9a-_X2sJFuLWqamcl5zGSMmTq57UXokc18JYCJEWpseGiUC0RH--egrDDg8reaCBx4DgmlJj_B_Z-9n_rJT91CMnDWTLAIMuxy36AhiAu2XgI0ycVRK0AI3hYOE9BMY9IEIPVc2VCuQd3b1sLkf6d1PuLJeMozrhb2AV4vsVC-bQ3TRX8-F9VH_xmI5GWymo1ZzfAu6MDRJNqxFcljOZ6aKyKJQWQ8GMCGXPD5eM-qAlPy_J_pdxADiEWdvseLesKnFKBo",
    status: "New Listing",
  },
  {
    id: 2,
    year: 2022,
    make: "Porsche",
    model: "911 Carrera",
    specs: "PDK",
    mileage: 8150,
    current_bid: 112500,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD98XhP7TWy2Ze-LyLrMj0aCFVjHUhU6SatxDbvqFsWXIKIXsuKvJf2IF6E1tP_fg3dhHEC7A6Xxov_h2vgJa5-COs11qD5aTskmpRc8YdIAkBGdLnqlwl85r6y4jmut_QSAujaKFvaT49glIvsgx40bS6Xg-r2GkYwU27HNz5OYt9Fl45wJaStc2-tpyLQgMp0gajlVAHAAN6DQGhhaQ1xXF-Lm3p-SMZohevGlG0cgAUhedsuhDWTSDrHKmPOAsXkpIIHoKsHrfc",
    status: "Ending Soon",
  },
];

export default async function HomePage() {
  let vehicles: Vehicle[] = [];
  const sql = getSql();

  if (sql) {
    try {
      const data = await sql`SELECT * FROM vehicles ORDER BY id ASC`;
      vehicles = data as unknown as Vehicle[];
    } catch (error) {
      console.error("Failed to fetch vehicles from database, using fallback data:", error);
      vehicles = FALLBACK_VEHICLES;
    }
  } else {
    console.warn("DATABASE_URL not defined, using fallback data.");
    vehicles = FALLBACK_VEHICLES;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VehicleCards initialVehicles={vehicles} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

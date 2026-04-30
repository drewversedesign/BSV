import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import VehicleCards, { Vehicle } from "@/components/vehicle-cards";
import HowItWorks from "@/components/how-it-works";
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
  {
    id: 3,
    year: 2023,
    make: "Mercedes-Benz",
    model: "GLS 580",
    specs: "4MATIC",
    mileage: 15300,
    current_bid: 92000,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVFQV5WD3fOE41bfgnaw53Hkjdsv3FCd-QUp_kpYnfV3VnvCpfVpticDpJKffyR0WXzbva3hVEHfXN3nBEqK3_eX-8t6hcWTDxbiJJaY1RU05sg5LxH9VSevPrlYSFQxjqMUYBMm08mxCAQiAOkRlIhYH29tLI-30Cu_35g-b1r4T4jBEpdG6VejPVfAslKBQNK9pNeQi5N8IW57UsMGNOwrJ8AwqpDdkDDlk_iyRhmXva6J4qtNV5CQ6sIhY0t3n6XNisSk85O8",
    status: "Featured",
  },
  {
    id: 4,
    year: 2022,
    make: "BMW",
    model: "M5 Competition",
    specs: "xDrive",
    mileage: 10200,
    current_bid: 84700,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFWTsMpQQI5kNG_RIr2slISrIwNNnM_3CqI5zz9MEy0RmFkKQ5mNjDJTBYHPeyAPs1elgvSaxS0XMmVLl1yMxoucfMWJzeAZjBIlqCTKMjLPaKjzphgvudM-vRf6zQsQssI53-EI7aUOdtUvHPEU1yZzXDkFqanUT_cubaVMMvzVuQbnXP7T7IZpZadP2K6Bl4YzbrwTYXlcPzylehtx0Ev9QpR429dAA1JIRQGXcftXlLuFWG_yKJCvXEepPHOM--hJS9vcOrwYw",
    status: "Rare",
  },
];

export default async function HomePage() {
  let vehicles: Vehicle[] = [];
  const sql = getSql();

  if (sql) {
    try {
      const data = await sql`SELECT * FROM vehicles ORDER BY id ASC`;
      vehicles = data as unknown as Vehicle[];
      if (vehicles.length === 0) vehicles = FALLBACK_VEHICLES;
    } catch (error) {
      console.error("Failed to fetch vehicles from database, using fallback data:", error);
      vehicles = FALLBACK_VEHICLES;
    }
  } else {
    vehicles = FALLBACK_VEHICLES;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VehicleCards initialVehicles={vehicles} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

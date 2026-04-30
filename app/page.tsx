import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import VehicleCards, { Vehicle } from "@/components/vehicle-cards";
import Footer from "@/components/footer";
import { sql } from "@/lib/db";

export default async function HomePage() {
  let vehicles: Vehicle[] = [];
  try {
    const data = await sql`SELECT * FROM vehicles ORDER BY id ASC`;
    vehicles = data as unknown as Vehicle[];
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VehicleCards initialVehicles={vehicles} />
      </main>
      <Footer />
    </>
  );
}

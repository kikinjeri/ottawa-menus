"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ControlCenterRestaurants() {
  const supabase = createClient();
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const { data } = await supabase.from("restaurants").select("*");
      setRestaurants(data || []);
    }
    fetchRestaurants();
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#0A1A2F]">
      {/* NAVBAR */}
      <nav className="w-full bg-[#0A1A2F] text-[#F7F3EB] py-4 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Ottawa‑Menus
          </Link>

          <div className="flex gap-8 text-lg">
            <Link href="/" className="hover:text-[#6FA8DC] transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#6FA8DC] transition">
              About
            </Link>
            <Link
              href="/control-center/restaurants"
              className="hover:text-[#6FA8DC] transition"
            >
              Control Center
            </Link>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* PREMIUM HEADER */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-[#0A1A2F]">
          Restaurant Control Center
        </h1>

        <p className="text-xl text-[#2F4A6E] mb-12 leading-relaxed max-w-3xl">
          Manage all restaurants in your Ottawa‑Menus system.
        </p>

        {/* TABLE */}
        <div className="overflow-hidden rounded-lg shadow-lg border border-[#E5DED3] bg-white">
          <table className="w-full border-collapse">
            <thead className="bg-[#0A1A2F] text-[#F7F3EB]">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Name</th>
                <th className="py-4 px-6 text-left font-semibold">
                  Neighbourhood
                </th>
                <th className="py-4 px-6 text-left font-semibold">Phone</th>
                <th className="py-4 px-6 text-left font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {restaurants.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-[#E5DED3] hover:bg-[#F2ECE3] transition"
                >
                  <td className="py-4 px-6 font-medium">{r.name}</td>
                  <td className="py-4 px-6">{r.neighbourhood || "—"}</td>
                  <td className="py-4 px-6">{r.phone || "—"}</td>

                  <td className="py-4 px-6 flex gap-6">
                    <Link
                      href={`/control-center/generate-card?id=${r.id}`}
                      className="text-[#2F4A6E] font-semibold hover:text-[#6FA8DC] transition"
                    >
                      Menu Card
                    </Link>

                    <Link
                      href={`/control-center/generate-sample-card?id=${r.id}`}
                      className="text-[#2F4A6E] font-semibold hover:text-[#6FA8DC] transition"
                    >
                      Sample Menu
                    </Link>

                    <Link
                      href={`/control-center/edit?id=${r.id}`}
                      className="text-[#2F4A6E] font-semibold hover:text-[#6FA8DC] transition"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* WATERMARK */}
        <div className="text-right mt-6 text-sm text-[#0A1A2F] opacity-40">
          M. George
        </div>
      </div>
    </main>
  );
}

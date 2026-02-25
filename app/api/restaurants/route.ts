import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("name");

  if (error) {
    return NextResponse.json(
      { error: "Failed to load restaurants" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

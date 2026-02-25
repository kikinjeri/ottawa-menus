import { createClient } from "@/utils/supabase/server";

export async function getRestaurantById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching restaurant:", error);
    return null;
  }

  return data;
}

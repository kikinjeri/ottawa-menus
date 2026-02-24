import { createClient } from "@supabase/supabase-js";
import { MenuCard } from "@/lib/generateCard";

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function GenerateCardPage(props: Props) {
  const { id } = await props.searchParams;

  if (!id) {
    return (
      <html>
        <body>
          <p>No restaurant id provided.</p>
        </body>
      </html>
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .single();

  const { data: items } = await supabase
    .from("menu_items")
    .select("*")
    .eq("restaurant_id", id);

  if (!restaurant) {    
    return (
      <html>
        <body>
          <p>Restaurant not found.</p>
        </body>
      </html>
    );
  }

  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>
        <MenuCard restaurant={restaurant} items={items || []} />
      </body>
    </html>
  );
}

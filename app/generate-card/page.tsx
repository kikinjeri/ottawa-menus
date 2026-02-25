import { getRestaurantById } from "@/lib/db/restaurants";
import { getMenuItemsForRestaurant } from "@/lib/db/menuItems";
import { MenuCard } from "@/lib/generateCard";

export default async function GenerateCardPage(props: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await props.searchParams;

  if (!id) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Missing restaurant ID</h1>
      </div>
    );
  }

  const restaurant = await getRestaurantById(id);
  const items = await getMenuItemsForRestaurant(id);

  if (!restaurant) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Restaurant not found</h1>
      </div>
    );
  }

  return <MenuCard restaurant={restaurant} items={items} />;
}

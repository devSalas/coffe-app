import UserCategory from "@/components/UserCategory";
import { getCategories } from "@/lib/data";

export default async function CategoriesList() {
  const categories = await getCategories();

  return <UserCategory categories={categories} />;
}

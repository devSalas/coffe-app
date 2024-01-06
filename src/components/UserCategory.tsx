import { useState } from "react";

function UserCategory({ categories, handleClickCategory }: any) {
  const [activeCategory, setActiveCategory] = useState<string | null>("all");
  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    handleClickCategory(categoryName); // Puedes pasar la categoría como parámetro si es necesario
  };
  return categories.map((category: any, index: number) => (

    <div
      onClick={(e)=>handleCategoryClick(category.name)}
      data-name={category.name}
      key={index}
      className={`bg-${activeCategory === category.name ? 'second' : 'third'} text-fourth py-1 px-6 rounded-2xl cursor-pointer `}
    >
      {category.name}
    </div>
  ));
}

export default UserCategory;

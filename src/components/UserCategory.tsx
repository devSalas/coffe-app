function UserCategory({ categories, handleClickCategory }: any) {
  return categories.map((category: any, index: number) => (
    <div
      onClick={handleClickCategory}
      data-name={category.name}
      key={index}
      className="bg-third text-second py-1 px-3 rounded-md cursor-pointer"
    >
      {category.name}
    </div>
  ));
}

export default UserCategory;

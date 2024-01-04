function UserCategory({ categories, handleClickCategory}) {
    return categories.map(
        (category, index) => <div onClick={handleClickCategory} data-name={category.name} key={index} className="bg-third text-second py-1 px-3 rounded-md">{category.name}</div>
    )
}

export default UserCategory;
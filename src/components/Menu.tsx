'use client'

import { useState } from "react";
import CardContainer from "./CardContainer";
import UserCategory from "./UserCategory";
import useSearch from "@/hooks/useSearch";

function Menu({ menus, categories }) {

    const { searchTerm, data, handleSearchChange } = useSearch(menus)
    const [filters, setFilter] = useState({
        category: 'all'
    })
    const handleClick = (e) => {
        const categorySeleted = e.target.dataset.name
        setFilter(prev => ({ ...prev, category: categorySeleted }))
    }

    const filterMenu = (menus) => {
        console.log(filters.category)
        return menus.filter(menu => {
            if (filters.category == 'all') return menu
            return menu.category.name == filters.category
        })
    }
    const filteredMenus = filterMenu(data)
    console.log(categories)
    //crear un categoria que solo estar en el frontend
    const modifyCategories = [{name:'all'},...categories]
    return (
        <>
            <div className="mb-4  ">
                <input onChange={handleSearchChange} value={searchTerm} type="text" placeholder="buscador...." className="bg-second w-full rounded-md p-2" />
            </div>
            <div className="flex gap-4">
                <UserCategory categories={modifyCategories} handleClickCategory={handleClick} />
            </div>
            <CardContainer menus={filteredMenus} />

        </>
    );
}


export default Menu;
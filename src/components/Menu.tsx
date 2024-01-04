'use client'

import { useState } from "react";
import CardContainer from "./CardContainer";
import UserCategory from "./UserCategory";

function Menu({ menus, categories }) {
    const [filters, setFilter] = useState({
        category: 'all'
    })
    const handleClick = (e) => {
        const categorySeleted = e.target.dataset.name
        console.log(categorySeleted)
        setFilter(prev => ({ ...prev, category: categorySeleted }))
    }

    const filterMenu = (menus) => {
        console.log(menus)
        console.log(filters.category)
        return menus.filter(menu => {
            if(filters.category == 'all') return menu
            return menu.category.name == filters.category
        })
    }
    const filteredMenus = filterMenu(menus)
    
    console.log(filteredMenus)
    return (
        <>
            <div className="flex gap-4">
                <UserCategory categories={categories} handleClickCategory={handleClick} />
            </div>
            <CardContainer menus={filteredMenus} />

        </>
    );
}


export default Menu;
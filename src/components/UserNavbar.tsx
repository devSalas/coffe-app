'use client'
import { HomeIcon,HeartIcon, CartIcon, AccountIcon } from "./icons/icons";

function Navbar() {

    return (
            <div className="fixed left-0 bottom-0 bg-blue-500 w-full auto  grid grid-cols-4 place-content-center place-items-center px-4 py-2">
            <HomeIcon   /> 
             <HeartIcon />
            <CartIcon />
           <AccountIcon/>

            </div>
       
    );    
}

export default Navbar;
import { MenuI } from "@/lib/definitions";

interface PropsValue{
    menu:MenuI;
    handleclickRemove:(menu:MenuI)=>void
}


function CardFavorite({ menu, handleclickRemove }:PropsValue) {

    return (<div className="w-full min-h-20 flex justify-between items-center text-white bg-slate-700 p-4 rounded-lg">
        <div className="flex gap-4 items-center grow">
            <figure className="w-40">
                <img src="/icono_menu.png" alt="" />
            </figure>
            <div>
                <h3 className="text-xl">{menu.name}</h3>
                <span>{menu.price}</span>
            </div>
        </div>
        <div className="w-12 h-12   rounded-full bg-white hover:animate-pulse cursor-pointer">
            <svg onClick={()=>handleclickRemove(menu)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 24 24" fill="#DAB429" className="flex justify-between items-center ">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
        </div>
    </div>);
}

export default CardFavorite;
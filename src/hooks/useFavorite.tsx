import { useContext } from "react";
import { FavoriteContext } from "@/global/Favorite";
function useFavorite() {
    const context = useContext(FavoriteContext)

    if(context == undefined){
        throw new Error('useCart must be used within a CartProvidder')
    
    }
    return context;
}

export default useFavorite;
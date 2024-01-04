import CardMenu from "./CardMenu";

function CardContainer({ menus }) {
    console.log(menus)
    return (<div  className="grid grid-cols-responsive gap-2 py-4">
        {
            menus.map(menu => <CardMenu menu={menu} />)
        }
    </div>)

}

export default CardContainer;
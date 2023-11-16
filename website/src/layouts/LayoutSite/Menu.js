import { useEffect, useState } from "react";
import menuservices from "../../services/MenuServices";
import Menu_Item from "../../compoment/frontend/Menu_Item";

function Menu() {
    const [MenuList, setMenuList] = useState([]);

    try{
        useEffect(() => {
            (async function () {
                await menuservices.getByParentId('mainmenu', 0).then(function (response) {
                    setMenuList(response.data.menus);
                })
            })()
        }, []);    
    } catch (e) {
        console.error(e);
    }

    return (
        <nav class="desktop-navigation-menu">

            <div class="container">

                <ul class="desktop-menu-category-list">
                    {MenuList.map(function (menu, index) {
                        return (<Menu_Item menu={menu} key={index} />);

                    })}
                </ul>

            </div>

        </nav>

    );
}

export default Menu;
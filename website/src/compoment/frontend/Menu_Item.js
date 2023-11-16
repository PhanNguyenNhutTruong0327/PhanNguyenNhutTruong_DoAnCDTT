import { Link } from "react-router-dom";
import menuservices from "../../services/MenuServices";
import { useEffect, useState } from "react";

function Menu_Item(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);

    try {
        useEffect(function () {
            (async function () {
                await menuservices.getByParentId('mainmenu', rowmenu.id).then(function (result) {
                    setMenus(result.data.menus);
                })
            })();
        }, []);
    } catch (e) { console.error(e); }

    if (menus == null) {
        return (
            <li class="menu-category">
                <Link to={rowmenu.link} class="menu-title">{rowmenu.name}</Link>
            </li>
        );
    }
    else {
        return (
            <li class="menu-category">
                <Link to={rowmenu.link} class="menu-title">{rowmenu.name}</Link>

                <ul class="dropdown-list">
                    {menus.map(function (menu1, index) {
                        return (
                            <li class="dropdown-item">
                                <Link to={menu1.link}>{menu1.name}</Link>
                            </li>

                        );
                    })}
                </ul>
            </li>
        );
    }
}

export default Menu_Item;
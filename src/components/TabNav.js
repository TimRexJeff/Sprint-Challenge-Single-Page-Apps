import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    const [tabs, setTabs] = useState()

   const handleItemClick = (e, { name }) => {
        setTabs({ tabs: name })
    }
    
    return (
    <Menu tabular>
        <NavLink exact to='/'>
            <Menu.Item
            name='home'
            active={tabs === 'home'}
            onClick={handleItemClick}
            />
        </NavLink>
        <NavLink to='/characters'>
            <Menu.Item
            name='characters'
            active={tabs === 'characters'}
            onClick={handleItemClick}
            />
        </NavLink>
        <NavLink to='/locations'>
            <Menu.Item
            name='locations'
            active={tabs === 'locations'}
            onClick={handleItemClick}
            />
        </NavLink>
        <NavLink to='/episodes'>
            <Menu.Item
            name='episodes'
            active={tabs === 'episodes'}
            onClick={handleItemClick}
            />
        </NavLink>
    </Menu>
    )
}

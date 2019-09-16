import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage'
import CharacterList from './CharacterList'
import LocationsList from './LocationsList'
import EpisodeList from './EpisodeList'

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
    <Menu attached='top' tabular>
        <Menu.Item
        name='home'
        active={tabs === 'home'}
        onClick={handleItemClick}
        />
        <Menu.Item
        name='characters'
        active={tabs === 'characters'}
        onClick={handleItemClick}
        />
        <Menu.Item
        name='locations'
        active={tabs === 'locations'}
        onClick={handleItemClick}
        />
        <Menu.Item
        name='episodes'
        active={tabs === 'episodes'}
        onClick={handleItemClick}
        />
    </Menu>
    )
}

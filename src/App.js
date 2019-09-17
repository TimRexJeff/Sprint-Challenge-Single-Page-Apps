import React from "react";
import { Route } from 'react-router-dom'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationList.js";
import EpisodeList from "./components/EpisodeList.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationList} />
      <Route path='/episode' component={EpisodeList} />
    </main>
  );
}

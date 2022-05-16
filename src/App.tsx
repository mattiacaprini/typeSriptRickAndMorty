import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home/home";
import CharacterSelection from "./containers/characterSelection/characterSelectiont";

class App extends React.Component {
  //sempre questi due parametri

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path dove vado (nei pulsanti devo chiamare con lo stesso nome la herfm in element gli
            dico in quale mio file voglio andare. Per far funzionare un pulsante, gli do semplicemente la stesas path dichiarata qui. Quindi
            io dichiaro un oath comune che posso raggiungere dando la stessa path a cui voglio arrivare al click di un lik) */}
          <Route path="/character/:id" element={<CharacterSelection />} />
          {/* <Route index element={<Home result={""} characters={""} />} /> */}
          {/* <Route path="teams" element={<Teams />}>
              <Route index element={<LeagueStandings />} />
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
            </Route> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

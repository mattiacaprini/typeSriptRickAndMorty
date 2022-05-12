import "./App.css";
import React from "react";
import Character from "./components/character/character/character";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import axios from "axios";

type AppProps = {
  result: string;
  characters: string;
};

type Character = {
  //per un array con piu elementi di tipi diversi che poi gli passo sotto
  image: string;
  name: string;
  type: string;
};

type AppState = {
  characters: Character[];
  locaNumber: number;
  episodes: number;
  characterNumber: number;
};

class App extends React.Component<AppProps, AppState> {
  //sempre questi due parametri
  constructor(props: AppProps) {
    super(props);
    this.state = {
      characters: [],
      locaNumber: 0,
      episodes: 0,
      characterNumber: 0,
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((result: any) => {
        this.setState({
          characters: result.data.results,
          characterNumber: result.data.info.count,
        });
      });
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((result: any) => {
        this.setState({
          locaNumber: result.data.info.count,
        });
      });
    axios.get("https://rickandmortyapi.com/api/episode").then((result: any) => {
      this.setState({
        episodes: result.data.info.count,
      });
    });
  }

  render() {
    console.log(this.state.characters);

    const index = Math.round(Math.random() * 14);
    const selectedCharacter = this.state.characters.slice(index, index + 6);
    return (
      <div>
        <Header />

        <div className="figure">
          <div className="containerImg">
            {selectedCharacter.map((character, i) => (
              <Character
                key={i}
                image={character.image}
                name={character.name}
                type={character.type}
              />
            ))}
          </div>
        </div>

        <Footer
          charNumber={this.state.characterNumber}
          locaNumber={this.state.locaNumber}
          episNumber={this.state.episodes}
        />
      </div>
    );
  }
}

export default App;

import "./home.css";
import Character from "../../components/character/character/character";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import React from "react";

type Character = {
  //per un array con piu elementi di tipi diversi che poi gli passo sotto
  image: string;
  name: string;
  type: string;
  id: string;
};

type HomeState = {
  characters: Character[];
  locaNumber: number;
  episodes: number;
  characterNumber: number;
};

class Home extends React.Component<{}, HomeState> {
  //sempre questi due parametri
  constructor() {
    super({});
    this.state = {
      characters: [],
      locaNumber: 0,
      episodes: 0,
      characterNumber: 0,
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=15")
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
                id={character.id}
                image={character.image}
                name={character.name}
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

export default Home;

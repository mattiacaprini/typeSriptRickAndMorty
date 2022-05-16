import "../characterSelection/characterSelection.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import React from "react";
import DescriptionForm from "../../components/descriptionForm/descriptionForm";
import { useParams } from "react-router-dom";

type CharacterType = {
  //per un array con piu elementi di tipi diversi che poi gli passo sotto
  image: string;
  name: string;
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
};

type Params = {
  params: {
    id: string;
  };
};

type CharacterSelectionProps = {
  params: Params;
};

type CharacterSelectionState = {
  numero: number;
  locaNumber: number;
  episodes: number;
  characterNumber: number;
  character: CharacterType | undefined;
  idUrl: string;
  // charactedSelected: Character[];
};

export function withRouter(Children: any) {
  return (props: any) => {
    const params = { params: useParams() };
    console.log("params: ", params);
    return <Children {...props} params={params} />;
  };
}

class CharacterSelection extends React.Component<
  CharacterSelectionProps,
  CharacterSelectionState
> {
  //sempre questi due parametri

  constructor(props: CharacterSelectionProps) {
    super(props);
    this.state = {
      character: undefined,
      numero: 0,
      locaNumber: 0,
      episodes: 0,
      characterNumber: 0,
      idUrl: "",
    };
  }

  componentDidMount() {
    this.setState({ idUrl: this.props.params.params.id }, () => {
      const requestUrl =
        "https://rickandmortyapi.com/api/character/" + this.state.idUrl;

      axios.get(requestUrl).then((result: any) => {
        console.log("result.data = ", result.data);

        this.setState({
          character: result.data,
        });
      });
    });
  }

  render() {
    const { character } = this.state;
    return (
      <div>
        <Header />

        <div className="characterInformation">
          {character && (
            <DescriptionForm
              image={character.image}
              name={character.name}
              id={character.id}
              status={character.status}
              species={character.species}
              type={character.type}
              gender={character.gender}
            />
          )}
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

export default withRouter(CharacterSelection);

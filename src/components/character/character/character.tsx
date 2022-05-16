import { idText } from "typescript";
import "./character.css";

interface CharacterProps {
  image: string;
  name: string;
  id: string;
}

function Character(props: CharacterProps) {
  return (
    <div className="show_case">
      <div className="container_img_monster">
        <img className="img_monster" src={props.image} alt="img" />
      </div>
      <div className="title_txt">
        <h1>
          <a href={`/character/${props.id}`}>{props.name}</a>
        </h1>
      </div>
    </div>
  );
}

export default Character;

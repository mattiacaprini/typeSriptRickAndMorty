import "./character.css";

interface CharacterProps {
  image: string;
  name: string;
  type: string;
}

function Character(props: CharacterProps) {
  return (
    <div className="show_case">
      <div className="container_img_monster">
        <img className="img_monster" src={props.image} alt="img" />
      </div>
      <div className="title_txt">
        <h1>{props.name}</h1>
        <h3>{props.type}</h3>
      </div>
    </div>
  );
}

export default Character;

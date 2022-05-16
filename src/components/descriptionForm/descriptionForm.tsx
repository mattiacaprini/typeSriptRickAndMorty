import "../descriptionForm/descriptionForm.scss";
import ImgMaschio from "../../img/mas.png";
import ImgFemmina from "../../img/fem.png";
import Dead from "../../img/Dead.png";
import Alive from "../../img/Alive.png";
import unknown from "../../img/unknown.png";

interface DescriptionFormProps {
  image: string;
  name: string;
  type: string;
  id: number;
  status: string;
  species: string;
  gender: string;
}

function DescriptionForm(props: DescriptionFormProps) {
  let selectionImgMoF = "";
  let selectionImgAoUoD = "";

  if (props.gender === "Male") {
    selectionImgMoF = ImgMaschio;
  } else if (props.gender === "Female") {
    selectionImgMoF = ImgFemmina;
  } else {
    selectionImgMoF = unknown;
  }

  if (props.status === "Alive") {
    selectionImgAoUoD = Alive;
  } else if (props.status == "Dead") {
    selectionImgAoUoD = Dead;
  } else {
    selectionImgAoUoD = unknown;
  }

  return (
    <div className="containerForm">
      <div className="conConImg">
        <div className="conImgImg">
          <img className="imgCharacterSpecific" src={props.image} />
        </div>
      </div>

      <div className="containerDescription">
        <h2>NAME: {props.name} </h2>
        <h2>
          GENDER: {props.gender}
          <div className="contImg">
            <img className="AoDoUoMoF" src={selectionImgMoF} />
          </div>
        </h2>
        <h2>SPECIES: {props.species} </h2>
        <h2>TYPE: {props.type} </h2>
        <h2>
          STATUS: {props.status}
          <div className="contImg">
            <img className="AoDoUoMoF" src={selectionImgAoUoD} />
          </div>
        </h2>
      </div>
    </div>
  );
}

export default DescriptionForm;

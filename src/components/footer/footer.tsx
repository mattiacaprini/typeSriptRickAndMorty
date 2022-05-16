import "./footer.scss";
interface FooterProps {
  charNumber: number;
  locaNumber: number;
  episNumber: number;
}

function Footer(Props: FooterProps) {
  return (
    <div className="footer">
      <div className="txt_footer">
        <p>
          <span>CHARACTERS: {Props.charNumber}</span>
        </p>
        <p>
          <span>LOCATIONS: {Props.locaNumber}</span>
        </p>

        <h5>EPISODES: {Props.episNumber}</h5>
        <h5>❮❯ by Axel Fuhrmann 2022</h5>
      </div>
    </div>
  );
}

export default Footer;

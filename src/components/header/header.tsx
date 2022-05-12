import logo from "../../img/img_logo.png";
import "./header.css";

function Header() {
  return (
    <div className="headerSite">
      <div className="insideHeaderUp">
        <div className="container_logo">
          <img className="img_logo" src={logo} alt="logo" />
        </div>

        <div className="menu">
          <p>
            <span>docs</span>
          </p>
          <p>
            <span>about</span>
          </p>
          <p className="support_us">
            <span>support us</span>
          </p>
        </div>
      </div>

      <div className="title">
        <h1>The Rick and Morty API</h1>
      </div>
    </div>
  );
}

export default Header;

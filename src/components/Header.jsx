import profilePicture from "../assets/ilham.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>ILHAMSYAH PUTRA</h3>
        <p>PROGRAMMING - RUNNING</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/ilhammmmm_s?igsh=NjI5YThtMDdlaTFt">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/share/1DsGwxNZSc/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

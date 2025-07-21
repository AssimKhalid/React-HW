import searchIcon from "../../assets/search-engine.png";
import Logo from "../components/ui/Logo";
import NabBar from "../components/ui/NavBar";

const Header = () => (
  <header className="header">
    <Logo />
    
    <NabBar />    

    <div className="header_search">
      <img src={searchIcon} alt="searchIcon" />
    </div>
  </header>
);

export default Header;

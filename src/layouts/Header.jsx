import searchIcon from "../assets/search-engine.png";
import Logo from "../layouts/Logo";
import NabBar from "../layouts/NavBar";

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

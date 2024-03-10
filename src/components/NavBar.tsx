import { useThemeContext } from "../context/Theme-context";
import { IoMdSearch } from "react-icons/io";
import "../styles/NavBar.scss";
import { ToggleSwitch } from "./ToggleSwitch";

const NavBar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className="navbar">
      <img
        className="logo"
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Youtube_vanced.png"
      />

      <div className="search-bar">
        <IoMdSearch size={'1.2rem'}
          style={{ position: "absolute", left: "1.2rem", top: "0.8rem" }}
        />
        <input type="text" placeholder="Search"></input>
      </div>
      <ToggleSwitch onSwitch={toggleTheme} isChecked={theme === "dark"}/>
    </nav>
  );
};

export default NavBar;

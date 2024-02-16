import "./index.css";
import PropTypes from "prop-types";

function Menu({ exportType }) {
  return (
    <nav className="navbar">
      <span
        className={`navbar_button ${
          exportType === "pom" ? "selected_navbar_button color_orange" : ""
        }`}
      >
        pomdoro
      </span>
      <span
        className={`navbar_button ${
          exportType === "sho" ? "selected_navbar_button color_yellow" : ""
        }`}
      >
        shork break
      </span>
      <span
        className={`navbar_button ${
          exportType === "lon" ? "selected_navbar_button color_green" : ""
        }`}
      >
        long break
      </span>
    </nav>
  );
}

Menu.propTypes = {
  exportType: PropTypes.string.isRequired,
};

export default Menu;

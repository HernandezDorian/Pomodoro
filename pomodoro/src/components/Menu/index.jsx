import "./index.css";
import PropTypes from "prop-types";

function Menu({ exportType }) {
  return (
    <nav className="navbar">
      <span
        className={`navbar_button ${
          exportType === "pom" ? "selected_navbar_button" : ""
        }`}
      >
        pomdoro
      </span>
      <span
        className={`navbar_button ${
          exportType === "sho" ? "selected_navbar_button" : ""
        }`}
      >
        shork break
      </span>
      <span
        className={`navbar_button ${
          exportType === "lon" ? "selected_navbar_button" : ""
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

import "./Switch.css";
import { useTheme } from "../../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="button-theme" onClick={toggleTheme}>
      {theme === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" fill="#ffffff" />
          <circle cx="50" cy="50" r="45" fill="#f9d1e1" />
        </svg>
      )}
      {theme === "dark" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="#333333" />
          <path
            d="M 15 50 A 30 30 0 0 1 85 50 Z"
            fill="#FFFFFF"
            transform="rotate(-90 50 50)"
          />
        </svg>
      )}
    </button>
  );
};

export default Switch;

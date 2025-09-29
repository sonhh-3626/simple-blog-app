import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = {
        background: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
        padding: "8px 15px",
        border: "none",
        borderRadius: "5px" 
      }
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={styles}
    >
      {theme === "light" ? "Light Theme" : "Dark Theme"}
    </button>
  );
}

import * as BsIcon from "react-icons/bs";

export default function ToggleButton({ mode, toggleMode }) {
  return (
    <div className="dark-light-switch">
      {mode === "light" ? (
        <BsIcon.BsToggle2Off
          color="black"
          size="2rem"
          onClick={() => toggleMode("light")}
        />
      ) : (
        <BsIcon.BsToggle2On
          color="white"
          size="2rem"
          onClick={() => toggleMode("dark")}
        />
      )}
    </div>
  );
}

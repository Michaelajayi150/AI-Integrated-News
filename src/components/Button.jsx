import * as BsIcon from "react-icons/bs";

export default function ToggleButton({ mode, toggleMode }) {
  return (
    <div className="dark-light-switch" onClick={toggleMode}>
      {mode === "light" ? (
        <BsIcon.BsToggle2Off color="black" size="2rem" />
      ) : (
        <BsIcon.BsToggle2On color="white" size="2rem" />
      )}
    </div>
  );
}

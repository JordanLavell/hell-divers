import React from "react";
import "../assets/styles/theme.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Use the class "title" for styling the game title */}
      <h1 className="title">HELLDIVERS Bingo</h1>
    </header>
  );
};

export default Header;

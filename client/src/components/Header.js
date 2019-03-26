import React from "react";
import heroImage from "../images/books.jpeg"

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "400px",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;
import React from "react";
import ProgressiveImage from "./ProgressiveImage";
import pubg from "./pubg.png";
import pubgPlaceholder from "./pubg-placeholder.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProgressiveImage src={pubg} placeholder={pubgPlaceholder} />
    </div>
  );
}

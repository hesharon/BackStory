import React, { useState } from "react";
import Tabs from "./Home";
import "./Gallery.css";
import PolaroidImage from "./components/PolaroidImage/PolaroidImage";

function Gallery(props) {
  const squares = Array.from(Array(48).keys());

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  }

  return (
    <>
      <Tabs />
      <div className="wrapper">
        <div className="grid">
          {squares.map((square, index) => (
            <PolaroidImage
              key={index}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              imageURL="https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              caption="Zoomin'"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;

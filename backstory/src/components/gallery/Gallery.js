import React, { useState } from "react";
import "./Gallery.css";
import PolaroidImage from "../../components/polaroidImage/PolaroidImage";

function Gallery() {
  const photos = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      caption: "Zoomin'",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };

  return (
    <div className="wrapper">
      <div className="grid">
        {photos.map((photo, index) => (
          <PolaroidImage
            key={index}
            isFlipped={flippedIndex === index}
            onFlip={() => handleFlip(index)}
            imageURL={photo.imageSrc}
            caption={photo.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

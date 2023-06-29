import React, { useState } from "react";
import "./Collections.css";
import Collection from "../collection/Collection";
import { useSelector } from 'react-redux';
import Gallery from '../gallery/Gallery';

function Collections() {
  const collections = useSelector((state) => state.collections);
  const [showCollections, setShowCollections] = useState(true);
  const [images, setImages] = useState([]);
  
  return (
    <>
      {showCollections ? 
      <div className="wrapper">
        <div className="grid">
          {collections.map((collection, index) => (
            <Collection
              key={index}
              name={collection.name}
              images={collection.images}
              onSelect={() => {setShowCollections(false);setImages(collection.images)}}
            />
          ))}
        </div>
      </div> : <Gallery photos={images}/>}
    </>
  );
}

export default Collections;

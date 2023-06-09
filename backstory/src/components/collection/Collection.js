import React from 'react';
import './Collection.css';

const Collection = ({ images, name }) => (
  <div className="collection">
    <div className="collection-images">
      {images.slice(0, 4).map((img, index) => (
        <div 
          key={index} 
          className="collection-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
    <div className="collection-name">
      <p>{name}</p>
    </div>
  </div>
);

export default Collection;

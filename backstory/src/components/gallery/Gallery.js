import "./Gallery.css";
import React, { useState } from "react";
import PolaroidImage from '../PolaroidImage/PolaroidImage';

function Gallery({photos}) {

const [flippedIndex, setFlippedIndex] = useState(null);

const handleFlip = (index) => {
setFlippedIndex(flippedIndex !== index ? index : null);
};


return (
<div className="wrapper">
<div className="grid">
{photos?.map((photo, index) => (
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
import "./Collection.css";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Collection({ collectionId, name, onSelect }) {
  const { user } = useAuth0();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.email}/collections/${collectionId}/photos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((photos) => setPhotos(photos))
      .catch(console.error);
  }, [collectionId]);

  console.log("in here", photos);

  return (
    <div
      className="collection"
      onClick={() => {
        onSelect();
      }}
    >
      <div className="collection-images">
        {photos && photos.length > 0 ? (
          photos.length < 4 ? (
            <img
              className="solo-collection-image"
              src={`/photos/${photos[0].photoId}/image`}
              alt="0"
            />
          ) : (
            photos
              .filter((img) => img)
              .slice(0, 4)
              .map((img, index) => (
                <img
                  key={index}
                  className="collection-image"
                  src={`/photos/${img.photoId}/image`}
                  alt={index.toString()}
                />
              ))
          )
        ) : null}
      </div>
      <div className="collection-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Collection;

import React from 'react';
import "./Collections.css";
import Collection from "../collection/Collection";

function Collections(props) {
  const collections = [
    {
      name: 'Mushrooms',
      images: ["https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1634159779963-4fafda643dac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80", "https://images.unsplash.com/photo-1618232731737-e1cd67c80bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1603539007496-0bfa35834541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"]
    },
    /* more collections... */
  ];

  return (
    <>
      <div className="wrapper">
        <div className="grid">
          {collections.map((collection, index) => (
            <Collection
              key={index}
              name={collection.name}
              images={collection.images}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;

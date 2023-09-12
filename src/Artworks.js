import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [isArtworkLoad, setIsArtworkLoading] = useState(true);
  const bearerToken = '2fa87d97479d5dcb73753e56b71d2487d7597b23fb7c236ea46a09d007850e4ac66f3b8b8df6cbc3077832c1d8870c21560497cdc6545b8c48e9232dacd0c94e37bc8d2d23a2575882a205576a27c0ab7ff7c9fe832d752aa5adeea985219bbbab66b183b0bea48b71e676fc206280c8faceec1b3a9bfea1f5b9a4d6d3a85f52'; // Replace with your actual bearer token
  const apiUrl = 'http://localhost:1337/api/artworks?populate=*'; // Replace with your API endpoint

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        const artworksFromResponse = response.data.data; // Extract the "data" array
        setArtworks(artworksFromResponse);
        setIsArtworkLoading(false);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        setIsArtworkLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      {isArtworkLoad ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery">
          {artworks.map(artwork => (
            <div className="artworksContainer">
            <div key={artwork.id}>
                <div className="imageContainer">
                <img className="image" src={"http://localhost:1337"+artwork.attributes.artworkImage.data.attributes.formats.small.url}/>
                
                </div>
                <div>{artwork.attributes.name}</div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Artworks;

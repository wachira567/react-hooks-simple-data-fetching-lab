import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch a random dog picture when component loads
  useEffect(() => {
    async function getDogPhoto() {
      try {
        setIsLoading(true);
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.log("Something went wrong:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getDogPhoto();
  }, []);

  // Show loading message while waiting for the dog picture
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // Show the dog picture once it's loaded
  return (
    <div>
      <img
        src={
          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=980:*"
        }
        alt="A Random Dog"
      />
    </div>
  );
}

export default App;

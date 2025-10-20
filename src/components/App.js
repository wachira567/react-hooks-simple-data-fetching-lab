import React, { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
};

export default App;

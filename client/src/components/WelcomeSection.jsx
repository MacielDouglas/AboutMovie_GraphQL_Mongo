import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function WelcomeSection({ movies }) {
  const [randomIndex, setRandomIndex] = useState(0);
  const [blurredImage, setBlurredImage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * movies.length);
      setRandomIndex(newIndex);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [movies]);

  useEffect(() => {
    const img = new Image();
    img.src = movies[randomIndex]?.poster;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0);

      context.filter = "blur(5px) brightness(0.6)";
      context.drawImage(img, 0, 0, img.width, img.height);

      const blurredImageUrl = canvas.toDataURL();
      setBlurredImage(blurredImageUrl);
    };
  }, [movies, randomIndex]);

  const backgroundStyle = {
    backgroundImage: `url(${blurredImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    color: "#fff",
  };

  return (
    <div style={backgroundStyle}>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row z-0 static">
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
          <h1 className="text-3xl font-semibold mb-4">
            Bem-vindo ao About Movie
          </h1>
          <h3 className="mb-4">Aqui você pesquisa os melhores filmes</h3>
          <p className="mb-4">De 1900 a 2015</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={movies[randomIndex]?.poster}
            alt={movies[randomIndex]?.title}
            className="max-h-96 md:max-h-full w-auto mx-auto my-4 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

WelcomeSection.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default WelcomeSection;

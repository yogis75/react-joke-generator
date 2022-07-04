import { useEffect, useState } from "react";

function App() {
  const API = `https://v2.jokeapi.dev/joke/Any?type=single`;

  const generateJoke = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  const [joke, setJoke] = useState("");

  return (
    <div className="App">
      <h2>Joke Generator</h2>
      {/* <p>Enter your name!</p>
      <input type="text"></input> */}
      <p>{joke}</p>
      <button onClick={generateJoke} type="submit">
        Generate Joke
      </button>
    </div>
  );
}

export default App;

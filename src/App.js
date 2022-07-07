import { useEffect, useState } from "react";

function App() {
  //State
  const [joke, setJoke] = useState("Here will be the Joke!");
  const [typeOfJoke, setTypeOfJoke] = useState("Any");
  const [filter, setFilter] = useState("");
  const API = `https://v2.jokeapi.dev/joke/${typeOfJoke}?type=single`;

  //Functions
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const typeHandler = () => {
    switch (filter) {
      case "Programming":
        setTypeOfJoke("Programming");
        break;
      case "Misc":
        setTypeOfJoke("Misc");
        break;
      case "Pun":
        setTypeOfJoke("Pun");
        break;
      default:
        setTypeOfJoke("Any");
        break;
    }
  };

  const generateJoke = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  useEffect(() => {
    typeHandler();
  }, [filter]);

  return (
    <div className="App">
      <h2>Joke Generator</h2>
      {/* <input type="text" placeholder="Enter your name" /> */}

      <p>{joke}</p>
      <select onChange={filterHandler}>
        <option>Any</option>
        <option>Programming</option>
        <option>Misc</option>
        <option>Pun</option>
      </select>
      <button onClick={generateJoke} type="submit">
        Generate Joke
      </button>
    </div>
  );
}

export default App;

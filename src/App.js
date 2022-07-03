function App() {
  let joke;
  const inputHandler = (e) => {
    e.preventDefault();
    joke = e.target.value;
  };
  return (
    <div className="App">
      <h2>Joke Generator</h2>
      <form>
        <p>Enter your name!</p>
        <input type="text"></input>
        <button type="submit" onClick={inputHandler}>
          Generate Joke
        </button>
      </form>
    </div>
  );
}

export default App;

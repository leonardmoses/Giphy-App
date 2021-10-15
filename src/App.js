import React from "react";
import "./App.css";
import GiphyDisplay from "./components/GiphyDisplay";
import Form from "./components/Form";
import RandomForm from "./components/RandomForm";
import GiphyRandom from "./components/GiphyRandom";

function App() {
  // 1. variable with your apiKey
  const apiKey = "KfAMaBgCs5QOIbR6KRL52fxIY9RcWnJE";
  
  // 2. State to hold Giphy data
  const [Giphy, setGiphy] = React.useState(null);

  // 3. Function to getGiphys
  const getGiphy = async (searchTerm) => {
    // 3a. make fetch request and store response
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    );
    // 3b. Parse JSON response into a javascript object
    const data = await response.json();
    // 3c. set the Giphy state to the Giphy
    setGiphy(data);
  };

  const getRandomGiphy = async () => {
    // 3a. make fetch request and store response
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    // 3b. Parse JSON response into a javascript object
    const data = await response.json();
    // 3c. set the Giphy state to the Giphy
    setGiphy(data);
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getGiphy function as a prop called Giphysearch
  return (
    <div className="App">
      <Form Giphysearch={getGiphy} />
      <GiphyDisplay Giphy={Giphy} />
      <RandomForm GiphyRandomForm={getRandomGiphy} />
      <GiphyRandom RandomGiphy={Giphy} />
    </div>
  );
}

export default App;


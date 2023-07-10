import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="justify-center mx-5 my-5">
        <Header />
        <div className="flex justify-center">
          <Filters />
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;

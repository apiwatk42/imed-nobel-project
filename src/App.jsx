import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Details from "./components/Details";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="justify-center mx-5 my-5">
        <Header />
        <div className="flex justify-center">
          <Filters />
        </div>
        <Details />
      </div>
    </>
  );
}

export default App;

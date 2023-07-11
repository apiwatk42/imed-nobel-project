import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Details from "./components/Details";
import { useState, useEffect } from "react";

function App() {
  //const [data, setData] = useState([]);
  const [NobelprizeData, setNobelPrizeData] = useState([]);
  const [awardYears, setawardYears] = useState(0);

  return (
    <>
      <div className="justify-center mx-5 my-5">
        <Header awardYears={awardYears} />
        <div className="flex justify-center">
          <Filters
            //data={data}
            setawardYears={setawardYears}
            setNobelPrizeData={setNobelPrizeData}            
          />
          <Details 
            NobelprizeData={NobelprizeData}
          />
        </div>
      </div>
    </>
  );
}

export default App;

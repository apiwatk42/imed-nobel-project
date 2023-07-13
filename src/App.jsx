import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [NobelprizeData, setNobelPrizeData] = useState([]);
  const [awardYears, setawardYears] = useState(0);

  return (
    <>
      <div className="mx-5 mt-5">
        <Header awardYears={awardYears} />
        <div className="flex flex-col md:flex-row justify-center">
          <Filters
            setawardYears={setawardYears}
            setNobelPrizeData={setNobelPrizeData}
          />
          <div className="flex justify-center">
            <Details NobelprizeData={NobelprizeData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import axios from "axios";
import { Select, Button } from "antd";
import { useState } from "react";

function Filters(props) {
  
  const setawardYears = props.setawardYears;

  const [selectYear, setSelectYear] = useState(new Date().getFullYear());

  let fullYears = [];

  for (let i = new Date().getFullYear(); i >= 1901; i--) {
    fullYears.push(i);
  }
  let getYear = fullYears.map((result, index) => ({
    index: index,
    value: result,
    label: result,
  }));

  const fetchData = async (year) => {
    try {
      const response = await axios.get(
        `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`
      );
      const NobelprizeData = response.data.nobelPrizes;
      console.log(NobelprizeData);
      props.setNobelPrizeData(NobelprizeData);
    } catch (error) {
      console.error(error);
    }
     
  };
 
  return (
    <div>
      <div className="flex justify-center items-center h-[85vh] w-[36rem] border border-red-700 mt-5">
        <div className="">
          <Select
            onChange={(value) => setSelectYear(value)}
            defaultValue={selectYear}
            style={{ width: 120 }}
            options={getYear}
          />
          <Button
            className="mx-5 mt-5"
            onClick={() => {
              fetchData(selectYear);
              setawardYears(selectYear);
            }}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* <div>
        
        Prize amount : {totalPrizeAmount}
      </div> */}
    </div>
  );
}

export default Filters;

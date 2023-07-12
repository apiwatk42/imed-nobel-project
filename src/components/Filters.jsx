import React from "react";
import axios from "axios";
import { Select, Button } from "antd";
import { useState } from "react";

function Filters(props) {

  const setawardYears = props.setawardYears;
  const [selectYear, setSelectYear] = useState(new Date().getFullYear());
  const [totalPrize, setTotalPrize] = useState(0);

  let fullYears = [];

  for (let i = new Date().getFullYear(); i >= 1901; i--) {
    fullYears.push(i);
  }
  let getYear = fullYears.map((result, index) => ({
    index: index,
    value: result,
    label: result,
  }));

  const fetchApi = async (year) => {
    axios
      .get(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`)
      .then((response) => {
        const NobelprizeData = response.data.nobelPrizes;
        console.log(NobelprizeData);
        props.setNobelPrizeData(NobelprizeData);

        const totalPrizeAmount = response.data.nobelPrizes.reduce((sum, prize) => {
          return sum + (prize.prizeAmount || 0);
        }, 0);

        setTotalPrize(totalPrizeAmount);
      })
      .catch((error) => {
        alert("Error: API");
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-auto w-auto md:h-[85vh] md:w-[37rem] border border-black bg-slate-500 mt-5">
        <div>
          <Select
            showSearch
            onChange={(value) => setSelectYear(value)}
            defaultValue={selectYear}
            style={{ width: 120 }}
            options={getYear}
          />
          <Button
            className="mx-5 mt-5 bg-lime-300 border-2 border-green-600"
            onClick={() => {
              fetchApi(selectYear);
              setawardYears(selectYear);
            }}
          >
            Apply
          </Button>
          <div className="mt-5 text-red-600 font-bold text-xl"> <span className="text-white">Prize Amount :</span> {totalPrize}</div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

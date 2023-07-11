import React from "react";
import axios from "axios";
import { Select, Button } from "antd";
import { useState } from "react";

function Filters(props) {
  const setData = props.setData;
  const data = props.data;
  const setawardYears = props.setawardYears;

  const [selectYear, setSelectYear] = useState(2023);
  const [years, setYears] = useState([]);

  let getYear = [];

  for (let i = new Date().getFullYear(); i >= 1901; i--) {
    //push data to array
    getYear.push(i);
  }

  //convert (data = []) array to object with .map
  let testdata = getYear.map((result, index) => ({
    index: index,
    value: result,
    label: result,
  }));

  const fetchData = async (year) => {
    try {
      const response = await axios.get(
        "https://api.nobelprize.org/2.1/nobelPrizes"
      );
      //change variables
      const prize = response.data.nobelPrizes;
      const awardYears = prize.filter((el) => el.awardYear == year);
      //console.log(response.data.nobelPrizes);
      //console.log(year,prize[0].awardYear);
      //console.log(awardYears);
      setData(awardYears)
      
    } catch (error) {
      console.error(error);
    }
  };
      console.log(data);
  return (
    <div>
      <Select
        onChange={(value) => setSelectYear(value)}
        defaultValue={2023}
        style={{ width: 120 }}
        options={testdata}
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
  );
}

export default Filters;

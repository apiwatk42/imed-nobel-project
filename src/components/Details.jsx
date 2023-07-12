import React from "react";
import { Table } from "antd";

function Details(props) {
  
  const NobelprizeData = props.NobelprizeData;

  const columns = [
    {
      title: "ชื่อรางวัล",
      dataIndex: "awardName",
      key: "awardName",
    },
    {
      title: "ปีที่ได้รับรางวัล",
      dataIndex: "awardYear",
      key: "awardYear",
    },
    {
      title: "ผู้ได้รับรางวัล",
      dataIndex: "laureates",
      key: "laureates",
    },
    {
      title: "แรงบันดาลใจ",
      dataIndex: "motivation",
      key: "motivation",
    },
  ];

  const data = props.NobelprizeData.flatMap((value, index) => {
    const { categoryFullName, awardYear } = value;
    if (value.laureates === undefined)
      return {
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: " - ",
        motivation: nobel.topMotivation?.en,
      };
    else
      return value.laureates.map((authorNobel) => ({
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: authorNobel.knownName?.en || authorNobel.orgName?.en,
        motivation: authorNobel.motivation.en,
      }));
  });

  return (
    <div className="ml-5">
      <div className="flex justify-center items-center h-[85vh] w-[80rem] border border-red-700 bg-slate-500 mt-5">
        <Table
          className="border-b-2 border border-red-700"
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}

export default Details;

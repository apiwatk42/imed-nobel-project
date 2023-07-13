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

  const detail = props.NobelprizeData.flatMap((value, index) => {
    const { categoryFullName, awardYear } = value;
    if (value.laureates === undefined)
      return {
        key: `no-laureates-${index}`,
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: " - ",
        motivation: value.topMotivation?.en,
      };
    else
      return value.laureates.map((NobelList, subIndex) => ({
        key: `laureate-${index}-${subIndex}`,
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: NobelList.knownName?.en || NobelList.orgName?.en,
        motivation: NobelList.motivation.en,
      }));
  });

  const paginationConfig = {
    pageSize: 7,
    total: detail.length,
  };

  return (
    <div className="justify-center items-center">
      <div className="md:h-[85vh] md:w-[80rem] pt-5 md:pl-5">
      <Table  
        className="border border-black"     
        columns={columns}
        dataSource={detail}
        scroll={true}
        pagination={paginationConfig}
      />
    </div>
    </div>
  );
}

export default Details;

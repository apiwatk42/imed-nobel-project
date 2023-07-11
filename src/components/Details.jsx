import React from "react";
import { Table, Pagination } from "antd";

function Details(props) {
  console.log(props.NobelprizeData);

  const { Column, ColumnGroup } = Table;

  return (
    <div className="ml-5">
      <div className="flex justify-center items-center h-[85vh] w-[80rem] border border-red-700 bg-yellow-400 mt-5">
        {/* {props.NobelprizeData.map((NobelPrize) => {
          return NobelPrize.awardYear;
        })} */}
        <Table className="border-b-2 border border-red-700">
          <ColumnGroup title="รายละเอียดรางวัล">
            <Column
              title="ชื่อรางวัล"
              dataIndex="firstName"
              key="firstName"
            />
            <Column
              title="ปีที่ได้รับรางวัล"
              dataIndex="lastName"
              key="lastName"
            />
            <Column title="ผู้ได้รับรางวัล" dataIndex="age" key="age" />
            <Column title="แรงบันดาลใจ" dataIndex="address" key="address" />
          </ColumnGroup>
        </Table>
        {props.NobelprizeData.map((result, index) => {})}
      </div>
      {/* <Pagination
        className="mt-3"
        total={props.NobelprizeData.length}
        pageSize={10}
        showSizeChanger={false}
      /> */}
    </div>
  );
}

export default Details;

import React from 'react'

function Header(props) {

  const awardYears = props.awardYears;
  console.log(awardYears);
  return (
    <div>
      <h1 className='text-center text-blue-500 border rounded-3xl border-red-700 text-2xl font-bold'>Nobel Prize</h1>      
      <p>{ awardYears ?  "ประจำปี ค.ศ. : " + awardYears : ""}</p>
    </div>
    
  )
}

export default Header

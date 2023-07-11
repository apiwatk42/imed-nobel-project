import React from 'react'

function Header(props) {

  const showYear = props.awardYears;
  console.log(showYear);
  return (
    <div>
      <div className='border border-red-700 bg-yellow-400'>
        <h1 className='text-center text-blue-500 text-2xl font-bold'>Nobel Prize</h1> 
        <p className='text-center'>{ showYear !=0 ?  "ประจำปี ค.ศ. : " + showYear : ""}</p>
      </div>
           
      
    </div>
    
  )
}

export default Header

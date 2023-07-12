import React from 'react'

function Header(props) {

  const showYear = props.awardYears;

  return (
    <div>
      <div className='border border-black bg-slate-900'>
        <h1 className='text-center text-white text-2xl font-bold'>Nobel Prize</h1> 
        <p className='text-center text-white'>{ showYear !=0 ?  "ประจำปี ค.ศ. " + showYear : ""}</p>
      </div>      
    </div>    
  )
}

export default Header

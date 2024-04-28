import React from 'react'


const Buttons = ({data,jobs,value,setValue}) => {
  return (
 <>
{jobs.map((item,index) => {
    const {id,company} = item
    return(
<button key={id} onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} >
    {company}

</button>
    )

  
}
)} 
 
 </>
  )
}

export default Buttons

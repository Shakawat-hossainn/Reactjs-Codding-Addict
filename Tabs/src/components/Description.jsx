import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const Description = ({duty}) => {
  return (
    <div  className="job-desc">
    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
    <p>{duty}</p>
  </div>
  )
}

export default Description

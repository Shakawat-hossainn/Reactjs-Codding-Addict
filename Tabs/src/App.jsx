import { useState } from "react";

import "./App.css";
import data from './data'
import Buttons from "./components/Buttons";
import Description from "./components/Description";

function App() {
  const [jobs, setJobs] = useState(data)
  const [value,setValue] = useState(0)


  const {id,order,title,dates,duties,company} = jobs[value]
  


  return( <>
  <section className="section">
    <div className="title">
      <h2>experience</h2>
    <div className="underline"></div>
    </div>
    <div className="btn-container">
    <Buttons data={data} value={value} jobs={jobs} setValue={setValue} />
    <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index) => {
             const {id,order,title,dates,duties} = jobs[value]
            return(
              <Description key={index} duty={duty} />
            )
            
          }
          )}
          
          </article>
    </div>
    <button type="button" className="btn">
        more info
      </button>
  </section>
  
  
  </>
  )
}

export default App;

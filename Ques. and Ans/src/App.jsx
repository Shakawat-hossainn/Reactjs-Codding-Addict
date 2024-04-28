import React, { useState } from 'react';
import data from './data';
import './App.css'
import Question from './components/Question';
function App() {
  const [questions, setQuestions] = useState(data);
  //const {id,title,info} = questions
  return (
  <>
  <main>
  <div className="container">
    <h3>question and answer about login</h3>
    <section className="info">
      {questions.map((question) => {
        return(
          <Question key={question.id} {...question} />
        )
        
      }
      )}
    </section>
  </div>
  
  </main>
  
  </>
  );
}

export default App;
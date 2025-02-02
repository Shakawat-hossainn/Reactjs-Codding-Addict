import React, { useState } from 'react';
import Values from 'values.js';
import './App.css';
import SingleColor from './components/SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

  const generateColor = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit" onClick={generateColor}>
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              hexColor={item.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

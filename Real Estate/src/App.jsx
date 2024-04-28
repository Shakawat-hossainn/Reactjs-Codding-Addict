// App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Properties from './components/Properties';
import Service from './components/Service';
import Agents from './components/Agents';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Navbar />
      <Hero />
      
        <Featured />
        <Properties />
        <Service/>
        <div id="agents-section">
  <Agents />
</div>
        <Footer/>
      
    </>
  );
}

export default App;

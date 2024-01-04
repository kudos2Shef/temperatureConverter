import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [celsius,setCelsius] = useState(0);
  const [fahrenheit,setFahrenheit] = useState(32);// Initialize with the conversion of 0 Celsius
  function convertCelsToFahren(e){
    const tempCelsius =  e.target.value;
    setCelsius(tempCelsius);
    //console.log(celsius,tempCelsius);
    setFahrenheit((tempCelsius * 9/5)+32);// Use tempCelsius for calculation


  }
  function convertFahrenToCels(e){
    const tempFahrenheit = e.target.value;
    setFahrenheit(tempFahrenheit);
    setCelsius((tempFahrenheit - 32)*5/9);// Use tempFahrenheit for calculation

  }
  return(
    <>
      <div className="box">
       <div id='intro'>
      <span> Celsius - Fahrenheit Temperature Converter</span>
     
        <p>Celsius to Fahrenheit Formula:- (Celsius x 9/5) + 32 </p>
        
          <p> Fahrenheit to Celsius Formula:- (Fahrenheit - 32) x 5/9 </p>
      </div>
      
    <div className="container">
    <label htmlFor="celsius">Celsius</label>
    <input type="number" id='celsius' value={celsius}  onChange={convertCelsToFahren}/>
    <label htmlFor="fahrenheit" id='in'>Fahrenheit</label>
    <input type="number" id='fahrenheit' value={fahrenheit} onChange={convertFahrenToCels}/>
    </div>
      </div>
    </>

  );



  /*const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );*/
}

export default App;

//I did everything first I used OnKeyDown but then I checked onChange should be used , had truble setting value change and synchronous but worked 
//asked Jarvis, since I didn't setCelsius() and setFahrenheit so, my input value remained 0 rather than changing to given value but calculation was being done, also my calculation was asynchronous see jarvis , 1st digit notaken when second digit input given then first digit value taken in claculation like input 2 then no input then 20 then 2 is taken asynchrnous so, before 2nd digit is et in Celsius or ... first didgit is up for calculation
// also challenge wanted to like when input is given immediately answer shoul be presented in other input.      
//jarvis 2:28pm 4th december.
//https://www.google.com/search?q=celsius+to+fahrenheit+calculator&sca_esv=587611622&rlz=1C1CHZL_enIN969IN1028&sxsrf=AM9HkKkJ62DUIJ5KZHeQO0i1vmVjSG3GIQ%3A1701679599120&ei=75FtZaP2BpnE4-EP8cWFsAI&oq=celsius+to+fahrenheit+ca&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGNlbHNpdXMgdG8gZmFocmVuaGVpdCBjYSoCCAAyCxAAGIAEGIoFGJECMgsQABiABBiKBRiRAjIFEAAYgAQyCxAAGIAEGIoFGJECMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIsXUD9Y3Q9wAXgBkAEAmAHHAaAB0AyqAQMwLjm4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICChAAGIAEGIoFGEPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp
//this should work like above link
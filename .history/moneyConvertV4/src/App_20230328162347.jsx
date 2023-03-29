import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>

    <div className="wrapper">
        <div className="app-details">
            <img src="https://github.com/MatteoSuarez/money-exchange_v3/blob/main/src/ressources/icon.png?raw=true" className="app-icon" />
            <h1 className="app-title">currency converter</h1>

        </div>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" value="100" />
        <div className="dropdowns">
 

<select id="from-currency-select">
                
            </select>
        
       
           
        </div>
        <button id="convert-button">Convert</button>
        <p id="result"></p>
    </div>

</div>
  )
}

export default App

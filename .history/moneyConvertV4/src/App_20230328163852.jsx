import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>

    <div className="wrapper">
        <div className="app-details">
            <img src="../" className="app-icon" />
            <h1 className="app-title">currency converter</h1>

        </div>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" value="100" />
       
 

        <div class="dropdowns">
            <select id="from-currency-select"></select>
            <select id="to-currency-select"></select>
        </div>

        <button id="convert-button">Convert</button>
        <p id="result"></p>
    </div>

</div>
  )
}

export default App

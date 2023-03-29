import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let convertCurrency = () => {
    //Create References
    
    alert('Working ')
    const amount = document.querySelector('#amount').value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
    // If amounth input field is not empty
    if (amount.length != 0) {
        fetch(api).then(resp => resp.json())
            .then((data) => {
                console.log(data);
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = ` ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert('Please fill in the amounth')
    }
};

  return (
    <div>
      <div className="wrapper">
        <div className="app-details">
          <img src="https://github.com/MatteoSuarez/money-exchange_v3/blob/main/src/ressources/icon.png?raw=true" className="app-icon" />
          <h1 className="app-title">currency converter</h1>
        </div>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" value="100" />
        {}
        <div class="dropdowns">
          <select id="from-currency-select"></select>
          <select id="to-currency-select"></select>
        </div>
        <button id="convert-button" onClick={()=>{convertCurrency()}}>Convert</button>
        <p id="result"></p>
      </div>

    </div>
  )
}

export default App

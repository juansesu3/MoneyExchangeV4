import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const currencies = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ]


  const fromDropDown = document.getElementById('from-currency-select');
  const toDropDown = document.getElementById('to-currency-select')
/*
  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    //fromDropDown.add(option);
  });

  // Repeate same thing ffor the other dropdown

  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    //toDropDown.add(option);
  });
*/





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
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value="100" />
      
        <div className="dropdowns">
          {
            currencies.map((currency) => {
              console.log(currency)
              toDropDown.add(option);
             
              //option.value = currency;
              //option.text = currency;     
            })
          }
          
          <select id="from-currency-select"></select>
            <select id="to-currency-select"></select>
        </div>
        <button id="convert-button" onClick={() => { convertCurrency() }}>Convert</button>
        <p id="result"></p>
      </div>

    </div>
  )
}

export default App

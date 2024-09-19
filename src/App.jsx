import { useState , useEffect } from 'react'
import InputBox from './Components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [ amount , setAmount ] =useState(0)
  const [ convertedAmount , setConvertedAmount ] =useState(0)
  const [ fromCurrency , setFromCurrency] = useState("usd")
  const [ toCurrency , setToCurrency] = useState("inr")

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options =  Object.keys(currencyInfo)
  console.log(options)
   
  const swap = ()=>{
    setAmount(convertedAmount),
    setConvertedAmount(amount),
    setFromCurrency(toCurrency),
    setToCurrency(fromCurrency)
  }

  const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[toCurrency])
  }
  return (
    <>
    <div>
      <InputBox 
      label="from"
      amount={amount}
      currencyOptions={options}
      onAmountChange={(e)=>{setAmount(e.target.value)}}
      currentCurrency={fromCurrency}
      onCurrencyChange={(currency)=>setFromCurrency(currency)}

      />
    </div>

    <div>
      <button onClick={swap}>Swap</button>
    </div>

    <div className=' border-light-50 bg-light-100'>
      <InputBox 
      label="To"
      amount={convertedAmount}
      currencyOptions={options}
      onChangeAmount={(e)=>{setConvertedAmount(e.target.value)}}
      currentCurrency={toCurrency}
      onCurrencyChange={(currency)=>setToCurrency(currency)}

      disableInput={true}
      />
    </div>

    <button onClick={convert}> Convert {fromCurrency} to {toCurrency}</button>

    
    </>
  )
}

export default App

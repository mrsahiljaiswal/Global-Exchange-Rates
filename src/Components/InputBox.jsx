import React,{useId} from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    currentCurrency,
    onCurrencyChange,
    currencyOptions=[],
    disableInput=false
}) => {

    const uid=useId();

  return (
    <div>
        <label htmlFor={uid}>{label}</label>

        <input 
        type="number" 
        id={uid}
        placeholder='Amount' 
        value={amount} 
        onChange={onAmountChange} 
        disabled={disableInput}
        />
        <p>Curreny Type</p>
        <select name="Currency Type" id="" onChange={(e)=>onCurrencyChange(e.target.value)} value={currentCurrency}>

            {currencyOptions.map((currency,index)=>{
                return (
                    <option key={index} value={currency}>{currency}</option>
                )
            })}

        </select>
    </div>
  )
}

export default InputBox
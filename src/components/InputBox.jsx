import React from 'react'

function InputBox({
 //hear we are taking some input to handle the values:
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
}){
  return (
    <>
    <label className='flex justify-center font-bold text-amber-200 me-10'>{label}</label>
        <div className="flex items-center justify-between gap-2 mb-4">
          <input
            disabled={amountDisable}//its chack any value is already present or not in input field
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            type="number"
            placeholder="0"
            className="flex-1 p-3 rounded-xl border border-gray-300 bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select 
          className="p-3 rounded-xl border border-gray-300 bg-white/80 text-gray-900 focus:outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyOption.map((currency)=>(
              <option
              value={currency}
              key={currency}
              >{currency}</option>
            ))}
          </select>
        </div>
        </>
  )
}


export default InputBox

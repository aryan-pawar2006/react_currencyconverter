import { useState } from 'react';
import { InputBox } from './components/Input';
import useCurrencyInfo from './customehooks/usecurrencyinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0)
  const [from ,setFrom]=useState("USD")
  const [to ,setTo]=useState("INR")
  const [convertedAmount,setConvertedAmount]=useState(0)

  //now calling the custome hook:
  const currencyInfo=useCurrencyInfo(from)
  //by calling this hook we get data object but we want keys from it 
  const options=Object.keys(currencyInfo)

  const Swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //now make the function for convert:
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
    return(
    <div className=" flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-indigo-900">
    <div className='fexed'>
      <h2 className='font-bold text-3xl text-white mb-5'>currency converter</h2>  
       <div className='w-100 h-80 bg-blue-900 items-center content-center rounded-2xl'> 
        {/* From Section */}
        
          <InputBox
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(val) => setAmount(val)}
            selectCurrency={from}
          />
        

        {/* Swap Button */}
        <div className="flex justify-center mb-4">
          <button 
          onClick={Swap}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
            Swap
          </button>
        </div>

        {/* To Section */}
          <InputBox
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        

        {/* Convert Button */}
        <button
        onClick={convert} 
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
          Convert {from} to {to}
        </button>
      </div>
      </div>
      </div>
    
    
  )
}

export default App

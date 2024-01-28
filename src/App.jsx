import { useState } from 'react';
import './App.css'
//if you write onClick(f()) then it is wrong cos it will executed as soon as it runs 
//so instead write onClick(f) then it will get executed only when clicked on
function App() {
  
  const [value1,setvalue1]=useState("");
  const [value2,setvalue2]=useState("");
  const [result,setresult]=useState("");

   const handleValue1Change = (e) => {
    setvalue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setvalue2(e.target.value);
  };

  const add =() =>{
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    setresult(num1+num2);
    
  }
  const subtract=() =>{
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    setresult(num1-num2);
  }
  return (
    <>
 <div className="container mx-auto my-8 p-8 bg-gray-100 border border-gray-300 rounded">
      <h1 className="text-2xl font-bold mb-4">CALCULATOR</h1>

      <div className="mb-4">
        <label className="block">
          Type the first number
          <input
            className="border border-gray-300 px-2 py-1 rounded"
            type="text"
            value={value1}
            onChange={handleValue1Change}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          Type the second number
          <input
            className="border border-gray-300 px-2 py-1 rounded"
            type="text"
            value={value2}
            onChange={handleValue2Change}
          />
        </label>
      </div>

      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={add}
        >
          ADD
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={subtract}
        >
          SUBTRACT
        </button>
      </div>

      <h2 className="text-xl font-bold">Result: {result}</h2>
    </div>

    </>
  )
}

export default App


import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

const VALUES ={
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5 ,
  duration: 12
}

function App() {

  const [values, setValues] = useState(VALUES);
  const inputIsValid = values.duration >=1;


  function handleValueChange(keyName,newValue){
    console.log(keyName);
    console.log(newValue);
    setValues(prevValues =>{
      return{
        ...prevValues,
        [keyName]: +newValue
      };  
    });    

  }
  return (
    <>
    <Header />
    <section id="user-input">
    <div className="input-group">
      <Input initialName="15000" label="INITIAL INVESTMENT" keyName="initialInvestment" onChangeName={handleValueChange} value={values.initialInvestment} />
      <Input initialName="900" label="ANNUAL INVESTMENT" keyName="annualInvestment" onChangeName={handleValueChange} value={values.annualInvestment}/>
    </div>
    <div className="input-group">
      <Input initialName="5.5" label="EXPECTED RETURN" keyName="expectedReturn" onChangeName={handleValueChange} value={values.expectedReturn}/>
      <Input initialName="12" label="DURATION"  keyName="duration" onChangeName={handleValueChange} value={values.duration}/>
    </div>  
    </section>
    
    {!inputIsValid && <p className="center">Please Enter a duration grater than zero.</p>}
    {inputIsValid &&
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
        <Result input={values}/>
    </table> }       
    </>
  );
}

export default App

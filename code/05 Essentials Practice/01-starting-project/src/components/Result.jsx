import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({input}){
  console.log(input);
  let result = calculateInvestmentResults(input);
  const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
   
  return(
  <tbody>
  {result.map((yearData) => {
    const totalInterest =
      yearData.valueEndOfYear -
      yearData.annualInvestment * yearData.year -
      initialInvestment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  })}
  </tbody>  
  );

}


// export default function Result({result}){
//   return (
//     result.map( (row) => 
//     (<tr key={row.year}> 
//       <td>{row.year}</td>
//       <td>{formatter.format(row.annualInvestment)}</td>
//       <td>{formatter.format(row.interest)}</td>
//       <td>{formatter.format(row.valueEndOfYear)}</td>
//       {/* <td>{formatter.format(row.investedCapital)}</td> */}
//     </tr>
//     )
//   ));
// }


{/* <th>Year</th>
<th>Investment Value</th>
<th>Interest(Year)</th>
<th>Total Interest</th>
<th>Invested Capital</th> */}
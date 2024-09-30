import Input from "./Components/Input"
import WrapperInput from "./Components/WrapperInput"
import Table from "./Components/Table"
import { calculateInvestmentResults } from './util/investment.js'
import { useState } from "react"

function App() {
  const [invest, setInvest] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })

  const investmentResult = calculateInvestmentResults(invest)

  function handelInputInvest(type, value) {
    switch (type) {
      case "init":
        setInvest((prevInvest) => {
          return { ...prevInvest, initialInvestment: Number(value) }
        })
        break;
      case "annual":
        setInvest((prevInvest) => {
          return { ...prevInvest, annualInvestment: Number(value) }
        })
        break;
      case "expected":
        setInvest((prevInvest) => {
          return { ...prevInvest, expectedReturn: Number(value) }
        })
        break;
      case "duration":
        setInvest((prevInvest) => {
          return { ...prevInvest, duration: Number(value) }
        })
        break;
      default:
        break;
    }

  }

  return (
    <>
      <div id="user-input">
        <WrapperInput>
          <Input label="INITIAL INVESTEMNT" type="init" investValue={invest.initialInvestment} handleInput={handelInputInvest} />
          <Input label="ANNUAL INVESTEMNT" type="annual" investValue={invest.annualInvestment} handleInput={handelInputInvest} />
        </WrapperInput>

        <WrapperInput>
          <Input label="EXPECTED RETURN" type="expected" investValue={invest.expectedReturn} handleInput={handelInputInvest} />
          <Input label="DURATION" type="duration" investValue={invest.duration} handleInput={handelInputInvest} />
        </WrapperInput>
      </div>

      <Table investmentResult={investmentResult} />
    </>
  )
}

export default App

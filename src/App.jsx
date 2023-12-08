
import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material'
function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [validPrinciple, setValidPrinciple] = useState(true)
  const [validRate, setValidRate] = useState(true)
  const [validYear, setValidYear] = useState(true)
  console.log(principle);
  const validateUserInputs = (e) => {
    const { name, value } = e.target
    // console.log(`${name},${typeof value}`);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+/)) {
      // valid
      if (name === 'principle') {
        setPrinciple(value)
        setValidPrinciple(true)
      } else if (name === 'rate') {
        setRate(value)
        setValidRate(true)
      } else {
        setYear(value)
        setValidYear(true)
      }
    } else {

      // invalid 
      if (name === 'principle') {
        setPrinciple(value)
        setValidPrinciple(false)
      } else if (name === 'rate') {
        setRate(value)
        setValidRate(false)
      } else {
        setYear(value)
        setValidYear(false)
      }
    }
  }

  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidYear(true)
  }

const handleCalculate = (e)=>{
  e.preventDefault()
  console.log("inside calculate ");
  if(!principle || !rate ||!year){
    alert("please fill the form completely")
  }else{
    setInterest(principle*rate*year/100)
  }
}

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark' >
      <div style={{ width: '660px' }} className='bg-light p-5 rounded' >
        <h1>Simple Interest Calculator</h1>
        <p>calculate your Simple Interest easily</p>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ principle amount" variant='outlined' name='principle' value={principle || ""} onChange={e => validateUserInputs(e)}></TextField>
          </div>
          {!validPrinciple && <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>}
          <form className='mt-5' onSubmit={handleCalculate}>
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic-principle" label="Rate of interest (%)" variant='outlined' name='rate' value={rate || ""} onChange={e => validateUserInputs(e)}></TextField>
            </div>
            {!validRate && <div className="mb-3 text-danger fw-bolder"> Invalid Rate</div>}
            <form className='mt-5' onSubmit={handleCalculate}>
              <div className='mb-3'>
                <TextField className='w-100' id="outlined-basic-principle" label="Time period (yr)" variant='outlined' name='year' value={year || ""} onChange={e => validateUserInputs(e)}></TextField>
              </div>
              {!validYear && <div className="mb-3 text-danger fw-bolder">Invalid Year</div>}
              <Stack direction="row" spacing={2}>
                <Button onClick={handleCalculate} type='submit' style={{ height: "70px", width: "50%" }} className='bg-dark' variant="contained"
                disabled ={validPrinciple&&validRate&&validYear?false:true} >Calculate</Button>
                <Button onClick={handleReset} type='submit' style={{ height: "70px", width: "50%" }} className='text-dark' variant="contained">Reset</Button>

              </Stack>
            </form>
          </form>
          <div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default App
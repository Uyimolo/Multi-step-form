import { useEffect, useState } from 'react'

import './App.css'
import StepSelector from './components/StepSelector'
import StepsContainer from './components/StepsContainer'

function App() {
  const [stepCount, setStepCount] = useState(1);
  const [subDuration, setSubDuration] = useState('monthly')

  useEffect(() => {
    console.log(stepCount) //testing if state is been updated
  },[stepCount])

  return (
     <div className="app">
      <StepSelector stepCount={stepCount} setStepCount={setStepCount} />
      <StepsContainer stepCount={stepCount} setStepCount={setStepCount} subDuration={subDuration} setSubDuration={setSubDuration}  />
     </div>
  )
}

export default App

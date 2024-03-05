import { useEffect, useState } from 'react'

import './App.css'
import StepSelector from './components/StepSelector'
import StepsContainer from './components/StepsContainer'

function App() {
  const [stepCount, setStepCount] = useState(1)

  useEffect(() => {
    console.log(stepCount) //testing if state is been updated
  },[stepCount])

  return (
     <div className="app">
      <StepSelector setStepCount={setStepCount} />
      <StepsContainer stepCount={stepCount} setStepCount={setStepCount}  />
     </div>
  )
}

export default App

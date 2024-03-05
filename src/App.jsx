// import { useState } from 'react'

import './App.css'
import StepSelector from './components/StepSelector'
import StepsContainer from './components/StepsContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <div className="app">
      <StepSelector />
      <StepsContainer />
     </div>
  )
}

export default App

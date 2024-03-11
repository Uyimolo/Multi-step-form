import { useEffect, useState } from 'react';

import './App.css';
import StepSelector from './components/StepSelector';
import StepsContainer from './components/StepsContainer';

function App() {
  const [stepCount, setStepCount] = useState(1);
  const [subDuration, setSubDuration] = useState('monthly');

  const [stepValidationState, setStepValidationState] = useState([
    { step: 'Personal info', isValidated: false },
    { step: 'Select your plan', isValidated: false },
    { step: 'Pick add-ons', isValidated: false },
  ]);

  return (
    <div className='app'>
      <StepSelector
        stepCount={stepCount}
        setStepCount={setStepCount}
        stepValidationState={stepValidationState}
      />
      <StepsContainer
        stepCount={stepCount}
        setStepCount={setStepCount}
        subDuration={subDuration}
        setSubDuration={setSubDuration}
        stepValidationState={stepValidationState}
        setStepValidationState={setStepValidationState}
      />
    </div>
  );
}

export default App;

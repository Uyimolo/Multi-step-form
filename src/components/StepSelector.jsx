/* eslint-disable react/prop-types */

import { useEffect } from 'react';

const StepSelector = ({ stepCount, setStepCount, stepValidationState }) => {
  const stepArray = [
    { count: 1, title: 'YOUR INFO' },
    { count: 2, title: 'SELECT PLAN' },
    { count: 3, title: 'ADD-ONS' },
    { count: 4, title: 'SUMMARY' },
  ];

  useEffect(() => {
    console.log(stepCount, stepValidationState);
  }, [stepValidationState]);

  const handleStepNavigation = (count) => {
    const index = count === 1 ? 0 : count - 2;

    if (stepValidationState[index].isValidated) {
      setStepCount(count);
    } else {
      alert('Please fill in or select relevant info'); //placeholder, will create custom ui to show errors
    }
  };

  return (
    <div className='step-selectors-container'>
      <div className='step-selectors'>
        {stepArray.map((step) => (
          <div
            className='step-selector'
            key={step.count}
            onClick={() => handleStepNavigation(step.count)}>
            <div
              className={`step-number ${
                stepCount === step.count && 'step-number-active'
              }`}>
              {step.count}
            </div>
            <div className='step-selector-text'>
              <p className='step-number'>STEP {step.count}</p>
              <p className='step-title'>{step.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSelector;

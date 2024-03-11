/* eslint-disable react/prop-types */

import { useEffect } from 'react';

const StepSelector = ({ stepCount, setStepCount, stepValidationState }) => {
  const stepArray = [
    {
      count: 1,
      title: 'YOUR INFO',
    },
    {
      count: 2,
      title: 'SELECT PLAN',
    },
    {
      count: 3,
      title: 'ADD-ONS',
    },
    {
      count: 4,
      title: 'SUMMARY',
    },
  ];

  useEffect(() => {
    console.log(stepCount, stepValidationState);
  }, [stepValidationState]);

  const handleStepNavigation = (count) => {
   
  };

  return (
    <div className='step-selectors-container'>
      <div className='step-selectors'>
        {stepArray.map((step) => (
          <div
            className='step-selector'
            key={step.count}
            onClick={() => handleStepNavigation(step)}>
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

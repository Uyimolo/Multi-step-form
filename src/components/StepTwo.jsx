/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import StepNavButtons from './StepNavButtons';

const StepTwo = ({
  subDuration,
  setSubDuration,
  handleSubDataUpdate,
  subData,
  handleStepValidationState,
  handleStepNavigation,
  stepCount,
}) => {
  // life of the components UI
  const planData = [
    { plan: 'Arcade', icon: arcadeIcon, amount: 9 },
    { plan: 'Advanced', icon: advancedIcon, amount: 12 },
    { plan: 'Pro', icon: proIcon, amount: 15 },
  ];

  // sets duration of subscription, useful in 3rd and 4th components
  const handleSubDuration = () => {
    subDuration === 'monthly'
      ? setSubDuration('yearly')
      : setSubDuration('monthly');
  };

  // set plan in subData
  const handlePlanUpdate = (plan, amount) => {
    handleSubDataUpdate('Select your plan', 'plan', plan);
    handleSubDataUpdate('Select your plan', 'amount', amount);
  };

  useEffect(() => {
    handleValidation();
  }, [subData]);

  const handleValidation = () => {
    const validationResult = subData[1].plan ? true : false;
    handleStepValidationState(1, validationResult);
  };

  return (
    <div className='step'>
      <div className='step-info'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className='step-two-form step-form'>
        {planData.map((plan) => (
          <div
            className={`plan ${
              subData[1].plan === plan.plan ? 'plan-active' : ''
            }`}
            key={plan.plan}
            onClick={() => handlePlanUpdate(plan.plan, plan.amount)}>
            <img src={plan.icon} alt='' className='plan-icon' />
            <div className='plan-text'>
              <h2 className='plan-title'>{plan.plan}</h2>
              <p className='plan-amount small-text'>{`$${
                subDuration === 'monthly' ? plan.amount : plan.amount * 10
              }/${subDuration === 'monthly' ? 'mo' : 'yr'}`}</p>
              {subDuration === 'yearly' && (
                <p className='discount small-text'>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='month-year'>
        <p
          className={` small-text ${
            subDuration === 'monthly' ? 'monthly-plan-active' : ''
          }`}>
          Monthly
        </p>
        <div className='month-year-toggler' onClick={handleSubDuration}>
          <div
            className={`month-year-indicator ${
              subDuration === 'yearly' && 'sub-duration-yearly'
            }`}></div>
        </div>
        <p
          className={`${subDuration === 'yearly' ? 'yearly-plan-active' : ''}`}>
          Yearly
        </p>
      </div>
      <div className='large-screen-step-buttons'>
        <StepNavButtons
          stepCount={stepCount}
          handleStepNavigation={handleStepNavigation}
        />
      </div>
    </div>
  );
};

export default StepTwo;

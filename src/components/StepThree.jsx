/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import checkMark from '../assets/images/icon-checkmark.svg';
import StepNavButtons from './StepNavButtons';

const StepThree = ({
  subDuration,
  handleAddOnUpdate,
  subData,
  handleStepValidationState,
  handleStepNavigation,
  stepCount,
}) => {
  // life of component UI
  const addOnsData = [
    {
      subDatapointer: 'onlineService',
      name: 'Online service',
      description: 'Access to multiplayer games',
      amount: 1,
    },
    {
      subDatapointer: 'largerStorage',
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      amount: 2,
    },
    {
      subDatapointer: 'customizableProfile',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      amount: 2,
    },
  ];

  useEffect(() => {
    handleValidation();
  }, [subData]);

  const handleValidation = () => {
    const validationResult =
      subData[2].pickAddons.onlineService.isActive ||
      subData[2].pickAddons.largerStorage.isActive ||
      subData[2].pickAddons.customizableProfile.isActive;

    handleStepValidationState(2, validationResult);
  };

  return (
    <div className='step'>
      <div className='step-info'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className='step-three-form step-form'>
        {addOnsData.map((addOn) => (
          <div
            className={`add-on ${
              subData[2].pickAddons[addOn.subDatapointer].isActive
                ? 'add-on-active'
                : ''
            } `}
            key={addOn.name}
            onClick={() =>
              handleAddOnUpdate('Pick add-ons', addOn.subDatapointer)
            }>
            <div
              className={`pseudo-checkbox ${
                subData[2].pickAddons[addOn.subDatapointer].isActive &&
                'check-mark-active'
              }`}>
              {subData[2].pickAddons[addOn.subDatapointer].isActive && (
                <img src={checkMark} alt='check mark' className='check-mark' />
              )}
            </div>
            <div className='add-on-text'>
              <h2 className='plan-title small-text'>{addOn.name}</h2>
              <p className='add-on-description smaller-text'>
                {addOn.description}
              </p>
            </div>
            <p className='add-on-amount smaller-text'>{`+$${
              subDuration === 'monthly'
                ? `${addOn.amount}/mo`
                : `${addOn.amount * 10}/yr`
            }`}</p>
          </div>
        ))}
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

export default StepThree;

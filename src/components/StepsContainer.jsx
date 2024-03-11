/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const StepsContainer = ({
  stepCount,
  setStepCount,
  subDuration,
  setSubDuration,
  stepValidationState,
  setStepValidationState,
}) => {
  const initialState = [
    {
      step: 'Personal info',
      name: '',
      email: '',
      phone: '',
      isValidated: false,
    },
    {
      step: 'Select your plan',
      plan: '',
      amount: '',
      isValidated: false,
    },
    {
      step: 'Pick add-ons',
      pickAddons: {
        onlineService: { isActive: false, name: 'Online service', amount: 1 },
        largerStorage: { isActive: false, name: 'Larger storage', amount: 2 },
        customizableProfile: {
          isActive: false,
          name: 'Customizable profile',
          amount: 1,
        },
      },
      isValidated: false,
    },

    // TODO: add more objects as i build more steps
  ];

  const handleStepValidationState = (index, validationResult) => {
    setStepValidationState((prevState) =>
      prevState.map((step, i) =>
        i === index ? { ...step, isValidated: validationResult } : step
      )
    );
  };

  const reducer = (state, action) => {
    const updatedStepIndex = state.findIndex(
      (step) => step.step === action.step
    );
    switch (action.type) {
      case 'UPDATE_SUBDATA':
        return [
          ...state.slice(0, updatedStepIndex),
          { ...state[updatedStepIndex], [action.field]: action.value },
          ...state.slice(updatedStepIndex + 1),
          // state.map(obj => obj.step === action.step ? {...obj, [action.field] : action.value } : obj)
        ];
      case 'UPDATE_ADDON':
        const updatedPickAddons = { ...state[updatedStepIndex].pickAddons }; // Create a copy of pickAddons object
        updatedPickAddons[action.field] = {
          ...state[updatedStepIndex].pickAddons[action.field],
          isActive: !state[updatedStepIndex].pickAddons[action.field].isActive, // Toggle isActive
        };

        return [
          ...state.slice(0, updatedStepIndex),
          { ...state[updatedStepIndex], pickAddons: updatedPickAddons },
          ...state.slice(updatedStepIndex + 1),
        ];
      default:
        return state;
    }
  };

  const [subData, dispatch] = useReducer(reducer, initialState);

  const handleSubDataUpdate = (step, field, value) => {
    dispatch({ type: 'UPDATE_SUBDATA', step, field, value });
  };

  const handleAddOnUpdate = (step, field) => {
    dispatch({ type: 'UPDATE_ADDON', step, field });
  };

  const handleStepNavigation = (type) => {
    if (type === 'previous' && stepCount !== 1) setStepCount(prevStepCount => prevStepCount - 1);
    else if (
      type === 'next' &&
      stepValidationState[stepCount - 1].isValidated === true &&
      stepCount < 4
    ) {
      setStepCount((prevStepCount) => prevStepCount + 1);
      console.log(subData);
    } 
    else {
      return;
    }
  };

  return (
    <div className='steps-container'>
      <div className='step-container'>
        {stepCount === 1 && (
          <StepOne
            handleSubDataUpdate={handleSubDataUpdate}
            subData={subData}
            handleStepValidationState={handleStepValidationState}
          />
        )}

        {stepCount === 2 && (
          <StepTwo
            subData={subData}
            subDuration={subDuration}
            setSubDuration={setSubDuration}
            handleSubDataUpdate={handleSubDataUpdate}
            handleStepValidationState={handleStepValidationState}
          />
        )}

        {stepCount === 3 && (
          <StepThree
            subDuration={subDuration}
            handleSubDataUpdate={handleSubDataUpdate}
            handleAddOnUpdate={handleAddOnUpdate}
            subData={subData}
            handleStepValidationState={handleStepValidationState}
          />
        )}

        {stepCount === 4 && (
          <StepFour
            subData={subData}
            subDuration={subDuration}
            setStepCount={setStepCount}
          />
        )}
      </div>

      <div className='next-prev-btns-container'>
        {stepCount < 2 ? (
          <div></div>
        ) : (
          <button
            className='previous-btn btn'
            onClick={() => handleStepNavigation('previous')}>
            Go Back
          </button>
        )}
        <button
          className='next-btn btn'
          onClick={() => handleStepNavigation('next')}>
          {stepCount < 4 ? 'Next step' : 'Confirm'}
        </button>
      </div>
    </div>
  );
};

export default StepsContainer;

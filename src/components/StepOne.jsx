/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import checkmarkIcon from '../assets/images/icon-checkmark.svg';

const StepOne = ({
  handleSubDataUpdate,
  subData,
  handleStepValidationState,
}) => {
  const [inputData, setInputData] = useState([
    {
      label: 'Name',
      id: 'name',
      placeholder: 'e.g Stephen King',
      regex: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
    },
    {
      label: 'Email',
      id: 'email',
      placeholder: 'e.g stephenKing@lorem.com',
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    {
      label: 'Phone Number',
      id: 'phone',
      placeholder: 'e.g +1 234 567 890',
      regex: /^(\+\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/,
    },
  ]);

  const [validationState, setValidationState] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    handleValidation();
  }, [subData]);

  useEffect(() => {
    // console.log(validationState, stepValidationState);
    const allStepsValid =
      validationState.name && validationState.email && validationState.phone;
    handleStepValidationState(0, allStepsValid);
  }, [validationState]);

  const handleValidation = () => {
    inputData.forEach((input) => {
      const { id, regex } = input;
      const value = subData[0][id];
      const validationResult = regex.test(value.trim());

      setValidationState((prevState) => ({
        ...prevState,
        [id]: validationResult,
      }));
    });
  };

  return (
    <div className='step'>
      <div className='step-info'>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form action='' className='step-one-form step-form'>
        {inputData.map((input) => (
          <div className='form-group' key={input.id}>
            <div className='error-message smaller-text'>
              {subData[0][input.id].length > 0 && !validationState[input.id]
                ? `Please input a valid ${input.label}`
                : ''}
            </div>
            {validationState[input.id] && (
              <div className='validated'>
                <img src={checkmarkIcon} alt='' />
              </div>
            )}
            <label htmlFor={input.id}>{input.label}</label>
            <input
              type='text'
              id={input.id}
              placeholder={input.placeholder}
              value={subData[0][input.id]}
              className={`${
                subData[0][input.id] && !validationState[input.id]
                  ? 'error'
                  : ''
              }`}
              onChange={(e) =>
                handleSubDataUpdate('Personal info', input.id, e.target.value)
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default StepOne;

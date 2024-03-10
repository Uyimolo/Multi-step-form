/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import checkmarkIcon from '../assets/images/icon-checkmark.svg';

const StepOne = ({ handleSubDataUpdate, subData }) => {
  const [inputData, setInputData] = useState([
    {
      label: 'Name',
      id: 'name',
      placeholder: 'e.g Stephen King',
      regex: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
      errorMessage: '',
    },
    {
      label: 'Email',
      id: 'email',
      placeholder: 'e.g stephenKing@lorem.com',
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: '',
    },
    {
      label: 'Phone Number',
      id: 'phone',
      placeholder: 'e.g +1 234 567 890',
      regex: /^(\+\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/,
      errorMessage: '',
    },
  ]);

  const [validationState, setValidationState] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    initialValidation();
  }, []);

  const initialValidation = () => {
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

  const handleValidation = (inputId, value, label) => {
    const index = inputData.findIndex((input) => input.id === inputId);
    const validationResult = inputData[index].regex.test(value.trim());

    setInputData((prevInput) =>
      prevInput.map((input, i) =>
        i === index
          ? {
              ...input,
              errorMessage: `${
                validationResult
                  ? ''
                  : `Please enter a valid ${label.toLowerCase()}`
              }`,
            }
          : input
      )
    );

    setValidationState((prevState) => ({
      ...prevState,
      [inputId]: validationResult,
    }));

    // Update isValidated for the entire step
    const allInputsValid =
      validationResult &&
      validationState.name &&
      validationState.email &&
      validationState.phone;
    handleSubDataUpdate('Personal info', 'isValidated', allInputsValid);

    // Display error message based on validation result
    console.log(
      validationResult
        ? `true ${((validationResult, validationState[inputId]), inputId)}`
        : `Error: Invalid ${inputId}`
    );

    console.log(validationState);
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
              {input.errorMessage}
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
              onInput={(e) =>
                handleValidation(input.id, e.target.value, input.label)
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default StepOne;

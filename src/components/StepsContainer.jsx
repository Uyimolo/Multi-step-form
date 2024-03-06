import { useEffect, useReducer} from "react"
import StepOne from "./StepOne"

const StepsContainer = () => {

  const initialState = [
  {
    step: 'Personal info',
    name: '',
    email: '',
    phone: '',
  },
  {
    step: 'select plan',
    plan: '',
    duration: '',
  },
  
  // TODO: add more objects as i build more steps
  ];
  
  useEffect(() => {
    console.log(subData)
  })
  
  const reducer = (state, action) => {
    let updatedStepIndex;
  switch (action.type) {
    case 'UPDATE_SUBDATA':
      updatedStepIndex = state.findIndex(step => step.step === action.step);
      return [
        ...state.slice(0, updatedStepIndex),
        { ...state[updatedStepIndex], [action.field]: action.value },
        ...state.slice(updatedStepIndex + 1),
      ];
    default:
      return state;
  }
};



  const [subData, dispatch] = useReducer(reducer, initialState)

  const handleSubDataUpdate = (step, field, value) => {
    dispatch({ type: 'UPDATE_SUBDATA', step, field, value })
  }

  return (
    <div className="steps-container">

      <div className="step-container">
      <StepOne handleSubDataUpdate={handleSubDataUpdate} />
      </div>

      <div className="next-prev-btns-container">
      <button className="previous-btn btn">Go Back</button>
      <button className="next-btn btn">Next Step</button>
       
      </div>
    </div>
  )
}

export default StepsContainer

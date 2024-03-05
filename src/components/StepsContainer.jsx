import StepOne from "./StepOne"

const StepsContainer = () => {
  return (
    <div className="steps-container">

      <div className="step-container">
      <StepOne />
      </div>

      <div className="next-prev-btns-container">
      <button className="previous-btn btn">Go Back</button>
      <button className="next-btn btn">Next Step</button>
       
      </div>
    </div>
  )
}

export default StepsContainer

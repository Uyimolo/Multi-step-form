/* eslint-disable react/prop-types */
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'


const StepTwo = ({subDuration, setSubDuration, handleSubDataUpdate}) => {

    const planData = [
        { plan: 'Arcade', icon: arcadeIcon, amount: 9, },
        { plan: 'Advanced', icon: advancedIcon, amount: 12, },
        { plan: 'Pro', icon: proIcon, amount: 15, },
    ]

    const handleSubDuration = () => {
        subDuration === 'monthly' ? setSubDuration("yearly") : setSubDuration('monthly')
    }

    const handlePlanUpdate = (plan, amount) => {
         const subAmount = subDuration === 'monthly' ? amount : (amount * 10);
        handleSubDataUpdate('Select plan', 'plan', plan)
        handleSubDataUpdate('Select plan', 'duration', subDuration)
        handleSubDataUpdate('Select plan', 'amount', subAmount)
    }

  return (
    <div className="step">
      <div className="step-info">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
          </div>
          
          <div className="step-two-form step-form">
              {planData.map(plan => (
                  <div className="plan" key={plan.plan}
                      onClick={ ()=> handlePlanUpdate(plan.plan, plan.amount)}
                  >
                  <img src={plan.icon} alt="" className="plan-icon" />
                  <div className="plan-text">
                          <h2 className="plan-title">{plan.plan}</h2>
                          <p className="plan-amount">{`$${subDuration === 'monthly' ? plan.amount : plan.amount * 10}/${subDuration === 'monthly' ? 'mo' : 'yr'}`}</p>
                  </div>
              </div>
              ))}
          </div>
          <div className="month-year">
              <p>Monthly</p>
              <div className="month-year-toggler" onClick={handleSubDuration}>
                  <div className={`month-year-indicator ${subDuration === 'yearly' && "sub-duration-yearly"}`} ></div>
              </div>
              <p>Yearly</p>
          </div>
    </div>
  )
}

export default StepTwo

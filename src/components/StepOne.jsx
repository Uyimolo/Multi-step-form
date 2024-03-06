/* eslint-disable react/prop-types */

const StepOne = ({handleSubDataUpdate}) => {

  const inputData = [
    { label: 'Name', id: 'name', placeholder: 'e.g Stephen King' },
    { label: 'Email', id: 'email', placeholder: 'e.g stephenKing@lorem.com' },
    { label: 'Phone Number', id: 'phone', placeholder: 'e.g +1 234 567 890' },
  ]


  return (
    <div className="step">
      <div className="step-info">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form action="" className="step-one-form step-form">
        {inputData.map(input => (
          <div className="form-group" key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        <input type="text" id={input.id} placeholder={input.placeholder} onChange={(e) => handleSubDataUpdate('Personal info',input.id, e.target.value )} />
    </div>
        ))}

        
        
        
      </form>
    </div>
  )
}

export default StepOne

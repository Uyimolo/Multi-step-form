
const StepOne = () => {
  return (
    <div className="step">
      <div className="step-info">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form action="" className="step-one-form step-form">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="e.g. stephenking@lorem.com"/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </div>
  )
}

export default StepOne

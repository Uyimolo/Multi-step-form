/* eslint-disable react/prop-types */


const StepOneInput = ({label,id,placeholder}) => {
  return (
    <div className="form-group">
        <label htmlFor="name">{label}</label>
        <input type="text" id={id} placeholder={placeholder} />
    </div>
  )
}

export default StepOneInput

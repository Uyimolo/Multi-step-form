
const ErrorAlert = ({errorMsg, setErrorMsg}) => {
  return (
    <div className="error-alert small-text">
      <p>{errorMsg}</p>
      <div className="error-alert-timer"></div>
    </div>
  )
}

export default ErrorAlert

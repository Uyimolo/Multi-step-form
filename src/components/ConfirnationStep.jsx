import thankYouIcon from '../assets/images/icon-thank-you.svg'
const ConfirnationStep = () => {
  return (
    <div className='step step-five'>
      <div className="confirmation-icon">
        <img src={thankYouIcon} alt="confirmed" className='thank-you-icon' />
      </div>
      <div className="thank-you-text">
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please fell free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}

export default ConfirnationStep

const StepNavButtons = ({ stepCount, handleStepNavigation }) => {
  return (
    // hide previous button if stepCount is 1
    <div className='next-prev-btns-container'>
      {stepCount < 2 ? (
        <div></div>
      ) : (
        <button
          className='previous-btn btn'
          onClick={() => handleStepNavigation('previous')}>
          Go Back
        </button>
      )}
      <button
        className={`next-btn btn ${stepCount < 4 ? '' : 'btn-comfirm'}`}
        onClick={() => handleStepNavigation('next')}>
        {stepCount < 4 ? 'Next step' : 'Confirm'}
      </button>
    </div>
  );
};

export default StepNavButtons;

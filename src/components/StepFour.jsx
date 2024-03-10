const StepFour = ({ subData, subDuration, setStepCount }) => {
  const planAmount = `$${
    subDuration === 'monthly'
      ? `${subData[1].amount}/mo`
      : `${subData[1].amount * 10}/yr`
  }`;

  let totalAmount;

  const calculatedTotalAmount = () => {
    const selectedPlanAmount = subData[1].amount || 0;

    const activeAddonAmounts = Object.values(subData[2].pickAddons)
      .filter((addon) => addon.isActive)
      .reduce((total, addon) => total + addon.amount, 0);

    subDuration === 'monthly'
      ? (totalAmount = `+$${selectedPlanAmount + activeAddonAmounts}/mo`)
      : (totalAmount = `+$${
          (selectedPlanAmount + activeAddonAmounts) * 10
        }/yr`);
  };

  calculatedTotalAmount();

  const addOns = subData[2].pickAddons;

  return (
    <div className='step'>
      <div className='step-info'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='step-four-form step-form'>
        <div className='selected-plan'>
          <div>
            <h2 className='selected-plan-details'>{`${subData[1].plan} (${
              subDuration === 'monthly' ? 'Monthly' : 'Yearly'
            })`}</h2>
            <p className="small-text" onClick={() => setStepCount(2)}>Change</p>
          </div>
          <h2>{planAmount}</h2>
        </div>
        <div className='selected-addons'>
          {Object.keys(addOns).map((addonKey) => (
            <div className='selected-addon' key={addonKey}>
              {addOns[addonKey].isActive && (
                <p className='small-text'>{addOns[addonKey].name}</p>
              )}
              {addOns[addonKey].isActive && (
                <p className='selected-addon-amount small-text'>
                  {`+$${
                    subDuration === 'monthly'
                      ? `${addOns[addonKey].amount}/mo`
                      : `${addOns[addonKey].amount * 10}/yr`
                  }`}{' '}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='total-amount small-text'>
        <p className="total-text small-text">{`Total (per ${subDuration === 'monthly' ? 'month' : 'year'})`}</p>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
};

export default StepFour;

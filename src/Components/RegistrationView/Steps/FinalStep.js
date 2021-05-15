import React, { useEffect, useState } from 'react';
import Button from '../../Button/Button';

function FinalStep({ goToLogin }) {
    const [counter, setCounter] = useState(5);

    const counterSetUp = () => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
          counter === 0 && goToLogin();
        return () => clearInterval(timer);
      };
    
      // useEffect(counterSetUp, [counter, goToLogin]);

  return (
    <div className='registration__container__form registration__container__form--rounded'>
        <p>Your accout has been registered.</p> 
        <p>You will be automaticaly 
          redirected to Login in: <span className={'registration__container__form__counter'}>{counter}</span></p> 
        <p>or</p>
        <Button text='Sign in' size='small' color='lightcollar' onClick={() => goToLogin()}/>
    </div>
  );
}

export default FinalStep;
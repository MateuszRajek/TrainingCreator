import React, { useState } from 'react';
import Button from '../Button/Button';
import './RegistrationView.sass';
import Password from './Steps/Password';
import PersonalData from './Steps/PersonalData';


function RegistrationView() {
const [registrationData, setRegData] = useState({})
const [registrationStep, setRegStep] = useState(1)
const errorMessage = 'This field is required';

const changeStep = () => {
  registrationStep === 1 ? setRegStep(2) : setRegStep(1)
}

const onSubmit = data => {
  let formData = registrationData
  formData = {...formData, ...data}

  setRegData(formData)
  changeStep()
console.log(formData)
}

  return (
    <>
    <section className='registration__container'>
        {registrationStep === 1 && 
          <PersonalData 
            onClick={changeStep} 
            onSubmit={onSubmit} 
            errorMessage={errorMessage} 
          />}
        {registrationStep === 2 && 
          <Password 
            onClick={changeStep} 
            onSubmit={onSubmit}
            errorMessage={errorMessage} 
          />}
        <div className='registration__form__login'>
          <p>Already have an account?</p>
          <Button text='Sign in' size='small' color='lightcollar' />
        </div>
    </section>
      
    </>
  );
}

export default RegistrationView;

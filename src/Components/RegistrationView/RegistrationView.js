import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import Password from './Steps/Password';
import PersonalData from './Steps/PersonalData';
import './_RegistrationView.sass';


function RegistrationView() {
const [registrationData, setRegData] = useState({})
const [registrationStep, setRegStep] = useState(1)
const errorMessage = 'This field is required'

const changeStep = () => {
  registrationStep === 1 ? setRegStep(2) : setRegStep(1)
}

const onSubmit = data => {
  let formData = registrationData
  formData = {...formData, ...data}

  setRegData(formData)
  changeStep()
}

const history = useHistory()

const goToLogin = () => {
  history.push('/login')
}

  return (
    <>
    <section className='registration__container'>
        {registrationStep === 1 && 
          <PersonalData 
            onClick={changeStep} 
            onSubmit={onSubmit} 
            errorMessage={errorMessage} 
            formData={registrationData}
          />}
        {registrationStep === 2 && 
          <Password 
            onClick={changeStep} 
            onSubmit={onSubmit}
            errorMessage={errorMessage} 
            formData={registrationData}
          />}
        <div className='registration__form__login'>
          <p>Already have an account?</p>
          <Button text='Sign in' size='small' color='lightcollar' onClick={() => goToLogin()}/>
        </div>
    </section>
      
    </>
  );
}

export default RegistrationView;

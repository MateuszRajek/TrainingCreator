import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import FinalStep from './Steps/FinalStep';
import Password from './Steps/Password';
import PersonalData from './Steps/PersonalData';
import './_RegistrationView.sass';


function RegistrationView() {
const [registrationData, setRegData] = useState({})
const [registrationStep, setRegStep] = useState(3)
const errorMessage = 'This field is required'

const nextStep = () => {
  registrationStep === 1 ? setRegStep(2) : setRegStep(3)
}

const prevStep = (data) => {
  registrationStep === 2 ? setRegStep(1) : setRegStep(1)
  let formData = registrationData
  formData = {...formData, ...data}

  setRegData(formData)
}

const onSubmit = data => {
  let formData = registrationData
  formData = {...formData, ...data}

  setRegData(formData)
  nextStep()
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
            onSubmit={onSubmit} 
            errorMessage={errorMessage} 
            formData={registrationData}
          />}
        {registrationStep === 2 && 
          <Password
            onClick={() => prevStep()}
            onSubmit={onSubmit}
            errorMessage={errorMessage} 
            formData={registrationData}
          />}
        {registrationStep !== 3 && <div className='registration__form__login'>
          <p>Already have an account?</p>
          <Button text='Sign in' size='small' color='lightcollar' onClick={() => goToLogin()}/>
        </div>}
      {registrationStep === 3 && <FinalStep goToLogin={goToLogin}/>}
    </section>
      
    </>
  );
}

export default RegistrationView;

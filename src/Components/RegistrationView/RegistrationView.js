import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './RegistrationView.sass';
import Password from './Steps/Password';
import PersonalData from './Steps/PersonalData';


function RegistrationView() {
const { register, handleSubmit } = useForm()
const [registrationData, setRegData] = useState({})
const [registrationStep, setRegStep] = useState(1)

const onSubmit = data => {
  let formData = registrationData
  formData = {...formData, ...data}

  setRegData(formData)
console.log(formData)
}

  return (
    <>
    <section className='registration__container'>
        <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='registration__form__title'>Create an account</h1>
          {registrationStep === 1 && <PersonalData register={register}/>}
          {registrationStep === 2 && <Password register={register} />}
          <button type='submit'>Click</button>
        </form>
    </section>
      
    </>
  );
}

export default RegistrationView;

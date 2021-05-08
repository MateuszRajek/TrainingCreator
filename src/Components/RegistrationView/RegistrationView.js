import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input/Input';
import './RegistrationView.sass';
import person from '../../assets/person.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'

function RegistrationView() {
const { register, handleSubmit } = useForm()
const [registrationData, setRegData] = useState({})

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
          <Input className='registration__form__input' register={register} text='First Name' id='firstName' icon={person}/>
          <Input className='registration__form__input' register={register} text='Last Name' id='lastName' icon={person}/>
          <Input className='registration__form__input' register={register} text='Email' id='email' icon={email} />
          <Input className='registration__form__input' register={register} text='Phone Number' id='phone' icon={phone} />
          <button type='submit'>Click</button>
        </form>
    </section>
      
    </>
  );
}

export default RegistrationView;

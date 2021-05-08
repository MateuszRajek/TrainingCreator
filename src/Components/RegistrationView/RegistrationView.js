import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input/Input';
import './RegistrationView.sass';

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
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} placeholder='First Name' label='firstName' />
        <Input register={register} placeholder='Last Name' label='lastName' />
        <Input register={register} placeholder='Email' label='email' />
        <Input register={register} placeholder='Phone Number' label='phone' />
        
        <button type='submit'>Click</button>
      </form>
    </>
  );
}

export default RegistrationView;

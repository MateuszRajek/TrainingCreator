import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input/Input';
import './RegistrationView.sass';

function RegistrationView() {
const { register, handleSubmit } = useForm()

const onSubmit = data => {
console.log(data)
}

  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id='' type='text' hooksprop={{...register('firstName', {required: true, minLength: 2})}} placeholder='First Name' />
        <Input id='' type='text' hooksprop={{...register('lastName', {required: true, minLength: 2})}} placeholder='Last Name' />
      </form>
    </>
  );
}

export default RegistrationView;

import React from 'react';
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import phone from '../../../assets/phone.png'
import Input from '../../Input/Input';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';

function PersonalData({ onSubmit, errorMessage }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <>
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='registration__form__title'>Create an account</h1>
        <Input 
          className='registration__form__input' 
          register={register('firstName', {required: true, minLength: {value: 2, message: errorMessage}})} 
          text='First Name' id='firstName' icon={person} 
        />
        {errors.firstName && errors.firstName.type === 'required' && 
        <p className='registration__form__error-message'>"First name is required"</p>}
        {errors.firstName && errors.firstName.type === 'minLength' && 
        <p className='registration__form__error-message'>"First name requires at least 2 characters"</p>}
        <Input 
          className='registration__form__input' 
          register={register('lastName', {required: true, minLength: {value: 2, message: 'errorMessage'}})} 
          text='Last Name' id='lastName' icon={person} 
        />
        {errors.lastName && errors.lastName.type === 'required' && 
        <p className='registration__form__error-message'>"First name is required"</p>}
        {errors.lastName && errors.lastName.type === 'minLength' && 
        <p className='registration__form__error-message'>"First name requires at least 2 characters"</p>}
        <Input className='registration__form__input' register={register('email', {minLength: {value: 2, message: 'errorMessage'}})} text='Email' id='email' icon={email} />
        <Input className='registration__form__input' register={register('phone', {minLength: {value: 2, message: 'errorMessage'}})} text='Phone Number' id='phone' icon={phone} />
        <div className='registration__form__buttons'>
          <Button text='Next' size='small' color='aquamarine' />
        </div>
      </form>
    </>
  );
}

export default PersonalData;

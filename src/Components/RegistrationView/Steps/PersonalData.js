import React from 'react';
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import phone from '../../../assets/phone.png'
import Input from '../../Input/Input';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';

function PersonalData({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <>
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='registration__form__title'>Create an account</h1>
        <Input 
          className='registration__form__input' 
          register={register('firstName', {required: true, minLength: 2})} 
          text='First Name' 
          id='firstName' 
          type='text'
          icon={person} 
        />
        {errors.firstName && errors.firstName.type === 'required' && 
        <p className='registration__form__error-message'>First Name is required</p>}
        {errors.firstName && errors.firstName.type === 'minLength' && 
        <p className='registration__form__error-message'>First Name requires at least 2 characters</p>}
        <Input 
          className='registration__form__input' 
          register={register('lastName', {required: true, minLength: 2})} 
          text='Last Name' 
          id='lastName' 
          type='text'
          icon={person} 
        />
        {errors.lastName && errors.lastName.type === 'required' && 
        <p className='registration__form__error-message'>Last Name is required</p>}
        {errors.lastName && errors.lastName.type === 'minLength' && 
        <p className='registration__form__error-message'>Last Name requires at least 2 characters</p>}
        <Input 
          className='registration__form__input' 
          register={register('email', {required: true, pattern: /^[\w-a\\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} 
          text='Email' 
          id='email' 
          type='email' 
          icon={email} 
        />
        {errors.email && errors.email.type === 'required' && 
        <p className='registration__form__error-message'>Email is required</p>}
        {errors.email && errors.email.type === 'pattern' && 
        <p className='registration__form__error-message'>Invalid email format</p>}
        <Input 
          className='registration__form__input' 
          register={register('phone', {required: true, minLength: 6})} 
          text='Phone Number' 
          id='phone' 
          type='phone'
          icon={phone} 
        />
        <div className='registration__form__buttons'>
          <Button text='Next' size='small' color='aquamarine' />
        </div>
      </form>
    </>
  );
}

export default PersonalData;

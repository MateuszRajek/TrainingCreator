import React from 'react';
import Input from '../../Input/Input';
import lock from '../../../assets/lock.png';
import person from '../../../assets/person.png'
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';

function Password({ onSubmit }) {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='registration__form__title'>Create an account</h1>
        <Input 
          className='registration__form__input' 
          register={register('userName', {minLength: 2})}  
          text='User Name' 
          id='userName' 
          type='text'
          icon={person} 
        />
        <Input 
          className='registration__form__input' 
          register={register('password', {minLength: 2})}  
          text='Password' 
          id='password' 
          type='password'
          icon={lock} 
          autocomplete='new-password' 
        />
        <Input 
          className='registration__form__input' 
          register={register('passwordRep', {minLength: {value: 2}})} 
          text='Repeat Password' 
          id='passwordRep' 
          type='password' 
          icon={lock} 
          autocomplete='new-password' 
        />
        <div className='registration__form__buttons'>
          <Button text='Prev' size='small' color='aquamarine' />
          <Button text='Register' size='medium' color='steelblue' />
        </div>
      </form>
    </>
  );
}

export default Password;

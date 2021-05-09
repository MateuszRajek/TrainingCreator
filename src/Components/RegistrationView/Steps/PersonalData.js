import React from 'react';
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import phone from '../../../assets/phone.png'
import Input from '../../Input/Input';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';

function PersonalData({ onSubmit }) {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='registration__form__title'>Create an account</h1>
        <Input className='registration__form__input' register={register} text='First Name' id='firstName' icon={person} />
        <Input className='registration__form__input' register={register} text='Last Name' id='lastName' icon={person} />
        <Input className='registration__form__input' register={register} text='Email' id='email' icon={email} />
        <Input className='registration__form__input' register={register} text='Phone Number' id='phone' icon={phone} />
        <div className='registration__form__buttons'>
          <Button text='Next' size='small' color='aquamarine' />
        </div>
      </form>
    </>
  );
}

export default PersonalData;

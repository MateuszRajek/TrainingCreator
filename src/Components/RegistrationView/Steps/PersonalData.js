import React from 'react';
import person from '../../../assets/person.png'
import email from '../../../assets/email.png'
import phone from '../../../assets/phone.png'
import Input from '../../Input/Input';

function PersonalData({register}) {
  return (
    <>
      <Input className='registration__form__input' register={register} text='First Name' id='firstName' icon={person}/>
      <Input className='registration__form__input' register={register} text='Last Name' id='lastName' icon={person}/>
      <Input className='registration__form__input' register={register} text='Email' id='email' icon={email} />
      <Input className='registration__form__input' register={register} text='Phone Number' id='phone' icon={phone} />
    </>
  );
}

export default PersonalData;

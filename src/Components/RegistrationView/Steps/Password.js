import React from 'react';
import Input from '../../Input/Input';
import lock from '../../../assets/lock.png'

function Password({register}) {
  return (
    <>
      <Input className='registration__form__input' register={register} type='password' text='Password' id='password' icon={lock}/>
      <Input className='registration__form__input' register={register} type='password' text='Repeat Password' id='passwordRep' icon={lock}/>
    </>
  );
}

export default Password;

import React from 'react';
import Input from '../../Input/Input';
import lock from '../../../assets/lock.png';
import person from '../../../assets/person.png'
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';

function Password({ onSubmit, formData, callbackFn }) {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  return (
    <>
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='registration__form__title'>Create an account</h1>
        <Input 
          className='registration__form__input' 
          register={register('userName', {required: true, minLength: 4})}  
          text='User Name' 
          id='userName' 
          type='text'
          icon={person} 
          value={formData.userName}
        />
        {errors.userName && errors.userName.type === 'required' && 
        <p className='registration__form__error-message'>User Name is required</p>}
        {errors.userName && errors.userName.type === 'minLength' && 
        <p className='registration__form__error-message'>User Name requires at least 4 characters</p>}
        <Input 
          className='registration__form__input' 
          register={register('password', {required: true, minLength: 8, 
            validate: value => [/[a-z]/, /[A-Z]/, /[0-9]/].every(pattern => pattern.test(value))})}  
          text='Password' 
          id='password' 
          type='password'
          icon={lock} 
          autocomplete='new-password' 
          value={formData.password}
        />
         {errors.password && errors.password.type === 'required' && 
        <p className='registration__form__error-message'>Password is required</p>}
        {errors.password && errors.password.type === 'minLength' && 
        <p className='registration__form__error-message'>Password requires at least 8 characters</p>}
        {errors.password && errors.password.type === 'validate' && 
        <p className='registration__form__error-message'>Password must includes min 8 signs, at least one big letter and one number</p>}
        <Input 
          className='registration__form__input' 
          register={register('passwordRep', {required: true, minLength: 8,
            validate: value => {
              if (value === getValues().password) {
                return true;
              }
              return false;
            }})} 
          text='Repeat Password' 
          id='passwordRep' 
          type='password' 
          icon={lock} 
          autocomplete='new-password' 
          value={formData.passwordRep}
        />
        {errors.passwordRep && errors.passwordRep.type === 'required' && 
        <p className='registration__form__error-message'>Password is required</p>}
        {errors.passwordRep && errors.passwordRep.type === 'minLength' && 
        <p className='registration__form__error-message'>Password requires at least 8 characters</p>}
        {errors.passwordRep && errors.passwordRep.type === 'validate' && 
        <p className='registration__form__error-message'>Password does't match</p>}
        <div className='registration__form__buttons'>
          <Button text='Prev' size='small' type='button' color='aquamarine' callbackFn={callbackFn} />
          <Button text='Register' size='medium' color='steelblue' />
        </div>
      </form>
    </>
  );
}

export default Password;

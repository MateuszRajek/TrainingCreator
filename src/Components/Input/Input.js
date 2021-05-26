import React, { useState } from 'react';
import eye from '../../assets/eye.png';
import eyeInvisible from '../../assets/eye-invisible.png';
import './_Input.sass';

function Input({ id, type, register, text, className, icon, autocomplete, value }) {
  const [inputValue] = useState(value)
  const [isVisible, setVisibility] = useState(false)
  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = () => {
    setVisibility(!isVisible)
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <div className='input__wrapper'>
        {icon && <div className='input__icon'><img src={icon} alt={`${id}-icon`}/></div>}
        <input 
          {...{ id, type: 'password' ? inputType : type, placeholder:text, ...register, className: `input ${className}`, 
          autoComplete: autocomplete ? autocomplete : null, value:inputValue }} 
        />
        {isVisible && type === 'password' && <div onClick={() => togglePasswordVisibility()} className='password-visibility__input__icon'><img src={eye} alt={`${id}-icon`}/></div>}
        {!isVisible && type === 'password' && <div onClick={() => togglePasswordVisibility()} className='password-visibility__input__icon'><img src={eyeInvisible} alt={`${id}-icon`}/></div>}
      </div>
    </>
  );
}

export default Input;

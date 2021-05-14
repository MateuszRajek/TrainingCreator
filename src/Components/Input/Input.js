import React, { useState } from 'react';
import './_Input.sass';

function Input({ id, type, register, text, className, icon, autocomplete, value }) {
  const [inputValue] = useState(value)

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <div className='input__wrapper'>
        {icon && <div className='input__icon'><img src={icon} alt={`${id}-icon`}/></div>}
        <input 
          {...{ id, type, placeholder:text, ...register, className: `input ${className}`, 
          autoComplete: autocomplete ? autocomplete : null, value:inputValue }} 
        />
      </div>
      
    </>
  );
}

export default Input;

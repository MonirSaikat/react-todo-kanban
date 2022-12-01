import React from 'react';
import 'assets/Input.scss';

const Input = ({
  ...rest
}) => {
  return (
    <input className='form-control input' {...rest} />
  );
}

export default Input;

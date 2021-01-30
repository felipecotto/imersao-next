import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  height: 48px;
  border-radius: 8px; 
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,.16); 
  padding: 0 12px;
  display: block;
  width: 100%;
  margin-bottom: 24px;
`;

const LabelInput = styled.label`
    font-size: 16px; 
    display: block;
    margin-bottom: 16px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <LabelInput>Digite seu nome e comece a jogar</LabelInput>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

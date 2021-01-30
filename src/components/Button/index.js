import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  height: 48px;
  border-radius: 8px; 
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,.16); 
  padding: 0 12px;
  background-color: #EE4844; 
  color: #fff;
  display: block;
  width: 100%;
  font-size: 16px; 
  text-transform: uppercase; 
  font-weight: bold;
  letter-spacing: .5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

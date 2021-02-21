import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  padding: 20px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    display: block;
    width: 120px;
    height: auto;
    margin-right: 32px;
  }
  a {
    color: #414040;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
      display: block; 
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <div>
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://hipsters.jobs/files/pictures/alura-dark-300.png" alt="Logo Alura" />
        </a>
        <p>
          Orgulhosamente criado durante
          {' '}
          a
          {' '}
          <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
            <span>Imersão React da Alura</span>
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
}

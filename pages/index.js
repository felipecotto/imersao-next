import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 8px; 
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,.16); 
  padding: 0 12px;
  display: block;
  width: 100%;
  margin-bottom: 24px;
`;

export const Button = styled.button`
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
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Sneakerhead Quiz - Imersão React Alura</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Sneakers Quiz</h1>
            <p>Você conhece todas as girias do universo Sneakerhead?</p>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Enviando via React');
            }}
            >
              <Input
                placeholder="Diz ai seu nome"
                onChange={function(e) {
                  setName(e.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Quiz da Galera 01</h2>
          </Widget.Header>
          <Widget.Content>
           
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/felipecotto" />
    </QuizBackground>
  );
}

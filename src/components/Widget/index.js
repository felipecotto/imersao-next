import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px; 
  margin-bottom: 24px; 
  /* border: 1px solid ${({ theme }) => theme.colors.success};;  */
  /* background-color: ${({ theme }) => theme.colors.wrong};  */
  /* border-radius: 4px;  */
  overflow: hidden; 
  background: rgba(255,255,255,0.8);
    border-radius: 8px;
    padding: 32px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 16px;
    font-family: 'Coda Caption', sans-serif;
  }
  h2 {
    font-size: 24px; 
    margin-bottom: 0;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #3e3e3e;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  padding: 18px 32px;
  text-align: right;

  h3 {
    font-size: 16px;
    background-color: #EE4844;
    display: inline-block;
    padding: 12px 24px;
    border-radius: 49px;
    color: #fff;
  }
  
  * {
    margin: 0;
  }
`;

Widget.Title = styled.h1`
  font-size: 48px;
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  color: #301f52;
  background-color: #e2aaec40;
  box-shadow: 2px 0 8px rgb(0 0 0 / 20%);
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;

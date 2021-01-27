import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px; 
  margin-bottom: 24px; 
  /* border: 1px solid ${({ theme }) => theme.colors.success};;  */
  /* background-color: ${({ theme }) => theme.colors.wrong};  */
  /* border-radius: 4px;  */
  overflow: hidden; 
  h1, h3 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  h2 {
    font-size: 24px; 
    margin-bottom: 0;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    color: ${({ theme }) => theme.colors.bg};
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
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  padding: 18px 32px;
  /* background-color: ${({ theme }) => theme.colors.success}; */
  
  * {
    margin: 0;
  }
`;

export default Widget;

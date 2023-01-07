import styled from '@emotion/styled';

export const Frame = styled.div`
  background: linear-gradient(0deg, #f1c8c1 0%, #98bcf9 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
`;
export const MainProfile = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid #eeeeee;
  margin-bottom: 30px;
`;
export const MainTitle = styled.div`
  color: #ffffff;
  font-size: 52px;
  font-weight: 600;
  text-align: center;
`;
export const AboutMe = styled.div`
  width: 250px;
  text-align: center;
  background-color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  color: #ff6863;
  padding: 10px;
  margin-top: 70px;
  :hover {
    color: #98bcf9;
    cursor: pointer;
    transition: all 300ms ease;
  }
`;

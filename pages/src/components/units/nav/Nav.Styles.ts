import styled from '@emotion/styled';

// Nav Bar
export const Navbar = styled.div`
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
export const Logo = styled.div`
  margin: 50px 0 100px 0;
  font-size: 35px;
  color: #98bcf9;
  :hover {
    color: #ff6863;
    transition: all 300ms ease-in;
    cursor: pointer;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Chivo Mono', monospace;
  font-size: 20px;
  font-weight: 500;
`;
export const Menuitem = styled.div`
  cursor: pointer;
  margin: 15px 0;
  color: #616161;
  :hover {
    color: #ff6863;
    transition: all 300ms ease-in;
  }
`;
export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22px;
  color: #616161;
  position: absolute;
  bottom: 30px;
  a {
    margin: 0 15px;
    cursor: pointer;
  }
  .Github,
  .Blog {
    :hover {
      color: #ff8a80;
      transition: all 300ms ease-in;
      transform: scale(1.3);
    }
  }
`;
export const Copyright = styled.span`
  font-size: 12px;
  color: #616161;
  position: absolute;
  bottom: 10px;
  cursor: default;
  :after {
    content: ' ♥️';
    color: #ff8a80;
  }
  :hover {
    color: #98bcf9;
  }
`;

import styled from 'styled-components';

export const LogoWarp = styled.div`
    display: flex;
    flex-direction: row;
    p{
        color: red;
        font-family: cursive;
    }
`;

function Logo() {
  return (
    <LogoWarp>
      <i></i>
      <p>y2mate.com</p>
    </LogoWarp>
  )
}

export default Logo

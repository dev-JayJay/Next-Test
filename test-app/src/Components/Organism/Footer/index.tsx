import styled from 'styled-components';

export const Footerwrapper = styled.div`
text-align: center;
p{
    color: #000;
}
span{
    color: #ff0000;
}
`;

function Footer() {

  return (
    <Footerwrapper>
      <p>By using our service you are accepting our <span>Terms of use</span></p>
    </Footerwrapper>
  )
}

export default Footer

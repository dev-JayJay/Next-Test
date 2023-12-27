import styled from 'styled-components';

export const Wrapper = styled.div`
p{
    text-align: center;
}
div{
    background-color: #ff0000;
    height: 3rem;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
}
input{
    width: 80%;
    height: 25px;
    margin: 10px;
    padding: 10px;
    border: 1px soild black;
}
`;

function LandingPage() {
  return (
    <div>
    <Wrapper >
      <p>DOWNLOAD VIDEO AND AUDIO FROM YOUTUBE</p>
      <div>
        <input 
        type="text"
        placeholder="Search Or Paste Links here..."
        />
        <span>Enter</span>
      </div>
    </Wrapper>
    </div>
  )
}

export default LandingPage;

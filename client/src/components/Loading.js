import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <Background>
      <img src="/img/loading.gif" alt="loading"></img>
    </Background>
  );
}

export default Loading;

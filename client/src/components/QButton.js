import { Button } from '@mui/material';
import styled from 'styled-components';

//* 질문하기 버튼 -> Ask 페이지로 이동
const Container = styled.div`
  button {
    background-color: #0b95ff;
    color: white;
    font-size: 12px;
    padding: 10px;
  }
`;
function QButton() {
  return (
    <Container>
      <Button>Ask Question</Button>
    </Container>
  );
}

export default QButton;

import styled from 'styled-components';

const Content = styled.div`
  display: inline-block;
  width: 99%;
  height: 70px;
  margin-bottom: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  white-space: normal;
  line-height: 1.4;
  height: 5.6em;
  color: #3b4045;
  text-align: left;
  word-wrap: break-word; // 단어 단위로 줄바꿈
  display: -webkit-box; // 유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
  -webkit-line-clamp: 4; // 보여줄 줄 수
  -webkit-box-orient: vertical; // 플렉스 박스의 방향 설정(가로)
`;

export default function TagContent({ data }) {
  return (
    <>
      {data?.map((el, idx) => (
        <Content key={idx}>{el.text}</Content>
      ))}
    </>
  );
}

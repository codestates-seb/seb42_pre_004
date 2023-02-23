import styled from 'styled-components';

// const TagContents = styled.li`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 177px;
//   padding: 13px;
//   border: 1px solid #d6d9dc;
//   border-radius: 3px;
// `;
const Tag = styled.button`
  display: inline-block;
  width: min-content;
  padding: 6px 6px;
  margin: 0 6px 13px 0;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #39739d;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
  }
`;

export default function Tagtitle({ data }) {
  return (
    <>
      {/* <TagContents> */}
      {data?.map((el) => (
        <Tag key={el.id}>{el.title}</Tag>
      ))}
      {/* </TagContents> */}
    </>
  );
}

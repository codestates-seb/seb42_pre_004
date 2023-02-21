import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #d6d9dc;
  margin-left: -24px;
`;

const QStatus = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  width: 108px;
  align-items: flex-end;
  margin-right: 16px;
  gap: 6px;
  div {
    font-size: 13px;
  }
`;

const QContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
  .TopQues-title__h3 {
    font-weight: 400;
    vertical-align: text-top;
    margin: 0;
    a {
      color: hsl(206, 100%, 40%, 1);
      :hover {
        color: hsl(206, 100%, 52%, 1);
      }
    }
  }
`;
const QInfo = styled.div`
  display: flex;
  justify-content: space-between;
  .TopQues-user__img {
    width: 20px;
    height: 20px;
    border-radius: 3px;
  }
  .TopQues-taglist__ul {
    a {
      background-color: #e1ecf4;
      padding: 3px;
      border-radius: 5px;
      color: #39739d;
      font-size: 12px;
      :hover {
        background-color: #d0e3f1;
        color: #2c5877;
      }
    }
  }
`;

const UserInfoWrap = styled.div`
  display: flex;
  font-size: 12px;
  .topques-username__a {
    color: #39739d;
    :hover {
      color: #2c5877;
    }
  }
`;

function TopQList() {
  const url = '/';
  return (
    <Container>
      <QStatus>
        <div>
          <span>0</span>
          <span>votes</span>
        </div>
        <div>
          <span>0</span>
          <span>answers</span>
        </div>
        <div>
          <span>0</span>
          <span>views</span>
        </div>
      </QStatus>
      <QContent>
        <h3 className="TopQues-title__h3">
          <a href="/">
            title title title title title title title title title title title
            title
          </a>
        </h3>
        <QInfo>
          <div>
            <ul className="TopQues-taglist__ul">
              <li>
                {/* tag 링크 */}
                <a href={`${url}`}>태그명</a>
              </li>
            </ul>
          </div>
          <UserInfoWrap>
            <div>
              {/* 유저프로필 링크 */}
              <a href={`${url}`}>
                <img
                  className="TopQues-user__img"
                  src="/img/user.png"
                  alt="userprofile"
                ></img>
              </a>
            </div>
            <div>
              {/* 유저프로필 링크 */}
              <a className="topques-username__a" href={`${url}`}>
                username
              </a>{' '}
            </div>
            <div>answer count</div>
            <div>asked 00 ago</div>
          </UserInfoWrap>
        </QInfo>
      </QContent>
    </Container>
  );
}

export default TopQList;

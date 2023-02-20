import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  width: 100%;
  height: 100vh;
`;

const SignUpContents = styled.div`
  display: flex;
  align-items: center;
  .signup-division__div {
    margin: 15px;
  }
  .signup-infosection__div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .signup-info__icon {
    color: #0995ff;
    margin-right: 5px;
  }
  .signup-infobottom__div {
    font-size: 13px;
  }
  .signup-form__div {
    padding: 24px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  }
  .signup-input__div {
    display: flex;
    flex-direction: column;
    width: 256px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .signup-input__input {
    margin-top: 10px;
    height: 33px;
    font-size: 15px;
    padding-left: 10px;
  }
  .signup-incorrect__div {
    color: red;
    font-size: 14px;
    height: 14px;
    padding: 3px;
  }
  .signup-correct__div {
    visibility: hidden;
    height: 14px;
  }
  .signup-button__div {
    display: flex;
    justify-content: center;
  }
  .signup-already__div {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
  h1 {
    font-size: 27px;
  }
  input {
    border-radius: 3px;
    border: 1px solid #89afd4;
  }
  label {
    font-weight: 600;
    font-size: 15px;
  }
  p {
    font-size: 12px;
  }
  span {
    font-size: 13px;
  }
  a {
    color: #0995ff;
    font-size: 13px;
    margin-left: 7px;
  }
`;

const SignUpButton = styled.button`
  background-color: #0995ff;
  width: 268px;
  height: 38px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  color: white;
  :hover {
    background-color: #0074cc;
  }
  :active {
    background-color: #0162bf;
  }
`;

function SignUpForm() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const emailCheck = (email) => {
    let regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return email != '' && email != 'undefined' && regex.test(email);
  };

  const signUpButtonHandler = () => {
    if (
      inputName.length < 4 ||
      !emailCheck(inputEmail) ||
      inputPassword.length < 8
    ) {
      return setIsError(true);
    }
  };
  return (
    <Container>
      <SignUpContents>
        <div className="signup-division__div">
          <h1>Join the Stack Overflow community</h1>
          <div className="signup-infosection__div">
            <SvgIcon
              className="signup-info__icon"
              component={QuestionAnswerIcon}
            />
            <div>Get unstuck — ask a question</div>
          </div>
          <div className="signup-infosection__div">
            <SvgIcon
              className="signup-info__icon"
              component={ThumbsUpDownIcon}
            />
            <div>Unlock new privileges like voting and commenting</div>
          </div>
          <div className="signup-infosection__div">
            <SvgIcon className="signup-info__icon" component={LocalOfferIcon} />
            <div>Save your favorite tags, filters, and jobs</div>
          </div>
          <div className="signup-infosection__div">
            <SvgIcon
              className="signup-info__icon"
              component={EmojiEventsIcon}
            />
            <div>Earn reputation and badges</div>
          </div>
          <div className="signup-infobottom__div">
            Collaborate and share knowledge with a private group for FREE.
          </div>
          <div className="signup-infobottom__div">
            Get Stack Overflow for Teams free for up to 50 users.
          </div>
        </div>
        <div className="signup-division__div">
          <div className="signup-form__div">
            <div className="signup-input__div">
              <label htmlFor="inputDisplayName">Display name</label>
              <input
                className="signup-input__input"
                type="text"
                id="inputDisplayName"
                onChange={(e) => setInputName(e.target.value)}
              ></input>
              <div
                className={
                  isError && inputName.length < 4
                    ? 'signup-incorrect__div'
                    : 'signup-correct__div'
                }
              >
                닉네임은 4글자 이상 입력하세요.
              </div>
            </div>
            <div className="signup-input__div">
              <label htmlFor="inputEmail">Email</label>
              <input
                className="signup-input__input"
                type="text"
                id="inputEmail"
                onChange={(e) => setInputEmail(e.target.value)}
              ></input>
              <div
                className={
                  isError && !emailCheck(inputEmail)
                    ? 'signup-incorrect__div'
                    : 'signup-correct__div'
                }
              >
                올바른 이메일 형식이 아닙니다.
              </div>
            </div>
            <div className="signup-input__div">
              <label htmlFor="inputPassword">password</label>
              <input
                className="signup-input__input"
                type="password"
                id="inputPassword"
                onChange={(e) => setInputPassword(e.target.value)}
              ></input>
              <div
                className={
                  isError && inputPassword.length < 8
                    ? 'signup-incorrect__div'
                    : 'signup-correct__div'
                }
              >
                패스워드는 8글자 이상 입력하세요.
              </div>
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            </div>
            <div className="signup-button__div">
              <SignUpButton onClick={signUpButtonHandler}>Sign up</SignUpButton>
            </div>
          </div>
          <div>
            <div className="signup-already__div">
              <span>Already have an account?</span>
              <a href="/login">Log in</a>
            </div>
          </div>
        </div>
      </SignUpContents>
    </Container>
  );
}

export default SignUpForm;

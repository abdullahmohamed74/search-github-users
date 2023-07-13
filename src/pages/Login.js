import { styled } from 'styled-components';
import loginImg from '../utils/images/login-img.svg';
import UseUserContext from '../hooks/UseUserContext';

function Login() {
  const { loginWithRedirect } = UseUserContext();

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="login" />
        <h1>github user</h1>
        <button onClick={loginWithRedirect} className="btn">
          log in / sign up
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;

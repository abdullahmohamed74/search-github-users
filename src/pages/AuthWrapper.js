import { styled } from 'styled-components';
import UseUserContext from '../hooks/UseUserContext';
import loadingImg from '../utils/images/preloader.gif';

function AuthWrapper({ children }) {
  const { error, isLoading } = UseUserContext();

  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingImg} alt="loading" />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  return children;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;

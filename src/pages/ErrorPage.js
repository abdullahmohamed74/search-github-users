import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function ErrorPage() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--clr-primary-10);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10rem;
  }

  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;

export default ErrorPage;

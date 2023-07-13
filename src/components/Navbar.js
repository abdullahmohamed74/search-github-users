import { styled } from 'styled-components';
import UseUserContext from '../hooks/UseUserContext';

function Navbar() {
  const { myUser, logout } = UseUserContext();
  return (
    <Wrapper>
      <div className="section-center">
        {myUser && <img src={myUser.picture} alt="user" />}
        {myUser && (
          <h4>
            welcome, <strong> {myUser.name} </strong>
          </h4>
        )}
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            logout
          </button>

        {/* {myUser ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>login</button>
        )} */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);

  div {
    /* text-align: center; */
    display: grid;
    grid-template-columns: auto auto 100px;
    align-items: center;
    justify-content: center;
    gap: 1.5rem; 
  }

  p {
    margin-bottom: 0;
  }

  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }

  img {
    width: 35px ;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;

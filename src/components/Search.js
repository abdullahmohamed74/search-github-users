import { styled } from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import useGlobalContext from './../hooks/useGlobalContext';

function Search() {
  const [user, setUser] = useState('');

  const { remainingRequests, error, fetchGithubUser, isLoading } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    fetchGithubUser(user);
  };

  return (
    <Wrapper className="section section-center">
      {error && (
        <ErrorWrapper>
          <p>{error}</p>
        </ErrorWrapper>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <MdSearch />
          <input
            type="text"
            placeholder="Entre Github User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {/* if there are NO remaining requests ==> hide the button */}
          {remainingRequests && (
            <button disabled={isLoading} type="submit">
              {isLoading ? 'searching...' : 'search'}
            </button>
          )}
        </div>
      </form>
      <h3>Requests: {remainingRequests} / 60</h3>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 0;
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 1rem 1.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }

  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }

    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }

    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }

    input,
    button,
    svg {
      font-size: 1.3rem;
    }

    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;

  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;

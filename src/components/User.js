import { styled } from 'styled-components';
import UserCard from './UserCard';
import Followers from './Followers';

function User() {
  return (
    <Wrapper className="section section-center">
      <UserCard />
      <Followers />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 4rem;
  display: grid;
  gap: 3rem 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User;

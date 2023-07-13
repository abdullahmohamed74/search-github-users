import useGlobalContext from '../hooks/useGlobalContext';

import { GoRepo } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { styled } from 'styled-components';
import UserInfoItem from './UserInfoItem';

function UserInfo() {
  const { githubUser } = useGlobalContext();

  const { public_repos, public_gists, followers, following } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <LuArrowRightLeft className="icon" />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <Wrapper className="section section-center">
      {items.map((item) => {
        return <UserInfoItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

export default UserInfo;

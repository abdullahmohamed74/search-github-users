import { Navbar, Repos, Search, User, UserInfo } from '../components';
import useGlobalContext from '../hooks/useGlobalContext';
import loadingImg from '../utils/images/preloader.gif';

function Dashboard() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} alt="loading" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
}
export default Dashboard;

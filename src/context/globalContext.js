import { createContext, useCallback, useEffect, useState } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

const GlobalContext = createContext();
const baseUrl = 'https://api.github.com';

function GlobalProvider({ children }) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // check remaining requests
  const [remainingRequests, setRemainingRequests] = useState(0);
  // making requests
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // get the number of remaining requests
  const checkRequests = useCallback(async () => {
    try {
      let {
        data: {
          rate: { remaining },
        },
      } = await axios.get(`${baseUrl}/rate_limit`);
      setRemainingRequests(remaining);
      // check if there is NO remaining requests
      if (remaining === 0) {
        setError('Sorry, you have exceeded your hourly rate limit!');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // when the app loads ==> check the remaining requests
  useEffect(() => {
    checkRequests();
  }, [checkRequests]);

  // fetch the GithubUser and his data that the user search for
  // this function is called when the user submit the form
  const fetchGithubUser = async (user) => {
    setError(null);
    setIsLoading(true);
    try {
      // user
      const { data: userData } = await axios.get(`${baseUrl}/users/${user}`);
      setGithubUser(userData);

      const { login, followers_url, repos_url } = userData;

      // // repos
      // const { data: reposData } = await axios.get(`${repos_url}?per_page=100`);
      // setRepos(reposData);

      // // followers
      // const { data: followersData } = await axios.get(
      //   `${followers_url}?per_page=100`
      // );
      // setFollowers(followersData);

      // using Promise.allSettled combinator function to make the two requests at the same time
      const [repos, followers] = await Promise.allSettled([
        axios.get(`${baseUrl}/users/${login}/repos?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ]);

      if (repos.status === 'fulfilled') setRepos(repos.value.data);
      if (followers.status === 'fulfilled') setFollowers(followers.value.data);
      
      //
    } catch (error) {
      console.log(error);
      setError('There Is No User With That Username');
    }
    setIsLoading(false);
    // after each request ==> check the remaining requests
    checkRequests();
  };

  return (
    <GlobalContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        remainingRequests,
        error,
        isLoading,
        fetchGithubUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider };
export default GlobalContext;

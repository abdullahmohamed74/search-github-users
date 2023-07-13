import useGlobalContext from './../hooks/useGlobalContext';
import { Pie3D, Doughnut2D, Column3D, Bar3D } from './charts';
import { styled } from 'styled-components';

function Repos() {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((acc, repo) => {
    const { language, stargazers_count } = repo;
    if (!language) return acc;
    // if there is NO property with the "language" name in the acc object
    // create a new property and give it value 1
    if (!acc[language]) {
      acc[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      // if there is already a property with the "language" name in the acc object
      // increase its value by one
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count,
      };
    }
    return acc;
  }, {});

  // most used language
  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { label: item.label, value: item.stars };
    })
    .slice(0, 5);

  const { stars,forks } = repos.reduce(
    (acc, repo) => {
      const { stargazers_count, name,forks } = repo;

      acc.stars.push({ label: name, value: stargazers_count });
      acc.forks.push({ label: name, value: forks });

      return acc;
    },
    {
      stars: [],
      forks: [],
    }
  );

  const mostStars = stars
    .filter((item) => item.value !== undefined)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostForks = forks
    .filter((item) => item.value !== undefined)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
 
  return (
    <Wrapper className="section section-center">
      <Pie3D data={mostUsed} />
      <Column3D data={mostStars} />
      <Doughnut2D data={mostPopular} />
      <Bar3D data={mostForks} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div,
  svg,
  .fusioncharts-container {
    width: 100% !important;
  }

  svg {
    border-radius: var(--radius) !important;
  }
`;

export default Repos;

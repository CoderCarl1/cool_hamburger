import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils';
import { SearchField, ShowCard } from '../components';
export function Home() {
  const { isLoading, error, data } = useQuery('animeData', fetchAnime);
  const [searchTerm, setSearchTerm] = useState('');
  async function fetchAnime() {
    // const stringToSearch = searchTerm === '' ? '' : `&q=${searchTerm}`;

    let url;

    switch (true) {
      case searchTerm === '': {
        url = `https://api.jikan.moe/v4/anime?sort=desc&q=${searchTerm}`;
        break;
      }
      default: {
        url = `https://api.jikan.moe/v4/anime?sort=desc`;
        break;
      }
    }

    console.log('fetching from ', url);
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    console.log({ data });

    console.log('page refreshed');
  }, [data]);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('search done');
    // const form = new FormData(this);
    // const query = form.get('searchField');
    // setSearchTerm(query);
  };

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.in}
      exit={pageTransition.out}
      transition={pageTransition.transitionDetails}
    >
      <SearchField {...{ handleSearch, searchTerm, setSearchTerm }} />
      <div className="cards page-container">
        {data &&
          data.data.map((card) => (
            <ShowCard
              key={card.mal_id}
              title={card.title}
              images={card.images}
              status={card.status}
            />
          ))}
      </div>
    </motion.div>
  );
}

export default Home;

import { Provider } from 'react-redux';
import { useMemo } from 'react';

import { store } from '../redux/store';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Container from '../components/Container';
import Stack from '../components/Stack';
import TopList, { TopCategory } from '../components/TopList';
import SearchContainer from '../components/SearchContainer';

export default function Home() {
  const memoizedStore = useMemo(() => {
    return store;
  }, []);

  const topCategories: TopCategory[] = [
    {
      key: 'stock',
      label: 'Stock',
    },
    {
      key: 'forex',
      label: 'Forex',
    },
  ];

  return (
    <Provider store={memoizedStore}>
      <Wrapper>
        <Header title={'Find the right broker and invest on your own'} />
        <Container>
          <Stack width="lg:w-1/2">
            <SearchContainer
              title={'Filter by name'}
              placeholder={'Type Broker Name'}
            />
          </Stack>
          <Stack width="lg:w-1/2">
            <TopList label={'Top 5 Brokers'} categories={topCategories} />
          </Stack>
        </Container>
      </Wrapper>
    </Provider>
  );
}

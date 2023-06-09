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
  const memoizedStore = useMemo(() => store, []);

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
        <Container className="px-5 py-12 mx-auto flex flex-wrap">
          <Stack className="flex-1 order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 xs:order-2">
            <SearchContainer
              title={'Filter by name'}
              placeholder={'Type Broker Name'}
              className={'px-1 pt-1 pb-2 relative'}
            />
          </Stack>
          <Stack className="flex-1 order-2 xl:order-2 lg:order-2 md:order-1 sm:order-1 xs:order-1">
            <TopList label={'Top 5 Brokers'} categories={topCategories} />
          </Stack>
        </Container>
      </Wrapper>
    </Provider>
  );
}

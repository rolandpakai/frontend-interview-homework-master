import React from 'react';

import SearchResultItem from './SearchResultItem';
import { Broker } from '../data/brokers';
import { BROKER_SEARCH_LIST_ID } from '../logic/event';

type SearchResultProps = {
  data: Broker[];
  className?: string;
};

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { data, className } = props;

  return (
    <div className={`w-full ${className}`}>
      {data.map((item) => (
        <SearchResultItem
          key={item.id}
          data={item}
          measurementId={BROKER_SEARCH_LIST_ID}
        />
      ))}
    </div>
  );
};

export default SearchResult;

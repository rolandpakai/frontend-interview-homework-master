import React from 'react'

import SearchResultItem from './SearchResultItem';
import { Broker } from '../data/brokers';
import { BROKER_SEARCH_LIST_ID } from "../logic/event";

type SearchResultProps = { 
  data: Broker[],
};

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { data } = props;

  return (
    <div className="w-full bg-white rounded my-10">
      {data.map((item, index) => (
        <SearchResultItem
          id={item.id}
          key={item.id}
          name={item.name}
          linkUrl={item.linkUrl} 
          logoUrl={item.logoUrl} 
          measurementId={BROKER_SEARCH_LIST_ID}
        />
      ))}
    </div>
  )
};

export default SearchResult;
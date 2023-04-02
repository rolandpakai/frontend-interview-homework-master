import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../redux/store';
import { Broker } from '../data/brokers';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

type SearchContainerProps = {
  title: string;
  placeholder: string;
  className?: string;
};

const SearchContainer: React.FC<SearchContainerProps> = (
  props: SearchContainerProps
) => {
  const { title, placeholder, className } = props;
  const stateData = useSelector((state: AppState) => state.brokerData.all);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [result, setResult] = useState<Broker[]>([]);

  useEffect(() => {
    setResult(stateData);
  }, [stateData]);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = stateData.filter((data) =>
        data.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
      );
      setResult(filteredData);
    } else {
      setResult(stateData);
    }
  }, [searchTerm, stateData]);

  return (
    <div className={className}>
      <SearchInput
        title={title}
        placeholder={placeholder}
        value={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SearchResult data={result} />
    </div>
  );
};

export default SearchContainer;

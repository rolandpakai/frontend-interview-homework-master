import React from 'react'
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

type SearchContainerProps = { 
  title: string, 
  placeholder: string 
};

const SearchContainer: React.FC<SearchContainerProps> = (props: SearchContainerProps) => {
  const { title, placeholder } = props;

  return (
    <div className="px-8 pt-1 pb-16 relative">
      <SearchInput title={title} placeholder={placeholder} />
      <SearchResult />
    </div>
  )
};

export default SearchContainer;
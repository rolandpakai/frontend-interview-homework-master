import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type SearchInputProps = {
  title: string;
  placeholder: string;
  value: string;
  setSearchTerm: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
  const { title, placeholder, value, setSearchTerm } = props;

  const onChangeHandler = (value: string) => {
    setSearchTerm(value);
  };

  const clearInput = () => {
    setSearchTerm('');
  };

  return (
    <div className="">
      <label htmlFor="search" className="block mb-1 mx-2 text-sm text-gray-600">
        {title}
      </label>
      <div className="flex">
        <div className="mb-3 xl:w-96 bg-white border border-gray-700 rounded flex items-center">
          <input
            type="text"
            className="relative m-0 block w-full min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-1.5 text-neutral-700 outline-none transition duration-300 ease-in-out"
            placeholder={placeholder}
            onChange={(e) => onChangeHandler(e.target.value)}
            value={value}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer inset-y-0 right-0 pr-3"
            onClick={clearInput}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

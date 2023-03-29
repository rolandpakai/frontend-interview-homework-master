import React from 'react'

type SearchInputProps = { 
  title: string,
  placeholder: string,
};

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
  const { title, placeholder } = props;

  return (
    <div className="">
      <label
          htmlFor="search"
          className="block mb-1 mx-2 text-sm text-gray-600"
      >
        { title }
      </label>
      <div className="flex">
          <div className="mb-3 xl:w-96 bg-white border border-gray-700 rounded">
            <input
              type="search"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="exampleSearch"
              placeholder={placeholder}
              />
          </div>
      </div>
    </div>
  )
};

export default SearchInput;
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type SearchResultProps = { };

const SearchResult: React.FC<SearchResultProps> = () => {

  return (
    <div className="w-full bg-white rounded my-10">
    
      <div className="py-4 mx-2">
        <div className="flex items-center justify-between">
            <div className="w-full">
                <div className="flex items-center text-sm font-semibold">
                    <div className="flex items-center mx-2 rounded shadow">
                        <span className="w-10 h-10 bg-cover no-gallery" style={{backgroundImage: `url(https://brokerchooser.com/uploads/broker_logos/degiro-review.png)`}}></span>
                    </div>
                    <div className="">Degiro</div>
                </div>
            </div>
            <div className="flex items-center relative w-max flex-col">
                <a className="flex flex-row items-center justify-center font-medium uppercase cursor-pointer select-none rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[12px] sm:px-[20px] bg-blue-800 text-white" 
                    rel="noreferrer nofollow" 
                    target="_blank" 
                    href=""
                >
                  Visit Broker
                  <FontAwesomeIcon 
                      icon={faArrowRight}
                      className="ml-2"
                  />
                </a>
            </div>
        </div>
      </div>
  </div>
  )
};

export default SearchResult;
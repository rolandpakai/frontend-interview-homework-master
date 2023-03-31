import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { 
  EventArg, 
  MeasurementId, 
  handleEvent, 
  crateIntersectionObserver, 
  intersectionObserverOptions } from "../logic/event";

type SearchResultItemProps = { 
  id: number,
  name: string,
  linkUrl: string,
  logoUrl: string,
  measurementId: MeasurementId,
};

const SearchResultItem: React.FC<SearchResultItemProps> = (props: SearchResultItemProps) => {
  const { id, name, linkUrl, logoUrl, measurementId } = props;
  const targetRef = useRef(null);
  const eventArg = {
    type: undefined,
    brokerId: id,
    measurementId 
  } as EventArg;

  useEffect(() => {
    const observer = crateIntersectionObserver(intersectionObserverOptions, handleEvent, {...eventArg, type: "impression"});
    
     if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  const handleClick = () => {
    handleEvent({...eventArg, type: "click"});
  };

  return (
    <div className="py-4 mx-2">
      <div className="flex items-center justify-between">
          <div className="w-full">
              <div className="flex items-center text-sm font-semibold">
                  <div className="flex items-center mx-2 rounded shadow">
                      <span className="w-10 h-10 bg-cover no-gallery" style={{backgroundImage: `url(${logoUrl})`}}></span>
                  </div>
                  <div className="">{name}</div>
              </div>
          </div>
          <div className="flex items-center relative w-max flex-col">
              <a 
                ref={targetRef}
                href={linkUrl}
                onClick={handleClick}
                data-id={id}
                target="_blank" 
                className="flex flex-row items-center justify-center font-medium uppercase cursor-pointer select-none rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[12px] sm:px-[20px] bg-blue-800 text-white" 
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
  )
};

export default SearchResultItem;
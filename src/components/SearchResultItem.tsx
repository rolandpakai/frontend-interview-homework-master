import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Broker } from '../data/brokers';
import { MeasurementId } from '../logic/event';
import Link from './Link';

type SearchResultItemProps = {
  data: Broker;
  measurementId: MeasurementId;
};

const SearchResultItem: React.FC<SearchResultItemProps> = (
  props: SearchResultItemProps
) => {
  const {
    data: { id, name, linkUrl, logoUrl },
    measurementId,
  } = props;

  return (
    <div className="py-4 my-4 px-2 bg-white rounded ">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center text-sm font-semibold">
            <div className="flex items-center mx-2 rounded shadow">
              <span
                className="w-10 h-10 bg-cover no-gallery"
                style={{ backgroundImage: `url(${logoUrl})` }}
              ></span>
            </div>
            <div className="">{name}</div>
          </div>
        </div>
        <div className="flex items-center relative w-max flex-col">
          <Link
            id={id}
            href={linkUrl}
            measurementId={measurementId}
            className="flex flex-row items-center justify-center font-medium uppercase cursor-pointer select-none rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[12px] sm:px-[20px] bg-blue-600 text-white"
          >
            Visit Broker
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;

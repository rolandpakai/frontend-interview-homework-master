import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Broker } from '../data/brokers';

import {
  EventArg,
  MeasurementId,
  handleEvent,
  useObserveTarget,
} from '../logic/event';

type ListItemProps = {
  index: number;
  data: Broker;
  measurementId: MeasurementId;
};

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const {
    data: { id, name, score, linkUrl, logoUrl },
    index,
    measurementId,
  } = props;
  const targetRef = useRef(null);
  const eventArg = {
    type: undefined,
    brokerId: id,
    measurementId,
  } as EventArg;

  useObserveTarget(targetRef, { ...eventArg, type: 'impression' });

  const handleClick = () => {
    handleEvent({ ...eventArg, type: 'click' });
  };

  return (
    <div className="w-full border-b px-1 last:border-none border-secondary-50 hover:bg-blue-100">
      <a
        ref={targetRef}
        href={linkUrl}
        rel="nofollow noreferrer"
        onClick={handleClick}
        target="_blank"
      >
        <div className="hover:bg-secondary-50 mx-2 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start w-7 pl-1 font-semibold">
              {index}.
            </div>
            <div className="w-full">
              <div className="flex items-center text-sm font-semibold">
                <div className="flex items-center mr-1.5">
                  <span
                    className="w-8 h-8 bg-cover no-gallery"
                    style={{ backgroundImage: `url(${logoUrl})` }}
                  ></span>
                </div>
                <div className="">{name}</div>
                <div className="ml-auto mx-3">{score}</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListItem;

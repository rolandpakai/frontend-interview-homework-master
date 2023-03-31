import React from 'react'
import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import { AppState } from '../redux/store';
import { BrokerDataSlice } from '../redux/brokerDataSlice';
import { TabListMap, TAB_LIST_MAP } from '../logic/event';

type TabListProps = { storeKey: string }

const TabList: React.FC<TabListProps> = (props: TabListProps) => {
  const { storeKey } = props;
  const stateData = useSelector((state : AppState) => state.brokerData[storeKey as keyof BrokerDataSlice]);

  return (
    <div className="h-72 pt-1 mb-3">
      {stateData.map((item, index) => (
        <ListItem
          key={item.id}
          index={index + 1}
          data={item}
          measurementId={TAB_LIST_MAP[storeKey as keyof TabListMap]}
        />
      ))}
    </div>
  )
};

export default TabList;
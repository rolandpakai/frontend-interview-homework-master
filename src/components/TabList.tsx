import React from 'react'
import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import { AppState } from '../redux/store';
import { BrokerDataSlice } from '../redux/brokerDataSlice';

type TabListProps = { storeKey: string }

const TabList: React.FC<TabListProps> = (props: TabListProps) => {
  const { storeKey } = props;
  const data = useSelector((state : AppState) => state.brokerData[storeKey as keyof BrokerDataSlice]);

  return (
    <div className="h-72 pt-1 mb-3">
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          index={index + 1}
          id={item.id}
          name={item.name}
          score={item.score}
          linkUrl={item.linkUrl} 
          logoUrl={item.logoUrl} 
        />
      ))}
    </div>
  )
};

export default TabList;
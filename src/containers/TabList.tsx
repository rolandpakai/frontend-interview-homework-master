import React from 'react'
import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import { AppState } from '../redux/store';
import { BrokerDataSlice } from '../redux/brokerDataSlice';

type TabListProps = { storeKey: string }

const TabList: React.FC<TabListProps> = (props: TabListProps) => {
  const { storeKey } = props;
  const listData = useSelector((state : AppState) => state.brokerData[storeKey as keyof BrokerDataSlice]);

  return (
    <div className="h-72">
      <div className="pb-13">
        {listData.map((data, index) => (
          <ListItem
            key={data.id}
            index={index + 1}
            name={data.name}
            score={data.score}
            linkUrl={data.linkUrl} 
            logoUrl={data.logoUrl} 
          />
        ))}
      </div>
    </div>
  )
};

export default TabList;
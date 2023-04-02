import React, { useState } from 'react';

import Box from '../components/Box';
import Tabs from './tabs/Tabs';
import TabsHeader from './tabs/TabsHeader';
import TabsBody from './tabs/TabsBody';
import Tab from './tabs/Tab';
import TabPanel from './tabs/TabPanel';
import TabList from '../components/TabList';

export type TopCategory = {
  key: string;
  label: string;
};

type TopListProps = {
  label: string;
  categories: TopCategory[];
};

const TopList: React.FC<TopListProps> = (props: TopListProps) => {
  const { label, categories } = props;
  const firstTabValue = categories[0].key;
  const [activeTab, setActiveTab] = useState(firstTabValue);
  const tabs: React.ReactElement[] = [];
  const tabPanels: React.ReactElement[] = [];

  const handleClick = (newActiveTab: string): void => {
    setActiveTab(newActiveTab);
  };

  categories.forEach((category) => {
    tabs.push(
      <Tab
        key={category.key}
        value={category.key}
        activeTab={activeTab}
        onClick={handleClick}
      >
        {category.label}
      </Tab>
    );

    tabPanels.push(
      <TabPanel key={category.key} value={category.key} activeTab={activeTab}>
        <TabList className={'h-72 pt-1 mb-3'} storeKey={category.key} />
      </TabPanel>
    );
  });

  return (
    <Box title={label}>
      <Tabs>
        <TabsHeader>{tabs}</TabsHeader>
        <TabsBody>{tabPanels}</TabsBody>
      </Tabs>
    </Box>
  );
};

export default TopList;

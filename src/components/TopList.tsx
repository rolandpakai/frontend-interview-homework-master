import React from 'react';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

import Box from '../components/Box';
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
  const tabs: React.ReactElement[] = [];
  const tabPanels: React.ReactElement[] = [];
  const firstTabValue = categories[0].key;

  categories.forEach((category) => {
    tabs.push(
      <Tab key={category.key} value={category.key}>
        {category.label}
      </Tab>
    );

    tabPanels.push(
      <TabPanel key={category.key} value={category.key}>
        <TabList storeKey={category.key} />
      </TabPanel>
    );
  });

  return (
    <Box title={label}>
      <Tabs value={firstTabValue}>
        <TabsHeader>{tabs}</TabsHeader>
        <TabsBody>{tabPanels}</TabsBody>
      </Tabs>
    </Box>
  );
};

export default TopList;

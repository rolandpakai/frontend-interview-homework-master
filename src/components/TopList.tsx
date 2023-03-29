import React from 'react'

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Box from '../components/Box';
import TabList from '../components/TabList';

export type TopType = { 
  key: string,
  label: string,
};

type TopListProps = {
  label: string, 
  types: TopType[],
};

const TopList: React.FC<TopListProps> = (props: TopListProps) => {
  const { label, types } = props;
  const tabs: React.ReactElement[] = [];
  const tabPanels: React.ReactElement[] = [];
  const firstTabValue = types[0].key;

  types.forEach((type) => {
    tabs.push((
      <Tab key={type.key} value={type.key}>
        {type.label}
      </Tab>
    ));

    tabPanels.push((
      <TabPanel key={type.key} value={type.key}>
        <TabList storeKey={type.key} />
      </TabPanel>
    ));
  });

  return (
    <Box title={label}>
      <Tabs value={firstTabValue}>
          <TabsHeader>
              { tabs }
          </TabsHeader>
          <TabsBody>
            { tabPanels }
          </TabsBody>
      </Tabs>
    </Box>
  )
};

export default TopList;
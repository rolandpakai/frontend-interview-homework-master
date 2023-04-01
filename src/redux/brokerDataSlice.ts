import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Broker } from '../data/brokers';

import { exampleBrokerData } from '../data/brokers';

export type BrokerDataSlice = {
  all: Broker[];
  forex: Broker[];
  stock: Broker[];
};

const getBrokersData = (data: Broker[]): BrokerDataSlice => {
  return {
    all: data.sort((a, b) => a.name.localeCompare(b.name)),
    forex: data
      .filter((broker) => broker?.isForex)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5),
    stock: data
      .filter((broker) => broker?.isStock)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5),
  };
};

const initialState: BrokerDataSlice = getBrokersData(exampleBrokerData);

export const brokerDataSlice = createSlice({
  name: 'brokerData',
  initialState,
  reducers: {
    setBrokers(state, action: PayloadAction<Broker[]>) {
      return getBrokersData(action.payload);
    },
  },
});

export const { setBrokers } = brokerDataSlice.actions;
export default brokerDataSlice.reducer;

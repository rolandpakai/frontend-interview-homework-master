import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { Broker } from "../data/brokers";

import { exampleBrokerData } from "../data/brokers";

export type BrokerDataState = {
    all: Broker[],
    forex: Broker[],
    stock: Broker[],
};

const initialState: BrokerDataState = {
    all: exampleBrokerData.sort((a, b) => a.name.localeCompare(b.name)),
    forex: exampleBrokerData
            .filter((broker) => broker?.isForex)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5),
    stock: exampleBrokerData
            .filter((broker) => broker?.isStock)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5),
};

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {
        setBrokers(state, action: PayloadAction<Broker[]>) {
            const data = action.payload;

            const forex = data
			    .filter((broker) => broker.isForex)
			    .sort((a, b) => b?.score - a?.score)
                .slice(0, 5);

            const stock = data
			    .filter((broker) => broker.isStock)
			    .sort((a, b) => b?.score - a?.score)
                .slice(0, 5);
			
            return {
                ...state, 
                all: data,
                forex,
                stock,
            };
		},
    },
});

export const { setBrokers } = brokerDataSlice.actions;
export default brokerDataSlice.reducer;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { Broker } from "../data/brokers";

export type BrokerDataSlice = {
    all: Broker[],
    forex: Broker[],
    stock: Broker[],
};

const initialState: BrokerDataSlice = {
    all: [],
    forex: [],
    stock: [],
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
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type EventDataState = string [];

const initialState: EventDataState = [];

export const eventDataSlice = createSlice({
    name: "eventData",
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<string>) {
            return [...state, action.payload];
		},
    },
});

export const { addEvent } = eventDataSlice.actions;
export default eventDataSlice.reducer;
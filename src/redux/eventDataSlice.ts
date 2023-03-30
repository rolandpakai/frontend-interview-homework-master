import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: string[] = [];

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
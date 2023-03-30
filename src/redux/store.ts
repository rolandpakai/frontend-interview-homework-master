import {combineReducers, Middleware} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import {brokerDataSlice} from "./brokerDataSlice";
import {eventDataSlice} from "./eventDataSlice";

type AppThunkExtra = {}

export const makeStore = () => {
    const reducer = combineReducers({
        brokerData: brokerDataSlice.reducer,
        eventData: eventDataSlice.reducer,
    })

    return configureStore({
        reducer,
        devTools: {
            name: "BrokerChooser Homework",
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(),
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export type AppAsyncThunkConfig = {
    state: AppState
    dispatch: AppDispatch
    extra: AppThunkExtra
}

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>()
}
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { brokerDataSlice } from './brokerDataSlice';
import { eventDataSlice } from './eventDataSlice';

const reducer = combineReducers({
  brokerData: brokerDataSlice.reducer,
  eventData: eventDataSlice.reducer,
});

export const store = configureStore({
  reducer,
  devTools: {
    name: 'BrokerChooser Homework',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppStore = typeof store;

export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

import { useEffect } from 'react'
import { addEvent } from "../redux/eventDataSlice";
import { store } from "../redux/store";

export const BROKER_SEARCH_LIST_ID = "BROKER_SEARCH_LIST_ID"
export const TOP_5_STOCK_TAB_LIST_ID = "TOP_5_STOCK_TAB_LIST_ID"
export const TOP_5_FOREX_TAB_LIST_ID = "TOP_5_FOREX_TAB_LIST_ID"

export type TabListMap = {
    stock: MeasurementId,
    forex: MeasurementId,
}

export const TAB_LIST_MAP: TabListMap = {
    stock: TOP_5_STOCK_TAB_LIST_ID,
    forex: TOP_5_FOREX_TAB_LIST_ID,
}

export type MeasurementId =
    | typeof BROKER_SEARCH_LIST_ID
    | typeof TOP_5_STOCK_TAB_LIST_ID
    | typeof TOP_5_FOREX_TAB_LIST_ID

export type EventType = "click" | "impression" | undefined;

export type EventArg = {
    type: EventType,
    brokerId: number,
    measurementId: MeasurementId
}

export const sendEvent = (arg: EventArg): void => {
    console.log("Event sent: ", arg)
}

export const handleEvent = (arg: EventArg) => {
    const appState = store.getState();
    const events = appState.eventData;
    const eventKey = [arg.type, arg.brokerId, arg.measurementId].join('-');

    if(!events.includes(eventKey)) {
      store.dispatch(addEvent(eventKey));
      sendEvent(arg);
    }
};

export const intersectionObserverOptions = {
    rootMargin: "0px",
    threshold: 1.0,
};

export const crateIntersectionObserver = (options: object, handleIsIntersecting: (arg: EventArg) => void, eventArg: EventArg) => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            handleIsIntersecting(eventArg);
        }
    }, options);

    return observer;
};

export const useObserveTarget = (targetRef: React.MutableRefObject<null>, eventArg: EventArg) => {
    useEffect(() => {
      const current = targetRef.current;
      const observer = crateIntersectionObserver(intersectionObserverOptions, handleEvent, eventArg);
  
      if (current) {
        observer.observe(current);
      }
  
      return () => {
        if (current) {
          
          observer.unobserve(current);
        }
      };
    }, [eventArg, targetRef]);
  };
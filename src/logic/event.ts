import { addEvent } from "../redux/eventDataSlice";
import { AppDispatch } from "../redux/store";

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

export type EventType = "click" | "impression";

export type EventArg = {
    type: EventType,
    brokerId: number,
    measurementId: MeasurementId
}

export const sendEvent = (arg: EventArg) => {
    console.log("Event sent: ", arg)
}

export type EventManager = {
    eventArg: EventArg,
    events: Array<String>,
    dispatchEvent: AppDispatch,
}

export const eventManager = (param: EventManager): void => {
    const { eventArg, events, dispatchEvent } = param;
    const eventKey = [eventArg.type, eventArg.brokerId, eventArg.measurementId].join('-');

    if(!events.includes(eventKey)) {
      dispatchEvent(addEvent(eventKey));
      sendEvent(eventArg);
    }
}

import { Provider, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";

import { makeStore } from "../redux/store";
import { setBrokers } from "../redux/brokerDataSlice";
import { exampleBrokerData } from "../data/brokers";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import Wrapper from '../containers/Wrapper';
import Header from '../containers/Header';
import Container from '../containers/Container';
import Stack from '../containers/Stack';
import Box from '../containers/Box';
import TabList from '../containers/TabList';

export default function Home() {
    const store = useMemo(() => {
        return makeStore()
    }, []);

    useEffect(() => {
	    store.dispatch(setBrokers(exampleBrokerData));
	}, []);

    return (
        <Provider store={store}>
            <Wrapper>
                <Header title={"Find the right broker and invest on your own"} />
                <Container>
                    <Stack width="lg:w-1/2">
                        <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
                            <h2 className="text-xs mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
                            <p className="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More</a>
                        </div>
                    </Stack>
                    <Stack width="lg:w-1/2">
                        <Box title={"Top 5 Brokers"}>
                            <Tabs value="stock">
                                <TabsHeader>
                                    <Tab key={"stock"} value={"stock"}>
                                        {"Stock"}
                                    </Tab>
                                    <Tab key={"forex"} value={"forex"}>
                                        {"Forex"}
                                    </Tab>
                                </TabsHeader>
                                <TabsBody>
                                    <TabPanel key={"stock"} value={"stock"}>
                                        <TabList storeKey={"stock"} />
                                    </TabPanel>
                                    <TabPanel key={"forex"} value={"forex"}>
                                        <TabList storeKey={"forex"} />
                                    </TabPanel>
                                </TabsBody>
                            </Tabs>
                        </Box>
                    </Stack>
                </Container>
            </Wrapper>
        </Provider>
    )
}

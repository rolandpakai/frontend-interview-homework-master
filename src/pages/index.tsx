import { Provider, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";

import { makeStore } from "../redux/store";
import { setBrokers } from "../redux/brokerDataSlice";
import { exampleBrokerData } from "../data/brokers";
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Container from '../components/Container';
import Stack from '../components/Stack';
import TopList, { TopType } from '../components/TopList';

export default function Home() {
    const store = useMemo(() => {
        return makeStore()
    }, []);

    const topTypes: TopType[] = [
        {
            key: 'stock', 
            label: 'Stock'
        },{
            key: 'forex', 
            label: 'Forex'
        },
    ];

    useEffect(() => {
	    store.dispatch(setBrokers(exampleBrokerData));
	}, []);

    return (
        <Provider store={store}>
            <Wrapper>
                <Header title={"Find the right broker and invest on your own"} />
                <Container>
                    <Stack width="lg:w-1/2">
                        <div className="px-8 pt-1 pb-16 relative">
                            <label
                                htmlFor="search"
                                className="block mb-1 mx-2 text-sm text-gray-600"
                            >
                                Filter by name
                            </label>
                            <div className="flex">
                                <div className="mb-3 xl:w-96 bg-white border border-gray-700 rounded">
                                    <input
                                        type="search"
                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="exampleSearch"
                                        placeholder="Type Broker Name" 
                                    />
                                </div>
                            </div>


                            <div className="w-full bg-white rounded my-10">
                                    <div className="py-4 mx-2">
                                        <div className="flex items-center justify-between">
                                            <div className="w-full">
                                                <div className="flex items-center text-sm font-semibold">
                                                    <div className="flex items-center mx-2 rounded shadow">
                                                        <span className="w-10 h-10 bg-cover no-gallery" style={{backgroundImage: `url(https://brokerchooser.com/uploads/broker_logos/degiro-review.png)`}}></span>
                                                    </div>
                                                    <div className="">Degiro</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center relative w-max flex-col">
                                                <a className="flex flex-row items-center justify-center font-medium uppercase cursor-pointer select-none rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-blue-800 text-white" 
                                                    rel="noreferrer nofollow" 
                                                    target="_blank" 
                                                    href=""
                                                >
                                                Visit Broker
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </Stack>
                    <Stack width="lg:w-1/2">
                        <TopList 
                            label={"Top 5 Brokers"}
                            types={topTypes}
                        />
                    </Stack>
                </Container>
            </Wrapper>
        </Provider>
    )
}

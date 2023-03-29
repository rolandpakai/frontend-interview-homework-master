import { Provider, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";

import { makeStore } from "../redux/store";
import { setBrokers } from "../redux/brokerDataSlice";
import { exampleBrokerData } from "../data/brokers";

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Container from '../components/Container';
import Stack from '../components/Stack';
import Box from '../components/Box';
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
                        <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
                            <h2 className="text-xs mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
                            <p className="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More</a>
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

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SearchContainer from '../components/SearchContainer';

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
                        <SearchContainer 
                            title={"Filter by name"}
                            placeholder={"Type Broker Name"}
                        />
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

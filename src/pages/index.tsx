import {Provider} from "react-redux";
import {useMemo} from "react";
import {makeStore} from "../redux/store";

export default function Home() {
    const store = useMemo(() => {
        return makeStore()
    }, []);

    return (
        <Provider store={store}>
            <header className="flex items-center px-4 py-2 bg-blue-100">
                <strong className="mx-auto font-bold sm:text-2xl text-x">Find the right broker and invest on your own</strong>
            </header>

            <div className="container px-5 py-12 mx-auto flex flex-wrap">

                <div className="h-full p-4 lg:w-1/2">
                    <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
                        <h2 className="text-xs mb-1">CATEGORY</h2>
                        <h1 className="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
                        <p className="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a className="text-indigo-500 inline-flex items-center">Learn More</a>
                    </div>
                </div>

                <div className="h-full p-4 lg:w-1/2">
                    <div className="flex justify-center sticky top-5 mt-4">
                        <div className="relative top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6 ">
                            <div className="flex items-center font-semibold text-2xl mb-2 mt-2">Top 5 brokers</div>
                            <div className="w-full">
                                <div data-tab-content-label="stock" className="tab-content ">
                                    <div className="top-5-box-broker-list pb-13">
                                        
                                        
                                        <div className="w-full border-b last:border-none border-secondary-50">
                                            <a href="https://brokerchooser.com/broker-reviews/interactive-brokers-review" target="_blank" className="openAccountBtn">
                                                <div className="hover:bg-secondary-50 py-3">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center justify-start w-7 pl-1 font-semibold">1.</div>
                                                        <div className="w-full">
                                                            <div className="flex items-center text-sm font-semibold">
                                                                <div className="flex items-center pr-1.5">
                                                                    <span className="w-8 h-8 bg-cover no-gallery" style={{backgroundImage: 'url(https://brokerchooser.com/uploads/broker_logos/interactive-brokers-review.png)'}}></span>
                                                                </div>
                                                                <div>TradeStation</div>
                                                            </div>
                                                        </div>
                                                        <span className="svg_icon arrow-right"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Provider>
    )
}

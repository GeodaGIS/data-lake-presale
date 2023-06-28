import '../styles/home.css';
import { StreamsChart } from './StreamsChart';
import { Tiles } from './Tiles';
import { FetchingBtns } from './FetchingBtns';
import { createContext, useState } from 'react';
import { Knobs } from './Knobs';

export const HomeContext = createContext(null);

export const Home = () => {
    const [isFetching, setIsFetching] = useState(false);
    const maxSize = 1000;

    return (
        <div className='home-container'>
            <HomeContext.Provider value={{ isFetching, setIsFetching, maxSize }}>
                <div className='upper-container'>
                    <FetchingBtns />
                    <Tiles />
                </div>
                <div className='lower-container'>
                    <StreamsChart />
                    <Knobs />
                </div>
            </HomeContext.Provider>
        </div>
    )
}
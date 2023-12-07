import { useDispatch } from 'react-redux';
import { updateStreams } from '../store/actions/streamActions';
import { Button } from 'primereact/button';
import { useContext, useEffect, useRef, useState } from 'react';
import { HomeContext } from './Home';
import { ProgressBar } from 'primereact/progressbar';


export const FetchingBtns = () => {
    const dispatch = useDispatch();
    // isWorking means the general process (all the iterations):
    const [isWorking, setIsWorking] = useState(false);
    // isFetching means the process of each iteration:
    const { isFetching, setIsFetching } = useContext(HomeContext);
    let intervalId = useRef(null);
    const [progressVal, setProgressVal] = useState(100);
    const second = 1000;

    const startStreaming = () => {
        setIsWorking(true);
        // first iteration:
        run();
        // every 10 seconds start another iteration:
        // (for the user it seems like every iteration is 5 seconds but technically is 10 seconds)
        intervalId.current = setInterval(run, second * 10);
    }

    const run = () => {
        // ProgressVal starts at 0 and ends at 100 in every iteration, with jumps of 20 every second. 
        setProgressVal(0);
        let progInterval = null;
        setIsFetching(true);
        progInterval = setInterval(() => {
            setProgressVal(prev => prev + 20);
        }, second);
        // after 5 seconds we need to end the iteration:
        setTimeout(() => {
            // after each iteration we update the data:
            dispatch(updateStreams());
            setIsFetching(false);
            clearInterval(progInterval);
            // max value is 100:
            setProgressVal(100);
        }, second * 5);
    }

    const stopStreaming = () => {
        clearInterval(intervalId.current);
        setIsFetching(false);
        setIsWorking(false);
    }

    return (
        <section className="fetching-btns-container">
            <Button
                label="הרץ"
                icon="pi pi-play"
                severity="success"
                loading={isFetching}
                disabled={isWorking}
                onClick={startStreaming}
            />
            <Button
                label="עצור"
                icon="pi pi-stop-circle"
                severity="danger"
                disabled={isFetching || !isWorking}
                onClick={stopStreaming}
            />
            <ProgressBar value={progressVal} dir='ltr' color='#397AA8' />
        </section>
    )
}
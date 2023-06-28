import { useDispatch } from 'react-redux';
import { updateStreams } from '../store/actions/streamActions';
import { Button } from 'primereact/button';
import { useContext, useEffect, useRef, useState } from 'react';
import { HomeContext } from './Home';
import { ProgressBar } from 'primereact/progressbar';


export const FetchingBtns = () => {
    const dispatch = useDispatch();
    const [isWorking, setIsWorking] = useState(false);
    const { isFetching, setIsFetching } = useContext(HomeContext);
    let intervalId = useRef(null);
    const [progressVal, setProgressVal] = useState(100);

    const startStreaming = () => {
        setIsWorking(true);
        run();
        intervalId.current = setInterval(run, 10000);
    }

    const run = () => {
        setProgressVal(0);
        let progInterval = null;
        setIsFetching(true);
        progInterval = setInterval(() => {
            setProgressVal(prev => prev + 20);
        }, 1000);
        setTimeout(() => {
            dispatch(updateStreams());
            setIsFetching(false);
            clearInterval(progInterval);
            setProgressVal(100);
        }, 5000);
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
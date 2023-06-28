import { useState, useEffect, useContext } from 'react';
import '../styles/tiles.css';
import { useSelector } from 'react-redux';
import { HomeContext } from './Home';


export const Tiles = () => {
    const { streams } = useSelector(state => state.streamModule);
    const { maxSize, isFetching } = useContext(HomeContext);

    const getStatus = (size) => {
        if (isFetching && (size < maxSize)) {
            return 'בריצה';
        }
        return 'הסתיים';
    }

    const getFormattedLastRun = (lastRun) => {
        const date = new Date(lastRun);
        return date.toLocaleDateString('he-IL', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    return (
        <section className="tiles-container">
            {streams?.length ? streams.map(stream =>
                <div key={stream.id}>
                    <h1>
                        {'זרם נתונים: '}
                        <span style={{ color: 'rgb(93 51 6)' }}>
                            {stream.name}
                        </span>
                    </h1>
                    <h1>
                        {'סטטוס: '}
                        <span style={{ color: (isFetching && (stream.size < maxSize)) ? '#1da750' : '#397AA8' }}>
                            {getStatus(stream.size)}
                        </span>
                    </h1>
                    <h1>
                        {'ריצה אחרונה: '}
                        <span style={{ color: 'grey', direction: 'ltr' }}>
                            {getFormattedLastRun(stream.lastRun)}
                        </span>
                    </h1>
                </div>
            ) : null}
        </section>
    )
}
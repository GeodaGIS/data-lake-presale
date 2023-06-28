import { Knob } from 'primereact/knob';
import '../styles/home.css';
import { useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from './Home';


export const Knobs = () => {
    const { streams } = useSelector(state => state.streamModule);
    const [totalSizeToday, setTotalSizeToday] = useState(0);
    const { maxSize } = useContext(HomeContext);

    useEffect(() => {
        if (streams.length) {
            const totalSize = streams.reduce((acc, stream) => acc + stream.size, 0);
            setTotalSizeToday(totalSize);
        }
    }, [streams])

    return (
        <section className='knobs-container'>
            {streams?.length ?
                <>
                    <div>
                        <section>
                            <h2>{'נתונים שנמשכו היום'}</h2>
                            <h2>{'MB'}</h2>
                        </section>
                        <Knob
                            value={totalSizeToday}
                            valueColor='#397AA8'
                            rangeColor="rgba(162, 163, 166, 0.6)"
                            min={0} max={4000}
                            size={280}
                        />
                    </div>
                    <div>
                        <section>
                            <h2>{'נתונים שנמשכו אתמול'}</h2>
                            <h2>{'MB'}</h2>
                        </section>
                        <Knob
                            value={3500}
                            valueColor='#397AA8'
                            rangeColor="rgba(162, 163, 166, 0.6)"
                            min={0} max={maxSize * streams.length}
                            size={280}
                        />
                    </div>
                </>
                : null
            }
        </section>
    )
}
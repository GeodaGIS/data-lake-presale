// @ts-nocheck
import { StreamService } from '../../services/StreamService';

export function loadStreams() {
    return (dispatch) => {
        try {
            const streams = StreamService.QueryAll();
            dispatch({ type: 'SET_STREAMS', streams });
        } catch (err) {
            console.error('Error in loadStreams Action:', err);
            throw err;
        }
    }
}

export function updateStreams() {
    return (dispatch) => {
        try {
            const streams = StreamService.Update();
            dispatch({ type: 'SET_STREAMS', streams });
        } catch (err) {
            console.error('Error in updateStreams Action:', err);
            throw err;
        }
    }
}

import { StorageService } from "./StorageService"
import { UtilService } from "./UtilService";

export const StreamService = {
    QueryAll,
    // QueryById,
    // Create,
    Update,
    // Delete
}

const { saveToStorage, loadFromStorage } = StorageService;
const { makeId } = UtilService;
const maxSize = 1000;


function QueryAll() {
    // let allStreamsJson = loadFromStorage('streams');
    // if (!allStreamsJson) {
    //     const initialStreams = getInitialStreams();
    //     saveToStorage('streams', initialStreams);
    //     allStreamsJson = loadFromStorage('streams');
    // }
    const initialStreams = getInitialStreams();
    saveToStorage('streams', initialStreams);
    const allStreamsJson = loadFromStorage('streams');
    const allStreams = JSON.parse(allStreamsJson);
    return allStreams;
}


function Update() {
    const allStreamsJson = loadFromStorage('streams');
    const allStreams = JSON.parse(allStreamsJson);
    const updatedStreams = allStreams.map(stream => {
        if (stream.size === maxSize) {
            return stream;
        }
        const newSize = stream.size + stream.step;
        if (newSize >= maxSize) {
            return {
                ...stream,
                size: maxSize,
                lastRun: Date.now()
            }
        }
        return {
            ...stream,
            size: stream.size + stream.step,
            lastRun: Date.now()
        }
    });
    saveToStorage('streams', updatedStreams);
    const updatedStreamsJson = loadFromStorage('streams');
    const savedStreams = JSON.parse(updatedStreamsJson);
    return savedStreams;
}


function getInitialStreams() {
    return [
        {
            id: makeId(),
            name: 'אוטומציה',
            size: 100,
            step: 100,
            lastRun: 1687950086317
        },
        {
            id: makeId(),
            name: 'מילון 92',
            size: 20,
            step: 20,
            lastRun: 1687950086317
        },
        {
            id: makeId(),
            name: 'קומפלוט',
            size: 100,
            step: 100,
            lastRun: 1687950086317
        },
        {
            id: makeId(),
            name: 'מימד',
            size: 10,
            step: 10,
            lastRun: 1687950086317
        }
    ]
}
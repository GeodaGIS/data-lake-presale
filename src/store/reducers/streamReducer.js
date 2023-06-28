
const INITIAL_STATE = {
    streams: []
};

export function streamReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_STREAMS':
            return {
                ...state,
                streams: [...action.streams]
            };

        default:
            return state;
    }

}
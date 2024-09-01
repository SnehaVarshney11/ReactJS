export const initialState = {
    currState: 'idle'
}

export const reducer = (state, action) => {
    switch(state.currState) {
        case 'idle':
            switch(action.type) {
                case 'START':
                    return {...state, currState: 'running'};
                default:
                    return state;
            }
        case 'running':
            switch(action.type) {
                case 'PAUSE':
                    return {...state, currState: 'paused'};
                case 'STOP':
                    return {...state, currState: 'idle'};
                default:
                    return state;
            }
        case 'paused':
            switch (action.type) {
                case 'RESUME':
                    return { ...state, currState: 'running' };
                case 'STOP':
                    return { ...state, currState: 'idle' };
                default:
                    return state;
            }
        default:
            throw new Error('Invalid State');
    }
}
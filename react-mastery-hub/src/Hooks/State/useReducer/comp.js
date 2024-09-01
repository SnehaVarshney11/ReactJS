import React, { useReducer } from 'react';
import { initialState, reducer } from './state';

const MyComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleStart = () => {
        dispatch({ type: 'START' });
    }

    const handlePause = () => {
        dispatch({ type: 'PAUSE' });
    }

    const handleResume = () => {
        dispatch({ type: 'RESUME' });
    }

    const handleStop = () => {
        dispatch({ type: 'STOP' });
    }

    return (
        <>
            <h2>Current State: {state.currState}</h2>
            {state.currState === 'idle' && (
                <button onClick={handleStart}>Start</button>
            )}
            {state.currState === 'running' && (
                <div>
                  <button onClick={handlePause}>Pause</button>
                  <button onClick={handleStop}>Stop</button>
                </div>
            )}
            {state.currState === 'paused' && (
              <div>
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleStop}>Stop</button>
              </div>
            )}
        </>
    )
};

export default MyComponent;

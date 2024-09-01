import React from 'react';

const MyFunctionalComponent = React.memo((props) => {
    return (
        <>
            <p>This is functional component {props.text}</p>
        </>
    )
});

export default MyFunctionalComponent;

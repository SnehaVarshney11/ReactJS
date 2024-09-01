import React, { useEffect, useState } from "react";

function Component() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                console.log('Error ', err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>Data : {data ? data.message : 'Null'}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default Component;
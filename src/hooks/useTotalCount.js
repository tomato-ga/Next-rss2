import { useState, useEffect } from 'react';

export default function useTotalCount(apiUrl) {
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setTotalCount(data.count);
        };

        fetchData();
    }, [apiUrl]);

    return totalCount;
}

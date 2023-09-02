// /Volumes/SSD_1TB/next-antena2/front/src/components/useFetchTotalCount.js

import { useEffect, useState } from 'react';

const useFetchTotalCount = () => {
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTotalCount = async () => {
            try {
                const res = await fetch('https://ape.erorice.com/total_count');
                const data = await res.json();
                setTotalCount(data.count);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchTotalCount();
    }, []);

    return [totalCount, loading, error];
};

export default useFetchTotalCount;

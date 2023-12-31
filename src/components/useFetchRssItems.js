// /Volumes/SSD_1TB/next-antena2/front/src/components/useFetchRssItems.js

import { useState, useEffect } from 'react';

const useFetchRSSItems = (page, limit) => {
    const [rssItems, setRSSItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRSSItems = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://api.erorice.com/rss/all/latest?page=${page}&limit=${limit}`);
                if (!response.ok) {
                    throw new Error('Error fetching RSS items');
                }
                const data = await response.json();
                setRSSItems(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchRSSItems();
    }, [page, limit]);

    return [rssItems, isLoading];
};

export default useFetchRSSItems;

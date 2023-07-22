import { useState, useEffect } from 'react';

const useFetchRSSItems = (page, limit) => {
    const [rssItems, setRSSItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRSSItems = async () => {
            setIsLoading(true);
            try {
                const responseSites = await fetch('http://192.168.0.25:7002/rss');
                const sites = await responseSites.json();

                const promises = sites.map(async (site) => {
                    const response = await fetch(`http://192.168.0.25:7002/sites/${site.id}/rss/latest`);
                    const data = await response.json();

                    return data.map(item => ({ ...item, siteName: site.name, siteCreatedAt: site.created_at }));
                });

                let combinedRSSItems = await Promise.all(promises);
                combinedRSSItems = combinedRSSItems.flat();

                setRSSItems(combinedRSSItems.slice(page * limit, (page + 1) * limit));
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

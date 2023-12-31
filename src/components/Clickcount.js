// ClickCounts.js
import { useEffect, useState } from 'react';

const FetchClickCounts = ({ itemId }) => {
    const [clickCount, setClickCount] = useState(0);
    useEffect(() => {
        const fetchClickCounts = async () => {
            if (typeof itemId !== 'number') {
                console.error("itemId must be a number", itemId);
                return;
            }

            const response = await fetch('https://api.erorice.com/click_counts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([itemId]), // 配列として送信する
            });

            if (!response.ok) {
                console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
                return;
            }

            const initialClickCounts = await response.json();
            setClickCount(initialClickCounts[itemId] || 0);
        };

        fetchClickCounts();
    }, [itemId]);

    return (
        <span className="inline-block rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
            {clickCount}<br/><div className='text-xs'>Click</div>
        </span>
    )
    
};

export default FetchClickCounts;

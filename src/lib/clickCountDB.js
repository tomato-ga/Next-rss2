export const handleClickCount = async (postitemid) => {
    try {
        const response = await fetch(`http://192.168.0.25:7002/click_count?rss_id=${postitemid}`, {
            method: 'PUT',
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};

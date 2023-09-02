// /Volumes/SSD_1TB/next-antena2/front/src/lib/clickCountDB.js

export const handleClickCount = async (postitemid) => {
    try {
        const response = await fetch(`https://ape.erorice.com/click_count/${postitemid}`, {
            method: 'PUT',
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};


export const handleFavCount = async (postId) => {
    try {
        const response = await fetch(`https://ape.erorice.com/fav_count/${postId}`, {
            method: 'PUT',  // 仮定: PUTメソッドでお気に入りをインクリメントします。
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.count;  // APIから返された実際のカウントを返します。

        
    } catch (error) {
        console.error("Failed to handle fav count", error);
        throw error;
    }
};



// export const getClickCount = async (postitemid) => {
//     let response;
//     try {
//         response = await fetch(`https://ape.erorice.com/click_count/${postitemid}`, {
//             method: 'GET',
//         });
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//     } catch (error) {
//         console.error(error);
//     }
//     const data = await response.json();
//     return data.count;
// };
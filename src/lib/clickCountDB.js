// /Volumes/SSD_1TB/next-antena2/front/src/lib/clickCountDB.js

export const handleClickCount = async (postitemid) => {
    try {
        const response = await fetch(`http://192.168.0.25:7002/click_count/${postitemid}`, {
            method: 'PUT',
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};


// export const getClickCount = async (postitemid) => {
//     let response;
//     try {
//         response = await fetch(`http://192.168.0.25:7002/click_count/${postitemid}`, {
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
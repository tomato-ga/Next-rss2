import { useEffect, useState } from "react";
import { handleFavCount } from "../lib/clickCountDB";

const Fav = ({ postId, articleData }) => {

    console.log(postId);
    console.log(articleData);

    const [favCount, setFavCount] = useState(0);

    const [isFavorited, setIsFavorited] = useState(() => {
        if (typeof window !== "undefined") {
            // クライアントサイドの場合
            const favState = localStorage.getItem(`fav_${postId}`) ? true : false;
            console.log(`postId: ${postId}, favState from localStorage: ${favState}`);  // この行を追加
            return favState;
        }
        return false; // SSRの場合、初期値をfalseとする
    });
    
    const incrementFavCount = async () => {
        console.log("Button clicked!"); 
        if (isFavorited) return;

        try {
            const updatedCount = await handleFavCount(postId);
            setFavCount(updatedCount);

            // 成功したらlocalStorageに保存
            localStorage.setItem(`fav_${postId}`, 'true');
            setIsFavorited(true);

            // favArticleDataにデータを追加
            let favArticles = localStorage.getItem('favArticleData');
            favArticles = favArticles ? JSON.parse(favArticles) : [];

            // postIdがすでに存在しないか確認して、存在しなければ追加
            const isArticleExist = favArticles.some(article => article.id === postId); // articleData.idを使用する
            console.log("Does article exist?", isArticleExist); // このログが表示されるか確認


            if (!isArticleExist) {
                if (favArticles.length === 500) {
                    favArticles.pop();
                }
                
                favArticles.unshift(articleData);  // articleDataを直接追加
                localStorage.setItem('favArticleData', JSON.stringify(favArticles));
            }
        } catch (error) {
            console.error("Failed to handle fav count", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://192.168.0.25:7002/fav_count/${postId}`);
                
                // responseのステータスコードが404ならfavCountを0に設定して終了
                if (response.status === 404) {
                    setFavCount(0);
                    return;
                }
    
                // それ以外のHTTPエラーの場合、例外をスローしない
                if (!response.ok) {
                    return;
                }
                
                const data = await response.json();
                
                if (data && typeof data.count === 'number') {
                    setFavCount(data.count);
                } else {
                    console.error("Unexpected API response", data);
                }
            } catch (error) {
                // ここでネットワークエラーやブロックエラーをキャッチしますが、何も出力しません。
            }
        };
    
        fetchData();
    }, [postId, articleData]);

    
    useEffect(() => {
        const isFavoritedInStorage = localStorage.getItem(`fav_${postId}`) ? true : false;
        console.log(`postId: ${postId}, favState from localStorage: ${isFavoritedInStorage}`);
        setIsFavorited(isFavoritedInStorage);
    }, [postId]);


    return (
        <div className="flex gap-2 items-center" onClick={incrementFavCount}>
            <button className={`py-1.5 px-3 ${isFavorited ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-600 hover:scale-105 hover:shadow'} text-center border  rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2`}>
                お気に入り登録
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                </svg>
                <span>{favCount}</span>
            </button>
        </div>
    );
};

export default Fav;

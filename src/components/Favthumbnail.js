import React from 'react'
import { useState, useEffect } from 'react';
import handleFavCount from '@/lib/clickCountDB';

const Favthumbnail = ({ postId, articleData }) => {


    const [FavCount, setFavCount] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);
    let savedFavPageLists = {
        "FavoritePages": [],
    }

    useEffect(() => {
        const favArticle = localStorage.getItem('favArticleData');
        if (favArticle) {
            const favArticles = JSON.parse(favArticle);
            const validArticles = favArticles.FavoritePages.filter(article => article !== null);
            const isArticleFavorited = validArticles.some(article => article.id === postId);
            setIsFavorited(isArticleFavorited);
        }
        
    }, [postId]);

    const buttonFavCount = async () => {


        const existingData = JSON.parse(localStorage.getItem('favArticleData'));
        if (existingData && existingData.FavoritePages) {
            savedFavPageLists.FavoritePages = existingData.FavoritePages;
        } else {
            savedFavPageLists.FavoritePages = [];
        }

        try {
            // const updatedCount = await handleFavCount(postId);
            // setFavCount(updatedCount);

            if (!isFavorited) {
                setIsFavorited(true);
                savedFavPageLists.FavoritePages.unshift(articleData[0]);
                localStorage.setItem('favArticleData', JSON.stringify(savedFavPageLists));
            } else {
                savedFavPageLists.FavoritePages = savedFavPageLists.FavoritePages.filter(article => article.id !== postId);
                localStorage.setItem('favArticleData', JSON.stringify(savedFavPageLists));
                setIsFavorited(false);
            }
        } catch (error) {
            console.error("Failed to handle fav count", error);
        }
    }

    // TODO ボタン押せるようにするのと、デザインやっぱちょっと変なので変更する
    return (
        <span className="inline-block rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1 pointer-events-none">
            <button
                onClick={buttonFavCount}
                disabled={isFavorited}
                className={`py-1.5 px-3 ${isFavorited ? 'opacity-50' : 'hover:text-blue-600 hover:scale-105 hover:shadow'} text-center border  rounded-md font-bold text-blue-700 h-8 text-sm flex items-center gap-1 lg:gap-2`}
            >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                </svg>
            </button>
        </span>
    )
    
}

export default Favthumbnail;

// /Volumes/SSD_1TB/next-antena2/front/src/components/Pagination.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Pagination = ({ totalCount, pageSize, currentPage }) => {
    const router = useRouter();
    const [current, setCurrent] = useState(currentPage);
    const totalPages = Math.ceil(totalCount / pageSize);
    console.log('トータルカウント',totalCount);
    console.log('トータルページ数',totalPages);
    console.log('ページサイズ',pageSize);

    useEffect(() => {
        setCurrent(currentPage);  
    }, [currentPage]);

    const changePage = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            router.push(`/page/${newPage + 1}`)
            .then(() => window.scrollTo(0, 0))
            .catch((error) => console.error(error));
        }
    };

    // 新しく追加された関数
    const pageLinks = () => {
        let links = [];
        for(let i=0; i<totalPages; i++){
            links.push(
                <button key={i} onClick={() => changePage(i)}>
                    {i + 1}
                </button>
            );
        }
        return links;
    };
    
    return (
        <div>
            <button disabled={current === 0} onClick={() => changePage(current - 1)}>前へ</button>
            <button disabled={current === totalPages - 1} onClick={() => changePage(current + 1)}>次へ</button>
            <br />
            <span>現在の数字{current + 1}</span>
            <div>
                {pageLinks()} {/* 追加された関数を呼び出します */}
            </div>
        </div>
    );
    
}

export default Pagination;
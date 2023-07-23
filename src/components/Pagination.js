// /Volumes/SSD_1TB/next-antena2/front/src/components/Pagination.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Pagination = ({ totalCount, pageSize, currentPage }) => {
    const router = useRouter();
    const [current, setCurrent] = useState(currentPage);
    const totalPages = Math.ceil(totalCount / pageSize);

    useEffect(() => {
        setCurrent(currentPage);  
    }, [currentPage]);

    const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            router.push(`/page/${newPage}`)
            .then(() => window.scrollTo(0, 0))
            .catch((error) => console.error(error));
        }
    };

    const pageLinks = () => {
        let links = [];
        for(let i=1; i<=totalPages; i++){
            links.push(
                <button key={i} onClick={() => changePage(i)}>
                    {i}
                </button>
            );
        }
        return links;
    };
    
    return (
        <div>
            <button disabled={current === 1} onClick={() => changePage(current - 1)}>前へ</button>
            <button disabled={current === totalPages} onClick={() => changePage(current + 1)}>次へ</button>
            <br />
            <span>現在の数字{current}</span>
            <div>
                {pageLinks()} 
            </div>
        </div>
    );
    
}

export default Pagination;

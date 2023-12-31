// /Volumes/SSD_1TB/next-antena2/front/src/components/Pagination.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Pagination = ({ totalCount, pageSize, currentPage, pageChangeUrl }) => {

    const router = useRouter();
    const [current, setCurrent] = useState(currentPage);
    const totalPages = Math.ceil(totalCount.count / pageSize);

    useEffect(() => {
        setCurrent(currentPage);  
    }, [currentPage]);

    const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            router.push(pageChangeUrl(newPage))
            .then(() => window.scrollTo(0, 0))
            .catch((error) => console.error(error));
        }
    };

    const pageLinks = () => {
        let links = [];
    
        let startPage = Math.max(1, current - 2);
        let endPage = Math.min(totalPages, startPage + 4);
    
        // startPageが1より小さくならないように調整
        if (startPage < 1) {
            startPage = 1;
            endPage = startPage + 4;
        }
    
        // endPageがtotalPagesより大きくならないように調整
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - 4);
        }
    
        for (let i = startPage; i <= endPage; i++) {
            links.push(
                <button 
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ${current === i ? "font-bold text-2xl" : ""}`} 
                    key={i} 
                    onClick={() => changePage(i)}
                >
                    {i}
                </button>
            );
        }
    
        return links;
    };
    
    return (
        <div> 
            <ul className="inline-flex -space-x-px text-base h-10 ">
                <button className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    disabled={current === 1} onClick={() => changePage(current - 1)}>前</button>
                {pageLinks()} 
                <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    disabled={current === totalPages} onClick={() => changePage(current + 1)}>次</button>
            </ul>
        </div>
    );
}

export default Pagination;

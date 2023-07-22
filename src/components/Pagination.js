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
        if (newPage >= 0 && newPage < totalPages) {
            router.push(`/page/${newPage + 1}`)
            .then(() => window.scrollTo(0, 0))
            .catch((error) => console.error(error));
        }
    };
    

    return (
        <div>
            <button onClick={() => changePage(current - 1)}>前へ</button>
            <button onClick={() => changePage(current + 1)}>次へ</button>
            <br />
            <span>現在の数字{current + 1}</span>

        </div>
    );
}

export default Pagination;

// TODO : ページ遷移がされない
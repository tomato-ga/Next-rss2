import { useState, useEffect } from "react";

export default function usePagination(baseUrl, pageSize) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        if (!baseUrl) {
            // Do not fetch if baseUrl is empty
            return;
        }

        const fetchUrl = `${baseUrl}?page=${currentPage}&limit=${pageSize}`;
        
        fetch(fetchUrl)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error));
    }, [currentPage, pageSize, baseUrl]);

    return [data, currentPage, changePage];
}

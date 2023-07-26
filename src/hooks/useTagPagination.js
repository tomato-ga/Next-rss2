// /Volumes/SSD_1TB/next-antena2/front/src/hooks/useTagPagination.js

import { useState, useEffect } from "react";

export default function useTagPagination(baseUrl, tag, pageSize) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Set initial page to 1

    const changePage = (newPage) => {
        setCurrentPage(Number(newPage)); // Make sure newPage is a Number
    }

    useEffect(() => {
        if (!baseUrl || !tag) {
            // Do not fetch if baseUrl or tag is empty
            return;
        }

        const fetchUrl = `${baseUrl}/tag?tag=${tag}&page=${currentPage}&limit=${pageSize}`;
        
        fetch(fetchUrl)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error));
    }, [currentPage, pageSize, baseUrl, tag]);

    return [data, currentPage, changePage];
}
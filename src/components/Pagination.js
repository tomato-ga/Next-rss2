// /Volumes/SSD_1TB/next-antena2/front/src/components/Pagination.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Pagination = ({ totalCount, pageSize, currentPage, pageChangeUrl }) => {
    const router = useRouter();
    const [current, setCurrent] = useState(currentPage);
    const totalPages = Math.ceil(totalCount / pageSize);

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
      if (endPage - startPage < 4) {
          startPage = Math.max(1, endPage - 4);
      }
      for(let i = startPage; i <= endPage; i++){
          links.push(
              <button className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ${current === i ? "font-bold text-2xl" : ""}`} key={i} onClick={() => changePage(i)}>
                  {i}
              </button>
          );
      }
      return links;
  };
  
  return (
      <div>
          <ul class="inline-flex -space-x-px text-base h-10">
          <button className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={current === 1} onClick={() => changePage(current - 1)}>前</button>
  
          {pageLinks()} 
  
          <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={current === totalPages} onClick={() => changePage(current + 1)}>次</button>
          <br />
          </ul>
      </div>
  );
  
    
}


export default Pagination;


// todo ページネーションは最大5件にして、次へ前へは別で表示させる
{/* <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav> */}



// 現在のページネーションJSX
        // <div>
        //     <button disabled={current === 1} onClick={() => changePage(current - 1)}>前へ</button>
        //     <button disabled={current === totalPages} onClick={() => changePage(current + 1)}>次へ</button>
        //     <br />
        //     <span>現在の数字{current}</span>
        //     <div>
        //         {pageLinks()} 
        //     </div>
        // </div>
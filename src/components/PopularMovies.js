import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


const PopularMovies = ({ popumoviesRes }) => {

    // const [data, setData] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const ENDP = `https://api.erorice.com/top_movies`;
    //             const res = await fetch(ENDP);
    //             const data = await res.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     fetchData();
    // }, [])



    return (
        <div className="justify-center text-center font-bold">
            <h2 className="mb-4">
                <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                    <Link href="/Mostpopular">
                    人気動画
                    </Link>
                </span>
            </h2>
            
            <div className="flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3">
                {popumoviesRes.map((movie, movieIndex) => (
                    <div key={movieIndex} className="mr-3 mb-3 flex flex-col">
                        <div className="relative w-[160px] h-[150px] md:w-[180px] md:h-[170px] mx-auto">
                            <Link href="/[siteId]/[itemId]" as={`/${movie.rss.site_id}/${movie.rss.id}`}>
                                <div className="absolute inset-0">
                                    <img src={movie.rss.imgurl} className="w-full h-full object-cover" alt={movie.rss.title} />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
    
// 2023/08/18 Imageコンポーネントを削除してimgタグへ変更した

// ImageコンポーネントのときのJSX
//     return (
//     <div className="justify-center text-center font-bold">
//         <h2 className="mb-4">
//             <span className="border-b-2 pb-1 border-blue-300 text-2xl">
//                 <Link href="/Mostpopular">
//                 人気動画
//                 </Link>
//             </span>
//         </h2>
        
//         <div className="flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3">
//             {popumoviesRes.map((movie, movieIndex) => (
//                 <div key={movieIndex} className="mr-3 mb-3 flex flex-col">
//                     <div className="relative flex justify-center items-center h-[150px] w-[160px] md:h-[170px] md:w-[180px] mx-auto">
//                         <Link href="/[siteId]/[itemId]" as={`/${movie.rss.site_id}/${movie.rss.id}`}>
//                             <Image fill src={movie.rss.imgurl} alt={movie.rss.title}  />
//                         </Link>
//                     </div>
//                 </div>

//             ))}
//         </div>
//     </div>
// );
}



export default PopularMovies;
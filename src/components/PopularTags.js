import Link from "next/link";
import { useEffect, useState } from "react";

const PopularTags = ({ popuTagsRes }) => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const ENDP = `https://ape.erorice.com/top_tags`;
    //             const res = await fetch(ENDP);
    //             const data = await res.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error("Error fetching data", error);
    //         }
    //     };
    
    //     fetchData(); // 非同期関数を呼び出す
    // }, []);

    return (
        <div className="flex justify-center">
            <div className="text-center font-bold p-10 md:w-1/2 w-full">
                <h2 className="mb-4">
                    <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                        人気キーワード
                    </span>
                </h2>
    
                <ul className='flex flex-wrap space-x-2 justify-center'>
                    {popuTagsRes.map((tag, index) => (
                        <div key={index} className="">
                        <li className='inline-block bg-pink-50 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-pink-600 mr-2 mb-2'>
                            <Link href={`/tag/${tag}/page/1`}>
                                #{tag}
                            </Link>
                        </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
    
}



export default PopularTags;
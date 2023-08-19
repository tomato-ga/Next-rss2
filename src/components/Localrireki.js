import Link from "next/link";
import Image from "next/image";
import { handleClickCount } from '@/lib/clickCountDB';


const Localrireki = ({ localData }) => {



    return (
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
            {localData && localData ? localData.slice(0, 5).map((article, groupIndex) => (
                <div key={groupIndex} className="w-full md:w-1/2 lg:w-auto mb-3">
                    <div onClick={() => {handleClickCount(article.id)}}>
                        <Link href="/item/[items]" as={`/item/${article.id}`}>
                            <div className="mr-3 flex flex-col lg:flex-inline">
                                <div className="relative flex justify-center items-center h-[200px] md:h-[170px] w-[250px] md:w-[170px] mx-auto">
                                    <Image className="" fill src={article.imgurl} alt={article.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw" />
                                </div>
                                <h3 className='p-2 text-center text-base'>{article.title}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            )) : null}
        </div>
    );
}


export default Localrireki;


    // お気に入りローカルデータを取得
    // const checkSavedPage = () => {
    //   let savedPage = JSON.parse(localStorage.getItem('favArticleData'));

    //   if (savedPage) {
    //     setLocalData(savedPage);
    //   } else {
    //     return null;
    //   }
    // }

    // checkSavedPage(); // ローカルのお気に入りデータをチェックして、存在していたらlocalDataに保存
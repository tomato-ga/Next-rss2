import Link from "next/link";
import Image from "next/image";

const Localrireki = ({ localData }) => {
    return (

        <div className="flex flex-wrap md:flex-nowrap justify-center">
            {localData ? localData.reverse().slice(0, 6).map((articleGroup, groupIndex) => (
            <div key={groupIndex}>
                {articleGroup.map((article, articleIndex) => (
                <Link key={articleIndex} href="/[siteId]/[itemId]" as={`/${article.site_id}/${article.id}`}> {/* 内側のマップで別のキーを使用 */}
                    <div className="mr-3 mb-3 flex flex-col">
                    <div className="relative flex justify-center items-center h-[200px] md:h-[170px] w-[250px] md:w-[170px] mx-auto">
                        <Image className="" fill src={article.imgurl} alt={article.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw" />
                    </div>
                    <h3 className='p-2 text-center text-base'>{article.title}</h3>
                    </div>
                </Link>
                ))}
            </div>
            )) : null}
        </div>

    )

}

export default Localrireki;
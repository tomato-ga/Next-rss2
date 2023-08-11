const { default: Link } = require("next/link");


const Tags = ({ tagsArray, numberTags }) => {

    const cleanedTags = tagsArray.map(tag => tag.trim());

return (
    <div className='tags flex sm:m-auto flex-wrap p-2'>
        {cleanedTags.slice(0, numberTags).map((tag, tagIndex) => (
            <Link key={tagIndex} href="/tag/[tagpage]/page/[pageNumber]" as={`/tag/${tag}/page/1`}>
                <span className="inline-block bg-pink-50 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-pink-600 mr-2 mb-2">
                    #{tag}
                </span>
            </Link>
        ))}
    </div>
);
};


export default Tags;
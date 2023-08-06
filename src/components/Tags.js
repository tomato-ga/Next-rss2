const { default: Link } = require("next/link");


const Tags = ({ tagsArray }) => {

    return (
        <div className='tags flex sm:m-auto flex-wrap'>
            {tagsArray.slice(0,5).map((tag, tagIndex) => (
                <Link key={tagIndex} href="/tag/[tagpage]/page/[pageNumber]" as={`/tag/${tag}/page/1`}>
                    <span class="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                    </span>
                </Link>
            ))}
        </div>
    );

};

export default Tags;
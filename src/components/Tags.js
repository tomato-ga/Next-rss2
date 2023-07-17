const { default: Link } = require("next/link");


const Tags = ({ tagsArray }) => {
    return (
        <div className='tags'>
            {tagsArray.map((tag, tagIndex) => (
                <Link key={tagIndex} href="/tag/[tagpage]" as={`/tag/${tag}`}>
                    <span className='px-1.5 text-blue-500'>
                        {tag}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Tags;
import React from 'react'
import Link from 'next/link'


const BreadCrumb = ({ data }) => {

    let tags = data[0].tag.split(',');


    return (
    <ol className="list-decimal list-inside p-4 rounded-md text-gray-700 text-xs">
        <li key={data[0].id} className="inline-block">
            <Link href="/" className="text-blue-600 hover:text-blue-800">ホーム</Link>
            <span className="mx-2">&gt;</span>
        </li>
        <li className="inline-block">
            <Link href="/tag/[tagpage]/page/[pageNumber]" as={`/tag/${tags[0]}/page/1`} className="text-blue-600 hover:text-blue-800">{tags[0]}</Link>
            <span className="mx-2">&gt;</span>
        </li>
        <li className="inline-block">
            <div className="text-gray-500">{data[0].title}</div>
        </li>
    </ol>
    )
}


export default BreadCrumb
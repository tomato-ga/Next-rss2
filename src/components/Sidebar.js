import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='border border-gray-300 rounded-lg shadow-lg p-4 flex-grow-0 w-72'>
            <h2 className='text-2xl mb-4'>サイドバー</h2>
            <p>
                <Link href='/tag/爆乳/page/1'>
                    爆乳
                </Link>
            </p>
        </div>
    )
}

export default Sidebar;
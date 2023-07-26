import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import RelatedTagPosts from '@/components/RelatedTagPosts';

const TagPage = () => {

    const router = useRouter();
    const { tagpage } = router.query;

    return (
        <>
            <Header />
            <div className='container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row'>
            <Sidebar />
            <RelatedTagPosts tag={tagpage} />
            </div>
        </>
    );
}

export default TagPage;
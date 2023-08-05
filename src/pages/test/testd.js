// /Users/donbe/Codes/Next-rss2/src/pages/test/testd.js

import { useState, useEffect, useMemo, useContext } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/iiim.module.css'
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import { handleClickCount } from '@/lib/clickCountDB';
import DataContext from '@/context/DataContext';


export default function TestSsr() {

    const { data, totalCount, page, limit } = useContext(DataContext);

    console.log(data);
    console.log(totalCount);
    console.log(page);
    console.log(limit);

    return (
            <p>てすと</p>
    );
}

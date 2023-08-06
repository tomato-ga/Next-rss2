// /Users/donbe/Codes/Next-rss2/src/pages/test/testd.js

import { useSelector } from 'react-redux';
import { selectData, selectTotalCount, selectPage, selectLimit } from '@/store/dataSlice';

export default function TestSsr() {
    const data = useSelector(selectData);
    const totalCount = useSelector(selectTotalCount);
    const page = useSelector(selectPage);
    const limit = useSelector(selectLimit);

    console.log(data);
    console.log(totalCount);
    console.log(page);
    console.log(limit);

    return (
        <p>てすと</p>
    );
}

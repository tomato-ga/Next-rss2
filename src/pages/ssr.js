import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import RelatedPosts from '@/components/RelatedPosts';

const PostSSR = ({ rssFeeds }) => {
  const router = useRouter();
  const { siteId, itemId } = router.query;
  console.log(rssFeeds);

  if (!rssFeeds) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        {rssFeeds.map((feed, index) => (
            <div key={index}>
                <a href={feed.link}><h2>{feed.title}</h2></a>
            </div>
        ))}
        
    </div>
  )
};

export async function getServerSideProps() {

  try {
    const feedsResponse = await fetch(`http://192.168.0.25:7002/sites/1/rss/latest`);
    const feedsData = await feedsResponse.json();

    return {
      props: {
        rssFeeds: feedsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {
      props: {
        rssFeeds: [],
      },
    };
  }
}

export default PostSSR;

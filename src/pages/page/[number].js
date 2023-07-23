import Header from "@/components/Header";
import RSSList from "@/components/Rsslist";

const Page = ({ page }) => {
  return (
    <>
    <Header />
    <RSSList page={page} />
    </>
  );
};

export async function getServerSideProps(context) {
    const page = context.params.number;  // `page`を`number`に変更
  
    // Check if page is a number
    if (isNaN(page) || page < 1) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { page: Number(page) - 1 }, // Subtract 1 because pages are 0-indexed
    }
}

export default Page;

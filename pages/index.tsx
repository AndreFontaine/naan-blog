import { NextSeo } from "next-seo";
import { TypeBlogDetails } from "../types/TypeBlogDetails";
import { getAllPosts } from "../lib/blog-api";
import BlogPreview from "../components/blog-preview/BlogPreview";

export const getStaticProps = async () => {
  const postList: TypeBlogDetails[] = getAllPosts();

  return {
    props: {
      posts: postList,
    },
  };
};

interface Props {
  posts: TypeBlogDetails[];
  children?: React.ReactNode;
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <NextSeo
        title={`Blog | ${process.env.NEXT_PUBLIC_OWNER_NAME}`}
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`}
        description={`Technical blogs written by ${process.env.NEXT_PUBLIC_OWNER_NAME}`}
        openGraph={{
          title: `Blog | ${process.env.NEXT_PUBLIC_OWNER_NAME}`,
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`,
          description: `Technical blogs written by ${process.env.NEXT_PUBLIC_OWNER_NAME}`,
          type: "article",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 800,
              height: 600,
              alt: "Profile Image",
              type: "image/png",
            },
            {
              url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/static/profile.png`,
              width: 900,
              height: 800,
              alt: "Profile Image",
              type: "image/png",
            },
          ],
          site_name: `${process.env.NEXT_PUBLIC_OWNER_NAME}'s Blog`,
        }}
      />

      <div className="flex justify-center text-slate-900 dark:text-white font-bold text-4xl lg:text-4xl px-4 py-2 my-6">
        Últimas entradas
      </div>
      <div className="flex flex-wrap p-5 gap-5 justify-evenly">
        {posts.map((blogItem: TypeBlogDetails) => (
          <BlogPreview
            key={blogItem.slug}
            slug={blogItem.slug}
            title={blogItem.data.title}
            description={blogItem.data.description}
            imageUrl={blogItem.data.banner}
            tags={blogItem.data.tags}
            date={blogItem.data.date}
            time={blogItem.data.time}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

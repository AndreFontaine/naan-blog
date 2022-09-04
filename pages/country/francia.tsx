import BlogPreview from "../../components/blog-preview/BlogPreview";
import { getAllPosts } from "../../lib/blog-api";
import { TypeBlogDetails } from "../../types/TypeBlogDetails";

export const getStaticProps = async () => {
  const postList: TypeBlogDetails[] = getAllPosts('Francia');

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

const Francia = ({ posts }: Props) => {
  return (
    <>
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

export default Francia;

import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleTag from "./ArticleTag";

interface BlogPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
  tags: string[];
  time: string;
}
const customLoader = ({ src }: any) => {
  return src;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH
  ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
  : "";

function BlogPreview(props: BlogPreviewProps) {
  const { title, description, imageUrl, tags = [], date, slug, time } = props;
  return (
    <Link href={`/${slug}`} passHref>
      <div className="flex flex-col pb-6 w-96 bg-white dark:bg-gray-700 dark:text-white overflow-hidden shadow-lg gap-2 rounded-lg hover:cursor-pointer  transition ease-in-out duration-200 hover:scale-100">
        <Image
          loader={customLoader}
          objectFit="cover"
          width={400}
          height={200}
          src={`${prefix}${imageUrl}`}
          alt="This is the preview image of the blog"
          className="rounded-t-md"
        />
        <div className="flex flex-wrap justify-starts items-center mt-4 px-4 mb-2">
          {tags.map((tag) => (
            <ArticleTag title={tag} key={tag} />
          ))}
        </div>

        <div className="text-slate-900 dark:text-white font-bold text-xl lg:text-2xl px-4 py-2">
          {title}
        </div>
        
        <div className="text-slate-500 dark:text-slate-400 line-clamp-3 font-light text-lg lg:text-xl px-4">
          {description}
        </div>
        <div className="flex items-center">
          <span className="font-medium pl-4 pr-2">{date}</span>
          <FaRegClock size={12}/>
          <span className="text-sm font-medium px-2">{time} min de lectura </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogPreview;

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CountryPreviewProps {
  name: string;
  description: string;
  imageUrl: string;
  flag: string;
}
const customLoader = ({ src }: any) => {
  return src;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH
  ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
  : "";

function CountryPreview(props: CountryPreviewProps) {
  const { name, description, imageUrl, flag} = props;
  return (
    <Link href={`/country/${name.toLocaleLowerCase()}`} passHref>
      <div className="flex flex-col pb-6 w-96 bg-white dark:bg-gray-700 dark:text-white overflow-hidden shadow-lg gap-2 rounded-lg hover:cursor-pointer  transition ease-in-out duration-200 hover:scale-100">
        <Image
          loader={customLoader}
          objectFit="cover"
          width={400}
          height={200}
          src={`${prefix}${imageUrl}`}
          alt={`This is the preview image of the selected country ${name}`}
          className="rounded-t-md"
        />
        <div className="text-slate-900 dark:text-white font-bold text-xl lg:text-2xl px-4 py-2">
          {name} {flag}
        </div>
        
        <div className="text-slate-500 dark:text-slate-400 line-clamp-3 font-light text-lg lg:text-xl px-4">
          {description}
        </div>
      </div>
    </Link>
  );
}

export default CountryPreview;

import { client } from "@/sanity/lib/client";
import { Post } from "@/sanity/schemas";
import Image from "next/image";

export default async function Posts() {
  const posts: Post[] = await client.fetch("*[_type == 'post']");

  return (
    <>
      {posts.map((post) => (
        <a
          key={post._id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            width={400}
            height={600}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {post.description}
            </p>
          </div>
        </a>
      ))}
    </>
  );
}

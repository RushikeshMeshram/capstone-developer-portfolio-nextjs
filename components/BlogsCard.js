import Image from "next/image";
import Link from "next/link";

export default function BlogsCard(props) {
  console.log(props.blogs, "blogs");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <Image
        className="w-full h-48 object-cover bg-stone-600"
        alt={props.blogs.title}
        width={300}
        height={200}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">{props.blogs.title}</h2>
        <p className="text-gray-600 text-base mt-2 text-ellipsis truncate">
          {props.blogs.content}
        </p>
      </div>
      <div className="px-6 py-4">
        <Link
          href={`/blogs/${props.blogs.id}`}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          View blog
        </Link>
      </div>
    </div>
  );
}

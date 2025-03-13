import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <Image
        className="w-full h-48 object-cover bg-stone-600"
        alt={props.project.title}
        width={300}
        height={200}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">
          {props.project.title}
        </h2>
        <p className="text-gray-600 text-base mt-2 text-ellipsis truncate">
          {props.project.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <Link
          href={`/projects/${props.project.id}`}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

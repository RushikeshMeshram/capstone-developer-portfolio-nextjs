import prisma from "../../../../lib/prisma";

export default async function ProjectPage({ params }) {
  const blog = await prisma.blogs.findUnique({
    where: { id: params.id },
  });

  return (
    <div className="max-w-2/3 mx-auto mt-10 px-12">
      <article>
        <h1 className="text-3xl my-4">{blog.title}</h1>
        <p className="text-black my-2">{blog.content}</p>
      </article>
    </div>
  );
}

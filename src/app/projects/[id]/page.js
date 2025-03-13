// app/projects/[id]/page.tsx
export default async function ProjectPage({ params }) {
  const project = await prisma.projects.findUnique({
    where: { id: params.id },
  });

  return (
    <div className="max-w-2/3 mx-auto mt-10 px-12">
      <article>
        <h1 className="text-3xl my-4">{project.title}</h1>
        <p className="text-black my-2">{project.description}</p>
      </article>
    </div>
  );
}

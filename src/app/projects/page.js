import { headers } from "next/headers";
import ProjectCard from "../../../components/ProjectCard";

export default async function Page() {
  const host = await headers().get("host");
  const data = await fetch(`http://${host}/api/projects`);
  const projects = await data.json();

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}

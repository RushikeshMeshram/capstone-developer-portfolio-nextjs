import { headers } from "next/headers";

import BlogsCard from "../../../components/BlogsCard";

export default async function Page() {
  const host = await headers().get("host");
  const data = await fetch(`http://${host}/api/blogs`);
  const blogs = await data.json();

  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-6">
          {blogs.map((blog, i) => (
            <BlogsCard key={i} blogs={blog} />
            // <li key={i}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

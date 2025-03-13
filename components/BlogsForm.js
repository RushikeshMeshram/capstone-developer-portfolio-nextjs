"use client";
import React, { useState } from "react";

const BlogsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch existing projects
    const data = await fetch(`/api/blogs`);
    const blogs = await data.json();

    // Ensure there is at least one project, then get the last project's id
    const lastBlog = blogs[blogs.length - 1];
    const newId = parseInt(lastBlog.id) + 1;

    // Send the new project to the API
    const res = await fetch(`/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify({
        // Send data as JSON string
        id: newId.toString(),
        title,
        content,
      }),
    });

    const resData = await res.json();
    console.log(resData); // Log the response
  };

  return (
    <div className="w-1/2 h-2/3  mx-auto">
      <form>
        <div className="">
          <h1 className="mb-5 text-3xl text-center">Add Blog</h1>
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="first_name"
              value={title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter project title here"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <input
              type="text"
              id="last_name"
              value={content}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter description here"
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogsForm;

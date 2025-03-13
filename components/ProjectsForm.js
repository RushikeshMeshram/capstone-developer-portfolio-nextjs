"use client";
import React, { useState } from "react";

const ProjectsForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch existing projects
    const data = await fetch(`/api/projects`);
    const projects = await data.json();

    // Ensure there is at least one project, then get the last project's id
    const lastProject = projects[projects.length - 1];
    const newId = parseInt(lastProject.id) + 1;

    // Send the new project to the API
    const res = await fetch(`/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify({
        // Send data as JSON string
        id: newId.toString(),
        title,
        description: desc,
      }),
    });

    const resData = await res.json();
    console.log(resData); // Log the response
  };

  return (
    <div className="w-1/2 h-2/3 my-6 mx-auto">
      <form>
        <div className="">
          <h1 className="mb-5 text-3xl text-center">Add Project</h1>
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Title
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
              Description
            </label>
            <input
              type="text"
              id="last_name"
              value={desc}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter description here"
              required
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectsForm;

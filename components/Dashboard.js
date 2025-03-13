"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import ProjectsForm from "./ProjectsForm";
import BlogsForm from "./BlogsForm";

const Dashboard = () => {
  const { data: session } = useSession();
  // console.log(session.user.name, "session");
  return (
    <>
      <div>
        {session ? (
          <div>
            <ProjectsForm />
            <BlogsForm />
          </div>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl">You are not logged in.</h1>

            <button
              onClick={() => signIn("github")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Sign in with Github
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

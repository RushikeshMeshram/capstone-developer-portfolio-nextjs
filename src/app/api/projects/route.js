import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// let projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     description: "A personal portfolio built with Next.js and Tailwind.",
//   },
//   {
//     id: 2,
//     title: "E-commerce App",
//     description: "A full-stack e-commerce application.",
//   },
//   {
//     id: 3,
//     title: "E-commerce App",
//     description: "A full-stack e-commerce application.",
//   },
// ];
// GET /api/projects - Fetch all projects
export async function GET() {
  const project = await prisma.projects.findMany();
  console.log(project.length);
  return NextResponse.json(project);
}

// POST /api/projects - Add a new project
// export async function POST(request) {
//   const { id, title, description } = await request.json();
//   console.log(id, title, description);
//   const project = await prisma.projects.create({
//     data: { id, title, description },
//   });

//   return NextResponse.json({ id, title, description }, { status: 201 });
// }

// import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { id, title, description } = await request.json();
    console.log(id, title, description);

    const project = await prisma.projects.create({
      data: { id, title, description },
    });

    return NextResponse.json({ id, title, description }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

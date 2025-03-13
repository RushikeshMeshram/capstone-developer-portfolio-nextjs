import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET /api/projects - Fetch all projects
export async function GET() {
  const blog = await prisma.blogs.findMany();

  return NextResponse.json(blog);
}

export async function POST(request) {
  try {
    const { id, title, content } = await request.json();
    console.log(id, title, content);

    const project = await prisma.blogs.create({
      data: { id, title, content },
    });

    return NextResponse.json({ id, title, content }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

import { addPost, getAllPosts } from "@/app/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const newPost = await req.json();
  const createdPost = await addPost(newPost);
  return NextResponse.json(createdPost, { status: 201 });
}

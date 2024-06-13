import { NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/lib/posts";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = await getPostById(params.id);
  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updatedPost = await req.json();
  const post = await updatePost(params.id, updatedPost);
  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = await deletePost(params.id);
  if (post) {
    return NextResponse.json({ message: "Post deleted" }, { status: 204 });
  } else {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
}

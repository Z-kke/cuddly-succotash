import Link from "next/link";
import { getAllPostIds, getPostData } from "../lib/posts";

type Post = {
  id: string;
  title: string;
  content: string;
};

type PostId = {
  id: string;
};

export default async function BlogLandingPage() {
  const postIds = await getAllPostIds();
  // Prevent "waterfall loading" with Promise.all
  // Can cause issues when one of the fetches fails, but not an issue in this demo environment.
  const posts = await Promise.all(
    postIds.map((post: PostId) => getPostData(post.id))
  );

  return (
    <div className="prose mx-auto">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} className="mb-4">
            <Link
              href={`/blog/${post.id}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p>{post.content.substring(0, 100)}...</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

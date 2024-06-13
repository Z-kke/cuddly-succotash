import Link from "next/link";

async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function BlogLandingPage() {
  const posts = await fetchPosts();

  return (
    <div className="prose mx-auto">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul>
        {posts.map((post: { id: string; title: string; content: string }) => (
          <li key={post.id} className="mb-4">
            <Link
              href={`/blog/${post.id}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <Link href="/blog/add" className="text-blue-600 hover:underline">
        Add a new post
      </Link>
    </div>
  );
}

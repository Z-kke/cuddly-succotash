async function fetchPost(id: string) {
  const res = await fetch(`/api/blog/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <div className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

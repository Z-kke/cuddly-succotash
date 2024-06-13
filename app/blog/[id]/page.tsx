import { getAllPostIds, getPostData } from "@/app/lib/posts";

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map((id) => ({ id }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <div className="prose mx-auto">
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
}

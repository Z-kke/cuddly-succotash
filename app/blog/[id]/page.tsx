import { getAllPostIds, getPostData } from "@/app/lib/posts";

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map(({ id }) => ({ id }));
}

type Params = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Params) {
  const postData = await getPostData(params.id);
  if (!postData) {
    return <div>Post not found</div>;
  }
  return (
    <div className="prose mx-auto">
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
}

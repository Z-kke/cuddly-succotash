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
    return (
      <div className="min-h-screen flex items-center justify-center">
        Post not found
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="prose text-center">
        <h1 className="font-bold text-4xl mb-5">{postData.title}</h1>
        <p>{postData.content}</p>
      </div>
    </div>
  );
}

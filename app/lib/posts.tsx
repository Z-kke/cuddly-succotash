export type Post = {
  id: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  { id: "1", title: "First Post", content: "This is the first post." },
  { id: "2", title: "Second Post", content: "This is the second post." },
];

export async function getAllPosts() {
  return posts;
}

export async function getPostById(id: string) {
  return posts.find((post) => post.id === id);
}

export async function addPost(newPost: Post) {
  newPost.id = (posts.length + 1).toString();
  posts.push(newPost);
  return newPost;
}

export async function updatePost(id: string, updatedPost: Partial<Post>) {
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...updatedPost };
    return posts[postIndex];
  }
  return null;
}

export async function deletePost(id: string) {
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex !== -1) {
    const [deletedPost] = posts.splice(postIndex, 1);
    return deletedPost;
  }
  return null;
}

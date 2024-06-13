export async function getAllPostIds() {
  // Simulate fetching post IDs from an API or database
  return [{ id: "1" }, { id: "2" }];
}

export async function getPostData(id: string) {
  // Simulate fetching post data from an API or database
  const posts = {
    "1": { id: "1", title: "First Post", content: "This is the first post." },
    "2": { id: "2", title: "Second Post", content: "This is the second post." },
  };
  return posts[id];
}

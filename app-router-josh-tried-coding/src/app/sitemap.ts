type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export default async function sitemap() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const allPosts = await res.json() as Post[];

  const posts  = allPosts.map(p => ({
    url : `http://localhost:3000/post/${p.id}`,
    lastModified: new Date(),
    ...p
  }))

  const routes = ['', '/post', '/about'].map(r => ({
    url : `http://localhost:3000${r}`,
    lastModified: new Date().toISOString()
  }));

  return [
    ...routes,
    ...posts
  ]
}

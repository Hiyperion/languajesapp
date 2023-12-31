import { LikeButton } from './Like'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}
export async function ListOfPost () {
  const posts = await fetchPosts()
  return posts.slice(0, 5).map((post: { id: string ; title: string ; body: string }) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}

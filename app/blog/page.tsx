import { getPosts } from '@/lib/blog'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      <h1>Blog</h1>
      <Link href="/blog/new">Créer un nouveau post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
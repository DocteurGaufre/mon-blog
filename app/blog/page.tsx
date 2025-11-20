import { getPosts } from '@/lib/blog'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      <h1 className="text-center text-3xl my-8 font-bold" >Blog</h1>
      <Link className="border-2 p-2 font-bold my-12" href="/blog/new">Créer un nouveau post</Link>
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
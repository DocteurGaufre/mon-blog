import { getPost, deletePost } from '@/lib/blog'
import Link from 'next/link'

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id)
  const post = await getPost(id)

  if (!post) {
    return (
      <div>
        <p>Post non trouvé</p>
        <Link href="/blog">Retour à la liste</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-center text-3xl my-8 font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/blog">Retour à la liste</Link>
    </div>
  )
}

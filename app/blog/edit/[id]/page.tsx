import { getPost, editPost } from '@/lib/blog'

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id)
  const post = await getPost(id)

  //if (!post) return <p>Post non trouvé</p>

  return (
    /*<form action={async (formData: FormData) => {
      formData.append('id', id.toString())
      await editPost(formData)
    }}>
      <input name="title" defaultValue={post.title} required />
      <textarea name="content" defaultValue={post.content} required />
      <button type="submit">Modifier</button>
    </form>*/
    <p>votre id : {id}</p>
  )
}
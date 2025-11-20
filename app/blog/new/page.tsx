import { createPost } from '@/lib/blog'

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Titre" required />
      <textarea name="content" placeholder="Contenu" required />
      <button type="submit">Créer</button>
    </form>
  )
}






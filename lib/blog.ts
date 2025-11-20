'use server'
import { redirect } from 'next/navigation'

type Post = {
  id: number
  title: string
  content: string
}

let posts: Post[] = [
    { id: 1, title: 'Premier post', content: 'Hello World' },
    { id: 2, title: 'Deuxième post', content: 'Bonjour Next.js' },
]

export async function getPosts() {
    return posts
}

export async function getPost(id: number) {
    return posts.find(post => post.id === id) || null
}

export async function createPost(formData: FormData) { 
    const title = formData.get('title')?.toString() || ''
    const content = formData.get('content')?.toString() || ''

    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1
    const newPost = { id: newId, title, content }
    posts.push(newPost)

    // Redirige vers la page du post créé
    redirect(`/blog/${newId}`)
    // Aucun return
}

export async function editPost(form: FormData) { 
    const id = Number(form.get('id'))
    const post = posts.find(p => p.id === id)
    if (post) {
        post.title = form.get('title')?.toString() || post.title
        post.content = form.get('content')?.toString() || post.content
    }
    return post
}

export async function deletePost(form: FormData) { 
    const id = Number(form.get('id'))
    posts = posts.filter(p => p.id !== id)
    redirect('/blog')
}
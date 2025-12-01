'use server'

import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { blogTable } from '@/db/schema'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getArticles() {
  return await db.select().from(blogTable)
}

export async function addArticle(form: FormData) {
  await db.insert(blogTable).values({
    title: String(form.get('title')),
    content: String(form.get('content')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editArticle(form: FormData) {
  await db
    .update(blogTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(blogTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeArticle(id: string) {
  await db.delete(blogTable).where(eq(blogTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeArticleAction(formData: FormData) {
  const id = formData.get("id") as string
  return removeArticle(id)
}
import { addArticle, getArticles, removeArticle, removeArticleAction } from '@/lib/blog'

export default async function Home() {
  const articles = await getArticles()
  return (
    <main>
      <h1 className="text-center text-3xl my-8 font-bold">Mon blog</h1>
      {articles.map(a => (
        <div key={a.id} className="border rounded m-4">
          <h3 className="bg-[#436d9e] rounded-t px-3">{a.title}</h3>
          <p className='bg-[#071e26] p-2'>{a.content}</p>
          <form action={removeArticleAction} className="bg-[#071e26] rounded-b">
            <input type="hidden" name="id" value={a.id} />
            <button type="submit" className="bg-red-600 border-red-800 border-2 rounded px-1.5 pb-0.5 m-3">x</button>
          </form>
        </div>
      ))}

      <form action={addArticle} className='border rounded p-3 m-4'>
        <h3 className='font-bold'>Nouveau blog</h3>
        <label className="block my-3">
          Titre : 
          <input className="border mx-14 w-1/2 p-2" name="title" />
        </label>
        <label className="flex items-start gap-4 my-3">
          <span>Contenu :</span>
          <textarea className="border mx-3 w-8/10 p-2" name="content" />
        </label>
        <button className="bg-cyan-600 border-cyan-800 border-2 rounded px-1.5 pb-0.5">Envoyer</button>
      </form>
    </main>
  );    
}
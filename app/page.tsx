import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-zinc-50 dark:bg-black p-1">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Partie Gauche : Grande Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-square shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/metro.jpeg"
              alt="Pixel art metro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Partie Droite : Texte d'intro */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#e2a760]">
            Bienvenue sur mon site !
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            Bonjour ! Je suis Ba Mickaël, étudiant à l'ECAM.
            C'est ici que je partage mes projets, mon CV interactif et mes articles de blog.
            N'hésitez pas à explorer les différentes sections !
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 items-center">
            <Link 
              href="/blog" 
              className="bg-[#e2a760] hover:bg-[#cb9656] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Voir le Blog
            </Link>
            <Link 
              href="/cv" 
              className="bg-white dark:bg-zinc-800 border-2 border-[#e29a60] text-[#e29a60] font-bold py-3 px-6 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all"
            >
              Mon CV
            </Link>
            <Link 
              href="https://www.youtube.com/@DocteurGaufre" 
              className="bg-white dark:bg-zinc-800 border-2 border-[#ff0000] text-white font-bold py-3 px-6 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all"
            >
              YouTube
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}

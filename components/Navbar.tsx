import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavLinkProps) { /*Composant local à NavBar, on ne veut pas exporter ce fichier ailleurs*/
    return (
        <li>
            <Link href={props.href} className="block py-3 px-4 hover:bg-[#609be2]">{props.children}</Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="bg-[#4d7cb5] text-slate-50 shadow-xl sticky top-2 z-50">
            <ul className="container mx-5 flex">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv">CV</NavLink>
                <NavLink href="https://www.youtube.com/@DocteurGaufre">Ma chaîne youtube</NavLink>
                <NavLink href="/blog">Mon Blog</NavLink>
            </ul>
        </nav>
    )
}
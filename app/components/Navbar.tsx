import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavLinkProps) { /*Composant local à NavBar, on ne veut pas exporter ce fichier ailleurs*/
    return (
        <li className="hover:bg-[#609be2] py-2 px-4">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="bg-[#4d7cb5] text-slate-50 shadow-xl">
            <ul className="container mx-auto flex">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv">CV</NavLink>
                <NavLink href="https://www.youtube.com/@DocteurGaufre">Ma chaîne youtube</NavLink>
            </ul>
        </nav>
    )
}
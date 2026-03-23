'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import style from './components/ActiveLink.module.css'


interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SidebarMenuItem = ({path, icon, title, subTitle}: Props) => {
    
    const pathNAme = usePathname();

    return (
        
        <Link href={path} 
              className="w-full px-2 inline-flex space-x-4 items-center border-2 py-3">
            <div>
                <span className="rounded-full w-8 h-8">{icon}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>

        /*
        <Link  href={path} className="w-full px-2 inline-flex space-x-4 items-center border-2 py-3">
            <span className="rounded-full w-8 h-8">{icon}</span>
            <span className="text-lg font-bold leading-5 text-white">{title}</span>
            <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
        </Link>*/
        
    )
}
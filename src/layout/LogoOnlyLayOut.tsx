import Link from "next/link";
import { ReactNode } from "react";




export default function LogoOnlyLayOut({ children }: { children: ReactNode }) {

    return (
        <div>
            <div className="header__logo ml-4">
                <Link href={'/'}>
                    <a ><img src="/img/logo.png" alt="" /></a>
                </Link>
            </div>
            {children}
        </div>
    )
}
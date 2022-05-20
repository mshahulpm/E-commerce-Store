import { ReactNode } from "react";




export default function LogoOnlyLayOut({ children }: { children: ReactNode }) {

    return (
        <div>
            <div className="header__logo ml-4">
                <a href="./index.html"><img src="/img/logo.png" alt="" /></a>
            </div>
            {children}
        </div>
    )
}
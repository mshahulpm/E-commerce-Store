import { ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";




export default function Layout({ children }: { children: ReactNode }) {

    const [openSidebar, setOpenSidebar] = useState(false);



    return (
        <>
            <SideBar open={openSidebar} closeSideBar={setOpenSidebar} />
            <Header handleSideBar={setOpenSidebar} />
            {children}
            <Footer />
        </>
    )

}
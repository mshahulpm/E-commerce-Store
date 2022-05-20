import Auth from "@components/pages/Auth";
import LogoOnlyLayOut from "src/layout/LogoOnlyLayOut";




export default function Index() {


    return (
        <>
            <Auth />
        </>
    )
}


Index.Layout = LogoOnlyLayOut;
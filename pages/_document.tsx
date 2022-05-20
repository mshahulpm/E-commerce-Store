import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import Script from "next/script";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }
    render() {
        // const { locale } = this.props.__NEXT_DATA__;
        return (
            <Html lang="en">
                <Head >
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Ashion Template" />
                    <meta name="keywords" content="Ashion, unica, creative, html" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    {/* <!-- Google Font --> */}
                    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
                        rel="stylesheet" />



                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

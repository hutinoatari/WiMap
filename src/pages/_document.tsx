import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ja">
                <Head />
                <Main />
                <NextScript />
            </Html>
        );
    }
}

export default MyDocument;
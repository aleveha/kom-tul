import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
	public render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;

import type { AppProps } from "next/app";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/github-readme-builder.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

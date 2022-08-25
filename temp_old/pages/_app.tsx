import "temp_old/styles/globals.scss";
import "temp_old/styles/_variables.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
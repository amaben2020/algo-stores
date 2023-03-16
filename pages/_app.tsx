import "flowbite";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { store } from "~/app/redux/store/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;

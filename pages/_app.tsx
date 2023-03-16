import HomePageLoading from "@/components/sections/HomePageLoading";
import "flowbite";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "tailwindcss/tailwind.css";
import { store } from "~/app/redux/store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <PersistGate loading={<HomePageLoading />} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;

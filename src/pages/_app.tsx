import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { GoogleTagManager } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <GoogleTagManager gtmId="GTM-KP266PMD" />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

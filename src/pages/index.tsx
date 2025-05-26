import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { data } from "@/utils/data";
import Head from "next/head";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import { GetStaticPropsContext } from "next";

export default function Home() {
  const t = useTranslations("Index");
  const [step, setStep] = useState(0);

  const goPrev = () => {
    setStep((prev) => prev - 1);
  };

  const goNext = () => {
    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 200);

    return () => clearTimeout(timer);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between gap-6">
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
        <meta name="description" content={t("description")} />
        <meta property="og:description" content={t("description")} />
        <meta name="keywords" content={t("keywords")} />
        <link rel="icon" href="/assets/logo/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <LanguageSwitcher />
        <div className="flex flex-col gap-0 sm:gap-6">
          <Header step={step} goPrev={goPrev} total={data.length - 1} />
          <Content step={step} goNext={goNext} data={data} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const dynamicLocale = locale || "en";
  return {
    props: {
      messages: (await import(`../../messages/${dynamicLocale}.json`)).default,
    },
  };
}

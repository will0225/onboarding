import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("PageLayout");

  return (
    <div className="pb-4 px-4">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center text-gray-500 text-xs font-normal text-center break-words gap-2">
          <a
            className="underline"
            target="_blank"
            href="https://appbooka.com/term-of-use"
          >
            {t("terms")}
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://appbooka.com/privacy-policy"
          >
            {t("privacy")}
          </a>
        </div>
        <p className="text-gray-500 text-xs font-normal text-center min-h-[24px]">
          {t("author")} <br /> {t("copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;

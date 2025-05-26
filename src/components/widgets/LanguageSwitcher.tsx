import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";

type LocaleOption = {
  code: string;
  label: string;
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const t = useTranslations("Language");
  const { route, locale } = router;

  const locales: LocaleOption[] = [
    { code: "en", label: t("en") },
    { code: "es", label: t("es") },
    { code: "fr", label: t("fr") },
    { code: "de", label: t("de") },
    { code: "ru", label: t("ru") },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (newLocale: string) => {
    setIsOpen(false);
    router.push(route, route, { locale: newLocale });
  };

  return (
    <div className="relative inline-block text-left px-4 pt-4">
      <div className="flex justify-end">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none"
        >
          {locales.find((l) => l.code === locale)?.label || "Select Language"}
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-4 z-10 mt-2 w-36 bg-gray-100 rounded-lg shadow-lg">
          <ul>
            {locales.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => changeLanguage(l.code)}
                  className={`${
                    locale === l.code
                      ? "bg-green-200 font-semibold"
                      : "hover:bg-green-500"
                  } block w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

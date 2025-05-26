import Image from "next/image";
import { ButtonSubscribe } from "@/components/widgets/ButtonSubscribe";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import EN_ContratulationImage from "../../../public/assets/subscription/en_onboarding.png";
import ES_ContratulationImage from "../../../public/assets/subscription/es_onboarding.png";
import DE_ContratulationImage from "../../../public/assets/subscription/de_onboarding.png";
import FR_ContratulationImage from "../../../public/assets/subscription/fr_onboarding.png";
import RU_ContratulationImage from "../../../public/assets/subscription/ru_onboarding.png";

const images = {
  en: EN_ContratulationImage,
  es: ES_ContratulationImage,
  de: DE_ContratulationImage,
  fr: FR_ContratulationImage,
  ru: RU_ContratulationImage,
};

export const Subscription = () => {
  const router = useRouter();
  const t = useTranslations("Subscription");

  const start = () => {
    // this is can be a link to shop
    // router.push(process.env.NEXT_PUBLIC_PAYWALL_LINK!);
    //

    const localeID = router.locale || "en"; // get locale code or use EN by default
    console.log(localeID);
    router.push("choose-subscriptions");

  };

  return (
    <div className="mx-auto h-full max-w-[400px]">
      <div className="h-full relative flex flex-col gap-12 opacity-100">
        <div className="space-y-2 flex-initial flex flex-col gap-4">
          <h1 className="text-3xl max-w-[100%] m-auto leading-9 font-bold text-center text-[#27AB26]">
            {t("title")}
          </h1>
          <Image
            src={images[router.locale as keyof typeof images]}
            width={400}
            height={300}
            className="w-full h-auto"
            alt="Subscription Offer"
            placeholder="blur"
          />
          <span className="text-xl max-w-[100%] m-auto leading-9 text-center">
            {t("subtitle")}
          </span>
        </div>
        <ButtonSubscribe handleClick={start}>{t("button")}</ButtonSubscribe>
      </div>
    </div>
  );
};

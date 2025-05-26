import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  age?: string;
  setAge: (age: string) => void;
  goNext: () => void;
  question: Question;
};

export const Age = ({ age, setAge, goNext, question }: Props) => {
  const t = useTranslations("Age");

  const handleGender = (value: string) => {
    setAge(value);
    goNext();
  };

  return (
    <div className="flex flex-col gap-6 pt-2 md:pt-14 max-w-[400px]">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-center text-xl md:text-3xl">
          {t("question")}
        </p>
        <p className="text-center text-sm md:text-base text-gray-500">
          {t("description")}
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {question?.options?.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={option.value}
              name="gender"
              value={option.value}
              className="peer hidden"
              onChange={(e) => handleGender(e.target.value)}
              required
            />

            <label
              htmlFor={option.value}
              className="flex flex-col cursor-pointer items-center transition-transform transform hover:scale-105 rounded-xl"
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={option.image as string}
                  alt={option.value}
                  fill
                  className={`rounded-xl object-cover rounded-t-xl peer-checked:border-primary peer-checked:text-indigo-500 peer-checked:border-2 ${
                    age === option.value ? "border-primary border-2" : ""
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <button
                  className={`flex gap-2 h-12 w-full justify-center items-center bg-primary rounded-b-lg ${
                    age === option.value ? "bg-green-800" : ""
                  }`}
                  onClick={() => handleGender(option.value)}
                >
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-semibold uppercase">
                      {t(`options.${index}`)}
                    </span>
                    <span className="text-white text-xs uppercase">{`${
                      option.value
                    } ${t("years")}`}</span>
                  </div>
                </button>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

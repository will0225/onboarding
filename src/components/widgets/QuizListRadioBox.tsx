import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "use-intl";

type Props = {
  name: string;
  id: string;
  answer?: string;
  setAnswer: (answer: string) => void;
  options: QuizOption[];
  goNext: () => void;
};

export const QuizListRadioBox = ({
  name,
  id,
  answer,
  setAnswer,
  options,
  goNext,
}: Props) => {
  const t = useTranslations();

  const handleAnswer = (value: string) => {
    setAnswer(value);
    goNext();
  };

  return (
    <div className="w-full flex-1 pb-[34px]">
      <div className="flex flex-col gap-6">
        <ul className="grid grid-cols-2 gap-2">
          {options?.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                className="peer hidden"
                onChange={(e) => handleAnswer(e.target.value)}
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
                    className={`rounded-t-xl object-cover rounded-xl peer-checked:border-primary peer-checked:text-indigo-500 peer-checked:border-2 ${
                      answer === option.value ? "border-primary border-2" : ""
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="absolute bottom-0 w-full">
                  <button
                    className={`flex gap-2 h-12 w-full justify-center items-center bg-primary rounded-b-lg items-center ${
                      answer === option.value ? "bg-green-800" : ""
                    }`}
                    onClick={() => handleAnswer(option.value)}
                  >
                    <div className="flex flex-col">
                      <span className="text-white text-sm uppercase">
                        {t(`${id}.options.${index}`)}
                      </span>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 text-white" />
                  </button>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

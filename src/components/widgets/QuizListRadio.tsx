import { useTranslations } from "next-intl";

type Props = {
  name: string;
  id: string;
  answer?: string;
  setAnswer: (answer: string) => void;
  options: QuizOption[];
  goNext: () => void;
};

export const QuizListRadio = ({
  name,
  id,
  answer,
  setAnswer,
  options,
  goNext,
}: Props) => {
  const t = useTranslations();

  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
    goNext();
  };

  return (
    <div className="w-full flex-1 pb-[34px]">
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-5">
          {options?.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                className="peer hidden"
                onChange={handleAnswer}
                required
              />
              <label
                htmlFor={option.value}
                className={`relative group flex gap-6 min-h-[80px] justify-between items-center content-start text-left rounded-lg hover:bg-zinc-300 bg-zinc-200 border border-[transparent] ${
                  option.image ? "pr-16" : ""
                } peer-checked:border-primary peer-checked:bg-green-100 cursor-pointer ${
                  answer === option.value
                    ? "border-primary bg-green-100"
                    : "border-[transparent]"
                }`}
              >
                {option.image && (
                  <div
                    className="bg-contain bg-no-repeat bg-center w-[105px] h-[105px] flex-none rounded-lg"
                    style={{
                      backgroundImage: `url(${option.image})`,
                    }}
                  />
                )}
                <div className="flex w-full px-6 gap-4 items-center">
                  {option.icon && (
                    <span className="text-2xl">{option.icon}</span>
                  )}
                  <span
                    className={`leading-[150%] flex-1 label-text-gray-500 text-base`}
                  >
                    {t(`${id}.options.${index}`)}
                  </span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

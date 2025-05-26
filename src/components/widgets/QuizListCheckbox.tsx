import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "use-intl";

type Props = {
  name: string;
  id: string;
  answer: string[];
  setAnswer: (answers: string[]) => void;
  options: QuizOption[];
};

export const QuizListCheckbox = ({
  name,
  id,
  answer,
  setAnswer,
  options,
}: Props) => {
  const t = useTranslations();

  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setAnswer([...answer, value]);
    } else {
      setAnswer(answer.filter((ans) => ans !== value));
    }
  };

  return (
    <div className="w-full flex-1 pb-[34px]">
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-5">
          {options?.map((option, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={option.value}
                name={name}
                value={option.value}
                className="peer hidden"
                onChange={handleAnswer}
              />
              <label
                htmlFor={option.value}
                className={`relative group flex gap-6 min-h-[70px] justify-between items-center content-start text-left rounded-lg hover:bg-zinc-300 bg-zinc-200 border border-[transparent] ${
                  option.image ? "pr-16" : ""
                } peer-checked:border-primary peer-checked:bg-green-100 cursor-pointer ${
                  answer.includes(option.value)
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
                  {answer.includes(option.value) && (
                    <CheckCircleIcon className="absolute right-2 w-6 h-6 text-green-600" />
                  )}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

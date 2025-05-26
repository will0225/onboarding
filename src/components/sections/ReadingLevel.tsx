import { QuizListRadioBox } from "@/components/widgets/QuizListRadioBox";
import { QuizTitle } from "@/components/widgets/QuizTitle";
import { useTranslations } from "use-intl";

type Props = {
  answer?: string;
  setAnswer: (answer: string) => void;
  question: Question;
  goNext: () => void;
};

export const ReadingLevel = ({
  answer,
  setAnswer,
  question,
  goNext,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="mx-auto h-full max-w-[400px] flex flex-col gap-6">
      <div className="h-full">
        <div className="h-full relative flex flex-col gap-5 opacity-100">
          <QuizTitle title={t("ReadingLevel.question")} />
          <QuizListRadioBox
            name={"reading-level"}
            id="ReadingLevel"
            answer={answer}
            setAnswer={setAnswer}
            options={question.options ?? []}
            goNext={goNext}
          />
        </div>
      </div>
    </div>
  );
};

import { QuizListRadio } from "@/components/widgets/QuizListRadio";
import { QuizTitle } from "@/components/widgets/QuizTitle";
import { useTranslations } from "next-intl";

type Props = {
  answer?: string;
  setAnswer: (answer: string) => void;
  question: Question;
  goNext: () => void;
};

export const EmotionalConnection = ({
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
          <QuizTitle
            title={t("EmotionalConnection.question")}
            description={t("EmotionalConnection.description")}
          />
          <QuizListRadio
            name={"emotional-connection"}
            id="EmotionalConnection"
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

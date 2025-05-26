import { QuizListCheckbox } from "@/components/widgets/QuizListCheckbox";
import { QuizTitle } from "@/components/widgets/QuizTitle";
import { Button } from "../widgets/Button";
import { useTranslations } from "use-intl";

type Props = {
  goNext: () => void;
  answer: string[];
  setAnswer: (answer: string[]) => void;
  question: Question;
};

export const Interest = ({ goNext, answer, setAnswer, question }: Props) => {
  const t = useTranslations();

  return (
    <div className="mx-auto h-full max-w-[400px] flex flex-col gap-6">
      <div className="h-full">
        <div className="h-full relative flex flex-col gap-5 opacity-100">
          <QuizTitle
            title={t("Interest.question")}
            description={t("Interest.description")}
          />
          <QuizListCheckbox
            name={"interest"}
            id="Interest"
            answer={answer}
            setAnswer={setAnswer}
            options={question.options ?? []}
          />
          <Button handleClick={goNext}>{t("PageLayout.nextbutton")}</Button>
        </div>
      </div>
    </div>
  );
};

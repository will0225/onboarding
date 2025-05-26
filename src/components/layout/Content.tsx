import { useState } from "react";
import { ReadingMode } from "../sections/ReadingMode";
import { EmotionalConnection } from "../sections/EmotionalConnection";
import { ReadingTime } from "../sections/ReadingTime";
import { Hobbies } from "../sections/Hobbies";
import { Characters } from "../sections/Characters";
import { Age } from "../sections/Age";
import { Interest } from "../sections/Interest";
import { ReadingLevel } from "../sections/ReadingLevel";
import { Subscription } from "../payment/Subscription";

type Props = {
  step: number;
  goNext: () => void;
  data: Question[];
};

const Content = ({ step, goNext, data }: Props) => {
  const [age, setAge] = useState<string>();
  const [interest, setInterest] = useState<string[]>([]);
  const [characters, setCharacters] = useState<string>();
  const [readingLevel, setReadingLevel] = useState<string>();
  const [readingMode, setReadingMode] = useState<string>();
  const [hobbies, setHobbies] = useState<string>();
  const [readingTime, setReadingTime] = useState<string>();
  const [emotionalConnection, setEmotionalConnection] = useState<string>();

  return (
    <div className="flex justify-center px-4">
      {(() => {
        switch (step) {
          case 0:
            return (
              <Age
                setAge={setAge}
                age={age}
                goNext={goNext}
                question={data[step]}
              />
            );
          case 1:
            return (
              <Interest
                goNext={goNext}
                answer={interest}
                setAnswer={setInterest}
                question={data[step]}
              />
            );
          case 2:
            return (
              <Characters
                answer={characters}
                setAnswer={setCharacters}
                question={data[step]}
                goNext={goNext}
              />
            );
          case 3:
            return (
              <ReadingLevel
                answer={readingLevel}
                setAnswer={setReadingLevel}
                question={data[step]}
                goNext={goNext}
              />
            );
          case 4:
            return (
              <ReadingMode
                answer={readingMode}
                setAnswer={setReadingMode}
                question={data[step]}
                goNext={goNext}
              />
            );
          case 5:
            return (
              <Hobbies
                answer={hobbies}
                setAnswer={setHobbies}
                question={data[step]}
                goNext={goNext}
              />
            );
          case 6:
            return (
              <ReadingTime
                answer={readingTime}
                setAnswer={setReadingTime}
                question={data[step]}
                goNext={goNext}
              />
            );
          case 7:
            return (
              <EmotionalConnection
                answer={emotionalConnection}
                setAnswer={setEmotionalConnection}
                question={data[step]}
                goNext={goNext}
              />
            );
          default:
            return <Subscription />;
        }
      })()}
    </div>
  );
};

export default Content;

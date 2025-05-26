type Props = {
  title: string;
  description?: string;
};

export const QuizTitle = ({ title, description }: Props) => {
  return (
    <div className="space-y-2 flex-initial">
      <h1 className="text-2xl max-w-[100%] m-auto leading-9 font-bold text-center">
        {title}
      </h1>
      <span className="text-center text-base text-gray-500">{description}</span>
    </div>
  );
};

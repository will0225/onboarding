import { ReactNode, MouseEvent, useState } from "react";

type ButtonProps = {
  children: string | ReactNode;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
};
export const Button = ({ children, handleClick }: ButtonProps) => {
  const [effect, setEffect] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <button
          className={`w-full ${
            effect && "animate-wiggle"
          } bg-primary p-4 text-white rounded hover:bg-green-500 hover:shadow-xl rounded-full`}
          onClick={(event) => {
            setEffect(true);
            handleClick(event);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

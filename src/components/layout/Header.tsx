import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "../../../public/assets/logo/Logo_transp_96x96.png";

type Props = {
  step: number;
  goPrev: () => void;
  total: number;
};

const Header = ({ step, goPrev, total }: Props) => {
  return (
    <div className="flex w-full justify-center items-center px-4 py-2">
      {step && step <= total ? (
        <div className="max-w-[400px] w-full flex flex-col gap-3">
          <div className="relative flex justify-center">
            <div
              className="left-0 top-[50%] -translate-y-1/2 absolute cursor-pointer"
              onClick={goPrev}
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={64}
                height={64}
              />
            </Link>

            <div className="right-0 top-[50%] -translate-y-1/2 absolute">
              <div className="text-xs font-semibold text-gray-500">
                <span className="text-green-600">{step} /</span> {total}
              </div>
            </div>
          </div>
          <div className="rounded-[16px] overflow-hidden bg-gray-100 relative">
            <div
              className="bg-primary transition-all duration-[400ms] ease-in-out"
              style={{ width: `${(step / total) * 100}%`, height: "4px" }}
            ></div>
          </div>
        </div>
      ) : (
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={96}
            height={96}
          />
        </Link>
      )}
    </div>
  );
};

export default Header;

import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export default function Modal({ open, onClose, children }: Props) {
  return (
    <div
      onClick={onClose}
      className={`w-full fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-[#951d1d03] backdrop-blur-[10px]" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-2xl border-[#EE2C1B]/10 border bg-[#100F12] rounded-xl shadow p-6 transition-all w-[450px] h-[477px] flex-shrink ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-[18px] rounded-lg text-white bg-transparent hover:bg-gray-50 hover:text-gray-600"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
}

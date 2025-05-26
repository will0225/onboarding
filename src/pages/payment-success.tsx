// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const PaymentSuccess = () => {
//   const navigate = useNavigate();
  const navigate = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center to-white">
      <div className="w-full max-w-md p-10 rounded-xl glass shadow-xl mt-8 text-center animate-scale-in border-4 border-green-300">
        <h2 className="text-2xl font-bold mb-4 text-green-600"></h2>
        <p className="mb-4 text-gray-600">
        Thank you for subscribing to Booka. 🎉 <br />
        Your child’s reading adventure begins now!
        </p>
        <button
          className="mt-6 py-2 px-6 rounded-full font-semibold text-white green shadow-md hover:scale-105 transition"
          style={{ background: "green" }}
          onClick={() => navigate.push("/")}
        >
          Start Reading
        </button>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        (In real app: Subscription info is sent to RevenueCat and your admin panel now.)
      </div>
    </div>
  );
};

export default PaymentSuccess;
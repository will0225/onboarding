import React, { useState } from "react";

const plans = [
  {
    title: "Annual Plan",
    price: "$59.99",
    duration: "per year",
    highlight: "Best Value",
    trial: null,
    description: "Full access for 1 year.\nNo trial, one upfront payment.",
    btnText: "Go Annual",
    link: "/registration?plan=annual",
    bg: "white",
    border: "border-4 border-green-300",
  },
  {
    title: "Monthly Plan",
    price: "$9.99",
    duration: "per month",
    trial: "7-day free trial",
    description: "Trial first. Billed monthly after trial period ends.",
    btnText: "7 Days Free",
    link: "/registration?plan=monthly",
    bg: "white",
    border: "border-4 border-green-300",
  },
];



const ChooseSubscription = () => {

  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (priceId: string) => {
    setLoading(true);
    try {
      const res = await fetch('/onboarding/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
    

      const data = await res.json();
    
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to redirect to Stripe');
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-xl p-8 rounded-2xl glass shadow-2xl mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center animate-fade-in">
        Unlock the Full Booka Experience
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
        Thousands of narrated picture books for kids — all in one joyful reading app.        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col items-center p-8 rounded-xl ${plan.bg} ${plan.border} shadow-lg animate-scale-in transition-all duration-300 hover:scale-105`}
            >
              {/* {plan.highlight && (
                <span className="absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  {plan.highlight}
                </span>
              )} */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h2>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                {/* <span className="text-gray-500 mb-1">{plan.duration}</span> */}
              </div>
              {plan.trial && (
                <span className="mt-2 mb-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
                  {plan.trial}
                </span>
              )}
              <p className="text-gray-600 my-3 whitespace-pre-line text-center text-md min-h-[48px]">{plan.description}</p>
              <button
                className="mt-4 w-full py-2 px-5 rounded-lg font-bold text-xl bg-vividPurple text-white shadow-md hover:bg-purple-600 focus:outline-none transition hover-scale"
                style={{ background: "#27AB26" }}
                onClick={() => { 
                    let priceId = "";
                    if(plan.title == "Annual Plan") {
                        priceId = "price_1RMqQ2Fm4yoAX8KtAu6IoN3U";
                    } else {
                        priceId = "price_1RMqP9Fm4yoAX8KtXWdic6yU";
                    }
                    handleSubscribe(priceId)
                }}
                disabled={loading}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <span className="text-gray-500 text-sm">
            Secure payments powered by Stripe.
          </span>
        </div>
      </div>
    </div>
  );
};
export default ChooseSubscription;
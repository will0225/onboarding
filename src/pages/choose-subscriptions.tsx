import React, { useState } from "react";

const plans = [
  {
    title: "Annual Plan",
    price: "$89.99",
    duration: "per year",
    highlight: "Best Value",
    trial: null,
    description: "Full access for 1 year.\nNo trial, one upfront payment.",
    btnText: "Go Annual",
    link: "/registration?plan=annual",
    bg: "bg-[#83cb82]",
    border: "border-4 border-green-300",
  },
  {
    title: "Monthly Plan",
    price: "$9.99",
    duration: "per month",
    trial: "7-day free trial",
    description: "Trial first. Billed monthly after trial period ends.",
    btnText: "Try for Free",
    link: "/registration?plan=monthly",
    bg: "bg-[#53bf52]",
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
      <div className="max-w-9/10 p-8 rounded-2xl glass  mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center animate-fade-in">
        Unlock the Full Booka Experience
        </h1>
        <p className="text-lg text-#2a2a2a-600 mb-8 text-center" >
        Thousands of narrated picture books for kids — all in one joyful reading app.        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col  p-8 rounded-xl ${plan.bg}  shadow-lg animate-scale-in transition-all duration-300 hover:scale-105`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full font-semibold shadow bg-[#ff6909]">
                  {plan.highlight}
                </span>
              )}
              <h2 className="font-semibold text-white  text-3xl mb-2">{plan.title}</h2>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-white mb-1">{plan.duration}</span>
              </div>
              {/* {plan.trial && (
                <span className="mt-2 mb-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
                  {plan.trial}
                </span>
              )} */}
              <p className="text-black-600 my-3 whitespace-pre-line  text-md min-h-[48px]">{plan.description}</p>
              <button
                className="mt-4 w-full py-2 px-5 rounded-lg  font-bold text-xl bg-vividPurple bg-white text-black shadow-md  focus:outline-none transition hover-scale"
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
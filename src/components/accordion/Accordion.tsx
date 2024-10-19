import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionData: AccordionItem[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time, and you will not be charged for the next billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, contact support for more information.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and yearly billing options. You will be billed on the same date every month or year.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your account email from your profile settings.",
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-20 space-y-4">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-4 "
        >
          {/* Button za pitanje */}
          <button
            className="w-full flex justify-between items-center py-4 bg-white text-gray-900 focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            {item.question}
            <div
              className={
                'rounded-full border-2 border-primary-600 w-5 h-5 flex justify-center items-center'
              }
            >
              <span
                className={`w-full h-full flex items-center justify-center transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                } text-primary-600 font-bold font-mono text-sm leading-none`}
              >
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600 mt-2 font-normal text-base pl-5 pr-10">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

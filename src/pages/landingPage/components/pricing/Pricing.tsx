import Check from '../../../../assets/pricing/Check.svg';
import {Divider} from "../../../../components/divider/Divider.tsx";

const subPlan = [
  {
    perMonth: "per month",
    price: "$10",
    plan: "Basic Plan",
    planExp: "Our most popular plan for small teams.",
    everything: "Everything in our free plan plus....",
  },
  {
    perMonth: "per month",
    price: "$20",
    plan: "Pro Plan",
    planExp: "For growing teams with advanced needs.",
    everything: "Our most popular plan for small teams.",
  },
];

const features = [
  {
    features: [
      "Access to basic features",
      "Basic reporting + analytics",
      "Up to 10 individual users",
      "20GB individual data",
      "Basic chat support",
      "Attend events",
      "Automatic updates",
      "Backup your account",
      "Audit log and notes",
      "Feature requests",
    ],
  },
  {
    features: [
      "200+ integrations",
      "Advanced reporting",
      "Up to 20 individual users",
      "40GB individual data",
      "Priority chat support",
      "Advanced custom fields",
      "Audit log and data history",
      "Backup your account",
      "Personalised service",
      "+ many more...",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <Divider/>
    <div className={'px-6'}>
      <div className={'flex flex-col items-center gap-4 py-16'}>
        <div>
          <p className={'text-primary-700 font-semibold'}>Pricing</p>
        </div>

        <h2 className={'text-gray-900 text-4xl text-center'}>
          Plans that fit your scale
        </h2>
        <p className={'text-gray-500 text-center font-normal text-lg'}>
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
      </div>

      {subPlan.map((plan, index) => (
        <div key={index}>
          <div className={'border-gray-200 border-t border-l border-r rounded-t-3xl px-6 py-8 w-full'}>
            <div className={'flex gap-1 mb-5 items-end'}>
              <h2 className={'text-gray-900 font-semibold text-5xl'}>{plan.price}</h2>
              <p className={'text-base text-gray-500 font-medium text-base'}>{plan.perMonth}</p>
            </div>

            <div className={'flex flex-col gap-1'}>
              <h3 className={'text-gray-900 text-xl font-semibold'}>{plan.plan}</h3>
              <p className={'text-gray-500 text-base font-normal'}>{plan.planExp}</p>
            </div>
          </div>
          <div className={'border-gray-200 border p-4 w-full flex flex-col gap-1 py-10'}>
              <h3 className={'text-gray-900 font-semibold text-base'}>Features</h3>
              <p className={'font-normal text-base text-gray-500'}>{plan.everything}</p>
            <ul
              className="flex flex-col gap-4 mt-5">
              {features[index].features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4">
                  <img src={Check} alt="Check"/>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={'border-gray-200 border-l border-r border-b mb-14 p-6 rounded-b-3xl shadow-lg'}>
            <button
              className={'font-medium text-base text-white'}
            >
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};

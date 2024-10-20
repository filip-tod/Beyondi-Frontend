import Dashboard from '../../../../assets/features/Content.png';
import DashboardDesc from '../../../../assets/features/DescktopContent.png';
import Mail from '../../../../assets/subHeading/mail.svg';
import Zap from '../../../../assets/subHeading/zap.svg';
import Chart from '../../../../assets/subHeading/bar-chart-2.svg';
import ArrowRight from '../../../../assets/integrations/arrow-right.svg';

const array = [
  {
    icon: Mail,
    title: "Share team inboxes",
    paragraph:"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
  },

  {
    icon: Zap,
    title: "Deliver instant answers",
    paragraph:"An all-in-one customer service platform that helps you balance everything your customers need to be happy."
  },

  {
    icon: Chart,
    title: "Manage your team with reports",
    paragraph:"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  },
]

export const Features = () => {
  return(
    <div className={'md:p-20'}>
      <div className={'flex flex-col items-center gap-4 p-6 md:p-0'}>
        <div className={'px-2 py-0.5 rounded-2xl bg-primary-50'}>
          <p className={'text-primary-700 font-medium'}>Features</p>
        </div>

        <h2 className={'text-gray-900 text-3xl text-center font-semibold'}>
          Cutting-edge features for advanced analytics
        </h2>

        <p className={'text-gray-500 text-center text-lg md:max-w-3xl'}>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted
          by over 4,000 startups.
        </p>

        <div className={'my-5 hidden md:flex'}>
          <img
            src={DashboardDesc}
            className={'w-fit h-auto'}
          />
        </div>

        <div className={'my-5 md:hidden'}>
          <img
            src={Dashboard}
          />
        </div>
      </div>


      <div className={'flex flex-col mb-10 md:items-center md:justify-center md:flex-row md:gap-2'}>
        {array.map((item) => (
          <div className={'flex flex-col items-center gap-2 p-6 md:p-0 md:px-5'}>
            <div className={'bg-primary-50 p-2 rounded-full'}>
              <div className={'bg-primary-100 p-2 rounded-full'}>
          <img
          src={item.icon}
          alt={item.title}
          />
              </div>
            </div>
            <h2 className={'text-gray-900 font-medium text-lg'}>
              {item.title}
            </h2>
            <p className={'text-gray-500 text-center font-normal text-base md:max-w-md'}>{item.paragraph}</p>

            <div className={'flex cursor-pointer gap-2'}>
              <p className={'text-primary-700 font-normal hover:text-primary-900 text-base'}>Learn More</p>
              <img
              src={ArrowRight}
              alt={'arrow right'}
              />
            </div>
          </div>
        ))}


      </div>
    </div>

  );
}
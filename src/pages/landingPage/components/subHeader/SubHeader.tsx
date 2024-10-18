import Mail from '../../../../assets/subHeading/mail.svg';
import Zap from '../../../../assets/subHeading/zap.svg';
import Chart from '../../../../assets/subHeading/bar-chart-2.svg';


export const SubHeader = () => {
return(
  <div className={'flex flex-col  bg-gray-50 w-full  gap-8 py-16 px-5 mb-10'}>
    <div className={'flex flex-col gap-2 items-center'}>
      <div className={'bg-primary-50 p-2 rounded-full'}>
      <div className={'bg-primary-100 p-2 rounded-full'}>
        <img
          src={Mail}
        />
      </div>
      </div>
      <h2 className={'text-gray-900 font-normal text-lg'}>Share team inboxes</h2>
      <p className={'font-normal text-base text-gray-500 text-center'}>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the
        loop.</p>
    </div>

    <div className={'flex flex-col gap-2 items-center'}>
      <div className={'bg-primary-50 p-2 rounded-full'}>
        <div className={'bg-primary-100 p-2 rounded-full'}>
        <img
          src={Zap}
        />
      </div>
      </div>
      <h2 className={'text-gray-900 font-normal text-lg'}>Deliver instant answers</h2>
      <p className={'font-normal text-base text-gray-500 text-center'}>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
    </div>

    <div className={'flex flex-col gap-2 items-center'}>
      <div className={'bg-primary-50 p-2 rounded-full'}>
      <div className={'bg-primary-100 p-2 rounded-full'}>
        <img
          src={Chart}
        />
      </div>
      </div>
      <h2 className={'text-gray-900 font-normal text-lg'}>Manage your team with reports</h2>
      <p className={'font-normal text-base text-gray-500 text-center'}>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in
        a couple clicks..</p>
    </div>

  </div>
);
}
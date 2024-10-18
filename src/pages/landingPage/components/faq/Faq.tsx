import {Divider} from "../../../../components/divider/Divider.tsx";
import {Accordion} from "../../../../components/accordion/Accordion.tsx";
import Group from '../../../../assets/faq/Avatar group.png';

export const Faq = () => {
  return (
    <div className={'mb-16'}>

      <Divider/>

      <div className={'mt-14 items-center flex flex-col gap-4 pb-4'}>
        <h2 className={'font-semibold text-3xl text-gray-900 text-center'}>
          Frequently asked questions
        </h2>
        <p className={'font-normal text-gray-500 text-lg text-center'}>
          Everything you need to know about the product and billing.
        </p>

        <Accordion/>
      </div>

      <div className={' p-2'}>
        <div className={' flex flex-col gap-4 items-center justify-center bg-gray-50 rounded-2xl py-8 px-2'}>
        <div>
          <img
          src={Group}
          />
        </div>

        <h3 className={'text-gray-900 font-medium text-xl'}>Still have questions?</h3>
        <p  className={'text-gray-500 text-base font-medium  text-center'}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>

          <div>
            <button>Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
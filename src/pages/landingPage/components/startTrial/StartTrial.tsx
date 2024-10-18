export const StartTrial = () => {
  return (
    <div className={'bg-primary-800 flex flex-col items-center justify-center gap-6 pt-16 pb-16 mb-16'}>

      <div className={'flex flex-col gap-2 px-6'}>
        <h2 className={'text-3xl text-white font-semibold text-center'}>Start your free trial </h2>
        <p className={'text-lg text-primary-200 font-normal text-center'}>
          Join over 4,000+ startups already growing with Untitled.
        </p>
      </div>


      <div className={' flex flex-col gap-4 w-full px-4'}>
        <button>
          Get started
        </button>

        <button
        className={'bg-white text-base text-gray-700 font-medium'}>
          Learn More
        </button>
      </div>

    </div>
  );
}
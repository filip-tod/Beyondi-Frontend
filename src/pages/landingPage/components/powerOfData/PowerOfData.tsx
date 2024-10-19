
const powerOfData = [
  {
    value: "400+",
    title: "Projects completed",
  },
  {
    value: "600%",
    title: "Return on investment",
  },
  {
    value: "10k",
    title: "Global downloads",
  },
]
export const PowerOfData = () => {
  return (
    <div className={'p-4  mb-10'}>
    <div className={'flex flex-col items-center p-4 bg-primary-50 md:bg-white rounded-2xl md:px-20'}>
      <div className={'p-6 gap-4 flex flex-col'}>
        <h2 className={' text-primary-900 text-center text-3xl font-semibold md:text-4xl md:text-gray-900'}>Unleash the full power of data</h2>
        <p className={'text-lg text-primary-700 text-center font-normal md:text-gray-500 md:text-xl'}>Everything you need to convert, engage, and retain more
          users.</p>
      </div>

<div className={'md:bg-primary-50 md:rounded-2xl md:py-16 w-full md:gap-24 flex flex-col md:flex-row items-center justify-center'}>
      {/*dinamicki generiran jer u web view treba taj box imati bg a ne parent*/}
      {powerOfData.map((powerOfData) => (
        <div className={'flex flex-col items-center justify-center gap-2 mb-5 mt-5 '}>
          <h2 className={'text-5xl text-primary-600 font-semibold'}>{powerOfData.value}</h2>
          <p className={'text-lg font-normal text-primary-900'}>{powerOfData.title}</p>
      </div>
      ))}
</div>
    </div>
    </div>

  );
};

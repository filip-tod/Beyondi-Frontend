
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
    <div className={'flex flex-col items-center p-4 bg-primary-50 rounded-2xl'}>
      <div className={'p-6 gap-4 flex flex-col'}>
        <h2 className={' text-primary-900 text-center text-3xl font-semibold '}>Unleash the full power of data</h2>
        <p className={'text-lg text-primary-700 text-center font-normal'}>Everything you need to convert, engage, and retain more
          users.</p>
      </div>


      {/*dinamicki generiran jer u web view treba taj box imati bg a ne parent*/}
      {powerOfData.map((powerOfData) => (
        <div className={'flex flex-col items-center justify-center gap-2 mb-5 mt-5'}>
          <h2 className={'text-5xl text-primary-600 font-semibold'}>{powerOfData.value}</h2>
          <p className={'text-lg font-normal text-primary-900'}>{powerOfData.title}</p>
      </div>
      ))}
    </div>
    </div>

  );
};

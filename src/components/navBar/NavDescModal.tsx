import Book from '../../assets/nav/book.svg';
import Zap from '../../assets/nav/zap.svg';
import Play from '../../assets/nav/play-circle.svg';
import China from '../../assets/nav/ChineseGirl.png';


const array = [
  {
    icon:Book,
    title:'Blog',
    paragraph:'The latest industry news, updates and info.'
  },

  {
    icon:Zap,
    title:'Customer stories',
    paragraph:'Learn how our customers are making big changes.'
  },

  {
    icon:Play,
    title:'Video tutorials',
    paragraph:'Get up and running on new features and techniques.'
  }
]

export const NavDescModal = () => {
  return (
    <div className={'absolute bg-white  z-10 border border-b-gray-200 shadow-lg rounded-lg left-20 top-20'}>
      <div className={'flex'}>
        <div className={'flex flex-col gap-6 border-l justify-center  border-b-gray-200 p-6 max-w-sm'}>
          {array.map((item) => (
            <div className={'flex items-start gap-4'}>
              <div>
                <img src={item.icon}/>
              </div>
              <div className={'flex flex-col'}>
                <h2 className={'text-gray-900 font-semibold text-base'}>{item.title}</h2>
                <p className={'text-gray-500 text-sm font-medium'}>{item.paragraph}</p>
              </div>
            </div>
          ))}

        </div>

        <div className={'flex flex-col  bg-gray-50 p-6 max-w-sm'}>
        <div className={'mb-8'}>
          <img
          src={China}
          />
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'text-gray-900 text-base  font-normal'}>We've just released an update!</h2>
          <p className={'text-gray-500 font-medium text-sm'}>Check out the all new dashboard view. Pages now load faster. </p>
          <p className={'text-gray-500 font-medium text-sm'}>Dismiss <span className={'text-primary-700 font-medium text-sm'}>Changelog</span></p>
        </div>
        </div>
      </div>
    </div>
  );
}
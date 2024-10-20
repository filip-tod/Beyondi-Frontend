import CoinBase from '../../../../assets/trustedCompany/CoinBase.png';
import Spotify from '../../../../assets/trustedCompany/Spotify.png';
import Slack from '../../../../assets/trustedCompany/Slack.png';  // Ispravljen nedostatak navodnika
import DropBox from '../../../../assets/trustedCompany/DropBox.png';
import WebFlow from '../../../../assets/trustedCompany/WebFlow.png';
import Zoom from '../../../../assets/trustedCompany/Zoom.png';

const images = [
  { img: CoinBase, name: 'CoinBase' },
  { img: Spotify, name: 'Spotify' },
  { img: Slack, name: 'Slack' },
  { img: DropBox, name: 'DropBox' },
  { img: WebFlow, name: 'WebFlow' },
  { img: Zoom, name: 'Zoom' },
];

export const TrustedCompany = () => {
  return (
    <div className="hidden md:flex md:w-full md:px-20 md:mb-20">

      <div className={'bg-gray-50 flex flex-col items-center justify-center w-full rounded-2xl py-16'}>
        <h2 className={'text-gray-500 text-xl font-normal'}>
          Trusted by 4,000+ companies
        </h2>

        <div className="flex flex-wrap justify-between p-10 gap-2 w-full mt-8">
          {images.map((img, i) => (
            <div>
            <img
              key={i}
              src={img.img}
              alt={img.name}
              className="h-12 w-auto object-contain"
            />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

import Notion from '../../../../assets/integrations/notion.svg';
import ArrowRight from '../../../../assets/integrations/arrow-right.svg';
import Slack from '../../../../assets/integrations/slack.svg';
import GoogleDrive from '../../../../assets/integrations/google_drive.svg';
import Intercom from '../../../../assets/integrations/intercom.svg';
import Jira from '../../../../assets/integrations/jira.svg';
import DropBox from '../../../../assets/integrations/dropbox.svg';

const integrations = [
  {
    image: Notion,
    title: 'Notion integration',
    description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
  },
  {
    image: Slack,
    title: 'Slack integration',
    description: 'Work faster and smarter by integrating directly with Slack, right in the app.',
  },
  {
    image: GoogleDrive,
    title: 'Google Drive integration',
    description: 'Work faster and smarter by integrating directly with Google Drive, right in the app.',
  },
  {
    image: Intercom,
    title: 'Intercom integration',
    description: 'Work faster and smarter by integrating directly with Intercom, right in the app.',
  },
  {
    image: Jira,
    title: 'Jira integration',
    description: 'Work faster and smarter by integrating directly with Jira, right in the app.',
  },
  {
    image: DropBox,
    title: 'Dropbox integration',
    description: 'Work faster and smarter by integrating directly with Dropbox, right in the app.',
  },
];

export const Integrations = () => {
  return (
    <div className={'flex flex-col  px-6 py-6 gap-10 mb-10'}>

      <div className={'flex flex-col justify-center items-center gap-5'}>
        <div className={'p-2 rounded-2xl bg-primary-50'}>
          <p className={'text-primary-700 font-medium'}>Integrations</p>
        </div>
        <h2 className={'font-semibold text-4xl text-center'}>Get more value from your tools</h2>
        <p className={'text-gray-500 text-center text-lg md:max-w-3xl'}>
          Connect your tools, connect your teams. With over 100 apps already available in our directory,
          your team’s favourite tools are just a click away.
        </p>
      </div>

      {/* Dinamičko generiranje integracija */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {integrations.map((integration, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2 p-4">
            <div className="p-2 rounded-2xl bg-primary-50">
              <img src={integration.image} alt="Providers"/>
            </div>
            <h2 className="font-bold text-lg text-center">{integration.title}</h2>
            <p className="text-gray-500 text-center text-lg max-w-80">{integration.description}</p>
            <div className="flex  cursor-pointer gap-2">
              <p className="text-primary-700 hover:text-primary-900 font-medium ">View integration</p>
              <img src={ArrowRight} alt="Arrow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

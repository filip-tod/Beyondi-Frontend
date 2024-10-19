import {Header} from "./components/header/Header.tsx";
import {SubHeader} from "./components/subHeader/SubHeader.tsx";
import {Integrations} from "./components/integrations/Integrations.tsx";
import {PowerOfData} from "./components/powerOfData/PowerOfData.tsx";
import {Features} from "./components/features/Features.tsx";
import {Pricing} from "./components/pricing/Pricing.tsx";
import {Faq} from "./components/faq/Faq.tsx";
import {StartTrial} from "./components/startTrial/StartTrial.tsx";
import {TrustedCompany} from "./components/trustedCompany/TrustedCompany.tsx";

export const LandingPage = () => {
  return(
    <>
    <Header/>
    <SubHeader/>
      <Integrations/>
      <PowerOfData/>
      <Features/>
      <Pricing/>
      <Faq/>
      <TrustedCompany/>
      <StartTrial/>
    </>
  );
}
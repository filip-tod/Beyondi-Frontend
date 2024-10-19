import styles from './Header.module.css';
import LinesRight from '../../../../assets/heading/LinePatternRight.png';
import LinesLeft from '../../../../assets/heading/LinePatternLeft.png';
import {ChartComponent} from "../../../../components/Chart/ChartComponent.tsx";

export const Header = () => {
  return(
    <div className={'md:px-12 '}>
   <div
     style={{ background: 'var(--gradient-primary)' }}
      className={'md:rounded-3xl '}
   >
     <div className={'md:px-40 w-full flex flex-col items-center justify-center py-20 px-4'}>
       <h1 className={styles.heading}>Grow your users.</h1>
       <h2 className={styles.headingTwo}>Smarter.</h2>
       <p className={styles.headingP}>
         Powerful, self-serve product and growth analytics to help you convert,
         engage, and retain more users.
         Trusted by over 4,000 startups.
       </p>

       <div className={'w-full md:w-auto '}>
         <div className="flex flex-col md:flex-row md:w-full md:gap-2">
           <input
             type='text'
             placeholder={'Enter your email'}
             className={'md:w-96'}
           />
           <div className={'w-full mb-2 mt-2 md:hidden'}>
             <p className={styles.privacyP}>
               We care about your data in our <a>privacy policy.</a>
             </p>
           </div>

           <button
             className="md:w-[unset]"
           >
             Get started
           </button>
         </div>
         <div className={'w-full mt-5  mb-2 hidden md:flex'}>
           <p className={styles.privacyP}>
             We care about your data in our <a>privacy policy.</a>
           </p>
         </div>
       </div>

     </div>
   </div>


      <div className={''}>
        <div className={'w-full flex items-center justify-center '}>


          <ChartComponent/>
        </div>


        <img
          className={styles.LinesRight}
          src={LinesRight}

        />
        <img
          className={styles.LinesLeft}
          src={LinesLeft}
        />
      </div>
    </div>
  );
}
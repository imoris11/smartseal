import React,{useEffect} from 'react';
import Banner from '../../components/banner/banner';
import Registration from '../../components/registration/registration';
import Protection from '../../components/protection/protection';
import HowItWorks from '../../components/how-it-works/how-it-works';
import Experience from '../../components/experience/experience';
import TellUs from '../../components/tell-us/tell-us';

function Home() {
   useEffect(() => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }, []);
  return (
    <div className={'more'}>
      <Banner />
      <Experience />
      <Protection />
      <Registration />
      <HowItWorks />
      <TellUs />
    </div>
  );
}

export default Home;

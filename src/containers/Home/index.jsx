import React from 'react';
import Banner from '../../components/banner/banner';
import Registration from '../../components/registration/registration';
import Protection from '../../components/protection/protection';
import HowItWorks from '../../components/how-it-works/how-it-works';
import Stories from '../../components/stories/stories';
import Experience from '../../components/experience/experience';
import TellUs from '../../components/tell-us/tell-us';

function Home() {
  return (
    <div className={'more'}>
      <Banner />
      <Experience />
      <Protection />
      <Registration />
      <HowItWorks />
      <TellUs />
      <Stories />
    </div>
  );
}

export default Home;

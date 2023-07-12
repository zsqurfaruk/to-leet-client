import React from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';
import { useSelector } from 'react-redux';

const About = () => {
  const lang = useSelector((state:any) => state.language.language);
  return (
    <>
      {
        !lang ? <AboutEng></AboutEng> : <AboutBan></AboutBan>
      }
    </>
  );
};

export default About;
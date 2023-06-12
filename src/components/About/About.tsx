import React from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';
import Cookies from 'js-cookie';

const About = () => {
  const lang = Cookies.get("lan")
  return (
    <>
      {
        !lang ? <AboutEng></AboutEng> : <AboutBan></AboutBan>
      }
    </>
  );
};

export default About;
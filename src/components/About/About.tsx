import React from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';
import Cookies from 'js-cookie';

const About = () => {
  const lang = Cookies.get("lan")
  return (
    <div>
      {
        !lang ? <AboutEng></AboutEng> : <AboutBan></AboutBan>
      }
    </div>
  );
};

export default About;
import React from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';

const About = () => {
  const lang = localStorage.getItem("lan")
  return (
    <div>
      {
        lang ? <AboutEng></AboutEng> : <AboutBan></AboutBan>
      }
    </div>
  );
};

export default About;
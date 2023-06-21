import React,{useContext} from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';
import Cookies from 'js-cookie';
import { FilterContext } from '@/Context/FilterContext/FilterContext';

const About = () => {
  const {lang}:any = useContext(FilterContext)
  return (
    <>
      {
        !lang ? <AboutEng></AboutEng> : <AboutBan></AboutBan>
      }
    </>
  );
};

export default About;
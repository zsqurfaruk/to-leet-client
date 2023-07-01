import React,{useContext} from 'react';
import AboutEng from './AboutEng';
import AboutBan from './AboutBan';
import Cookies from 'js-cookie';
import { FilterContext } from '@/Context/FilterContext/FilterContext';
import { useSelector } from 'react-redux';

const About = () => {
  // const {lang}:any = useContext(FilterContext)
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
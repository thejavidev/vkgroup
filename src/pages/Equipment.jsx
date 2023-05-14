import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper"
import { LazyLoadImage } from "react-lazy-load-image-component";
import NavTabs from '../components/UI/NavTabs';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Sonnet = ({ content, image }) => {
  return (
    <>
      <h2>{content}</h2>
      <LazyLoadImage src={image} />
    </>
  )
}


const Equipment = ({ avadanlig }) => {




  return (
    <>

    </>

  )
}

export default Equipment

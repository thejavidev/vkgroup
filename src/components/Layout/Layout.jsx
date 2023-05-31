import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Input, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { getMultiLang as ml } from '../MultiLang';
import { AiOutlineToTop } from 'react-icons/Ai';
import { useRef } from 'react';

const Layout = ({ children, option, products, mehsullar, xidmet, avadanlig }) => {
  const sitelang = localStorage.getItem("i18nextLng");

  const [state, setState] = useState(0);
  const [t] = useTranslation("translation");
  const [text, setText] = useState('')
  const subCategories1 = products?.[1]?.sub_categories_1;
  const urlname = 'xidmetler/';
  const url = urlname + products?.[1]?.slug_az;
  const navigate = useNavigate()
  const filtered = subCategories1?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]?.toString()?.toLowerCase()?.includes(text?.toLowerCase())
    )
  })

  const top=useRef()

  const toTop = () => {
      window.scrollTo(0, 0)
  };



  return (
    <>
      <HelmetProvider >
        <Helmet >
          <html lang={sitelang} />
         
        </Helmet>
      </HelmetProvider>
      <Header xidmet={xidmet} mehsullar={mehsullar} avadanlig={avadanlig} />
      <div className="mt-[66px] lg:mt-[53px] main-container home bg-[--bg]  "
      >
        <div className="scrolltotop fixed right-10 bottom-8 z-30 bg-[--bgf3] p-2 cursor-pointer " ref={top} onClick={toTop}>
          <AiOutlineToTop className='text-[30px] text-[#fff]' />
        </div>
        
        {children}
      </div>
      <Footer option={option} xidmet={xidmet} mehsullar={mehsullar} />
    </>
  )
}

export default Layout

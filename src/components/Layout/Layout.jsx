import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getMultiLang as ml } from '../MultiLang';


const Layout = ({ children, option, products, mehsullar, xidmet, avadanlig }) => {
  const sitelang = localStorage.getItem("i18nextLng");
  const [t] = useTranslation("translation");
  const [text, setText] = useState('')
  const subCategories1 = products?.[1]?.sub_categories_1;
  const urlname = 'xidmetler/';
  const url = urlname + products?.[1]?.slug_az;

 


  const closeSearch=()=>{
    document.querySelector('.inputDiv')?.classList?.reomve('openSearch');;
  }

  const filtered = subCategories1?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]?.toString()?.toLowerCase()?.includes(text?.toLowerCase())
    )
  })
  return (
    <>
      <HelmetProvider >
        <Helmet >
          <html lang={sitelang} />

        </Helmet>
      </HelmetProvider>
      <Header xidmet={xidmet} mehsullar={mehsullar} avadanlig={avadanlig} />
      <div className="mt-[66px] lg:mt-[53px] main-container home"
      >
        <div className="search absolute right-[-100%] z-20 top-28 p-2 bg-[#f3f3f3] w-[400px] inputDiv transitions" >
          <div className="ml-2 mr-2">
            <Input  type="text" className='border-2 w-full  outline-none p-2 ' value={text} onChange={(e) => setText(e.target.value)} placeholder='Axtar...' />
          </div>
          <div className="text ml-3 mt-2 mr-2">
            {
              filtered && filtered?.slice(0, 1  ).map((cur, index) => (
                <Link to={`/${url}/${cur?.slug_az}`} key={index} onClick={closeSearch}>
                  <div className="flex flex-col" >
                    <Text className='text-[20px] capitalize underline '>{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</Text>
                  </div>
                </Link>
              ))
            }

          </div>
        </div>
        {children}
      </div>
      <Footer option={option} xidmet={xidmet} mehsullar={mehsullar} />
    </>
  )
}

export default Layout

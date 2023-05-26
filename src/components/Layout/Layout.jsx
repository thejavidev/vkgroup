import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet,HelmetProvider  } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Layout = ({children,option,mehsullar,xidmet,avadanlig}) => {
  const sitelang =localStorage.getItem("i18nextLng");
  const [t] = useTranslation("translation");
  return (
    <>
     <HelmetProvider >
      <Helmet >
        <html lang={sitelang} />
    
      </Helmet>
    </HelmetProvider>
     <Header xidmet={xidmet} mehsullar={mehsullar} avadanlig={avadanlig}  />
      <div className="mt-[66px] lg:mt-[53px] main-container home" 
         >
        {children}
      </div>
     <Footer option={option}  xidmet={xidmet} mehsullar={mehsullar} /> 
    </>
  )
}

export default Layout

import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children,option,mehsullar,xidmet,avadanlig}) => {

  return (
    <>
    
     <Header xidmet={xidmet} mehsullar={mehsullar} avadanlig={avadanlig}  />
      <div className="mt-[66px] lg:mt-[53px]">
        {children}
      </div>
     <Footer option={option}  xidmet={xidmet} mehsullar={mehsullar} /> 
    </>
  )
}

export default Layout

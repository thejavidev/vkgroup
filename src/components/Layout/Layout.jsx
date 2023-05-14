import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children,options,subone,xidmet,fourmenu}) => {

  return (
    <>
     <Header xidmet={xidmet} subone={subone} fourmenu={fourmenu} />
      <div className="mt-[66px]">
        {children}
      </div>
     <Footer options={options} subone={subone} xidmet={xidmet} /> 
    </>
  )
}

export default Layout

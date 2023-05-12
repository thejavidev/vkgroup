import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children,options,subone,xidmet}) => {

  return (
    <>
     <Header/>
     {children}
     <Footer options={options} subone={subone} xidmet={xidmet} /> 
    </>
  )
}

export default Layout

import React, { useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/Ai';


const Upper =React.memo(({toggle, switchLang})=>{

    useEffect(()=>{
        if(localStorage.getItem("i18nextLng") ==='tr-TR' || localStorage.getItem("i18nextLng") ==='TR-TR' || localStorage.getItem("i18nextLng") ==='TR' || localStorage.getItem("i18nextLng") ==='tr' ){
            localStorage.setItem('i18nextLng', 'az');
        }
        if(localStorage.getItem("i18nextLng") ==='ru-RU'){
            localStorage.setItem('i18nextLng', 'ru');
        } 
        if(localStorage.getItem("i18nextLng") ==='en-GB'){
            localStorage.setItem('i18nextLng', 'en');
        }
        if(localStorage.getItem("i18nextLng") ==='az-AZ'){
            localStorage.setItem('i18nextLng', 'az');
        }
        if(localStorage.getItem("i18nextLng") ==='en-AZ'){
            localStorage.setItem('i18nextLng', 'az');
        }
    })

    return(
        <div className='relative  text-black px-2 ml-5'>
            <div onClick={toggle} className='flex items-center cursor-pointer'>
                <button className='text-[#fff] uppercase text-[16px]'>{localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "az"}</button>
                <AiFillCaretDown className='text-[#DE0733] ml-2 text-[20px]'  />
            </div>
            {switchLang}
        </div>
    )
})

export default Upper
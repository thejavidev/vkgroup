import {useState } from 'react';
import { useTranslation } from 'react-i18next';
import Upper from './Upper';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { getMultiLang as ml } from '../MultiLang';

const Header = ({ xidmet, subone, fourmenu }) => {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = (lang = "az") => {
    return lang !== localStorage.getItem("i18nextLng")
  }
  const langs = ["az", "ru", "en"];
  const myLang = langs.filter(langChecker);
 
  return (
    <header className='fixed bg-[#272727] top-0 left-0 right-0 w-full z-50 transitions'>
      <Container fluid className='pr-[70px] pl-[70px] pt-[7px] pb-[7px] 2xl:pl-[20px] 2xl:pr-[20px]'>
        <Nav className='items-center justify-between w-full'>
          <div className="logo">
            <Link to='/'>
              <LazyLoadImage className='w-[150px] xl:w-[120px]' src='https://vkgroup.az/vk/img/header/vklogo.png' />
            </Link>
          </div>
          <div className="menu flex">
            <ul className='flex w-full items-center allmenu'>
              <li className='cursor-pointer hvr  pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px]  2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='about' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footerabout")}
                </Link>
              </li>
              <li className='relative ulHover hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px] cursor-pointer'>
                <div className='text-white text-[15px] uppercase xl:text-[13px] font-[300] relative block'>
                  {t("footerservices")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  {
                    xidmet && xidmet?.slice(0, 1).map((cur, i) => (
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                        {ml(cur?.name_az, cur?.name_ru, cur?.name_em)}
                        <ul className='absolute block top-[100%] left-0'>
                          {
                            subone && subone?.slice(0, 3).map((menu, index) => (
                              <li key={index} className='bg-[#E10632]  hidden  text-center  second_li pt-[10px] xl:text-[13px] pb-[10px] pl-[20px] pr-[20px]'>
                                <Link to={`/xidmetler/insaat/${menu?.slug_az}`} className='text-[#000] hover:text-[#fff] transitions w-full h-full block'>
                                  {ml(menu?.name_az, menu?.name_ru, menu.name_en)}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                  }
                  {
                    xidmet && xidmet?.slice(1, 20).map((cur, i) => (
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] xl:text-[13px] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                        <ul className='absolute block top-[100%] left-[-77px]'>
                          {
                            subone && subone?.slice(3, 30).map((menu, index) => (
                              <li key={index} className='bg-[#E10632]  hidden  text-center  second_li pt-[10px] xl:text-[13px] pb-[10px] pl-[20px] pr-[20px]'>
                                <Link to={`/xidmetler/insaat/${menu?.slug_az}`} className='text-[#000]  hover:text-[#fff] transitions w-full h-full block'>
                                  {ml(menu?.name_az, menu?.name_ru, menu.name_en)}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                  }
                </ul>
              </li>
              <li className='relative ulHover hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px] cursor-pointer'>
                <div className='text-white text-[15px] uppercase xl:text-[13px] font-[300] relative block '>
                  {t("mehsullar")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  {
                    fourmenu && fourmenu?.map((cur, i) => (
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632]  bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                        <Link to={`mehsullar/${cur.slug_az}`} className='text-[#E10632] hover:text-[#fff] transitions xl:text-[13px]'>
                          {ml(cur?.name_az, cur?.name_ru, cur?.name_em)}
                        </Link>

                      </li>
                    ))
                  }

                </ul>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='layihelerimiz' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("projects")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='avadanliqlar' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("avadanliq")}
                </Link>
              </li>
              <li className='relative ulHover hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px] cursor-pointer'>
                <div className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footermedia")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  <li className=' relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                    <Link to='foto' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] xl:text-[13px] hover:text-[#fff] transitions w-full h-full block'>
                      {t("footerfoto")}
                    </Link>
                  </li>
                  <li className=' relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                    <Link to='video' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] xl:text-[13px] hover:text-[#fff] transitions w-full h-full block'>
                      {t("footervideo")}
                    </Link>
                  </li>
                  <li className=' relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                    <Link to='blog' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] hover:text-[#fff] transitions w-full h-full block'>
                      {t("footerblog")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='sertifikat' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footercertf")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='servis' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footerservice")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='rey-sorgusu' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footerrey")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                <Link to='elaqe' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                  {t("footerelaqe")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="lang">
            {<Upper
              toggle={() => setOpen(!open)}
              switchLang={
                open && (
                  <div className="absolute  mt-6 right-[-3px] top-3 h-[50px] flex flex-col text-left items-end">
                    {myLang.map((lang, index) => (
                      <button className='text-[#fff] uppercase text-[16px] xl:text-[13px] bg-[#272727] pt-[10px] pb-[10px] pr-[15px] pl-[15px]' key={index} onClick={() => clickHandle(lang)} >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
            />}
          </div>
        </Nav>
      </Container>


    </header>
  )
}

export default Header



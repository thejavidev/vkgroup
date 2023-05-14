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
      <Container fluid className='pr-[70px] pl-[70px] pt-[7px] pb-[7px]'>
        <Nav className='items-center justify-between w-full'>
          <div className="logo">
            <Link to='/'>
              <LazyLoadImage className='w-[150px] ' src='https://vkgroup.az/vk/img/header/vklogo.png' />
            </Link>
          </div>
          <div className="menu flex">
            <ul className='flex w-full items-center allmenu'>
              <li className='cursor-pointer hvr  pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='about' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("footerabout")}
                </Link>
              </li>
              <li className='relative ulHover hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px] cursor-pointer'>
                <div className='text-white text-[15px] uppercase font-[300] relative block'>
                  {t("footerservices")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  {
                    xidmet && xidmet?.slice(0, 1).map((cur, i) => (
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                        {ml(cur?.name_az, cur?.name_ru, cur?.name_em)}
                        <ul className='absolute block top-[100%] left-0'>
                          {
                            subone && subone?.slice(0, 3).map((menu, index) => (
                              <li key={index} className='bg-[#E10632]  hidden  text-center  second_li '>
                                <Link to={`/xidmetler/insaat/${menu?.slug_az}`} className='text-[#000] pt-[10px] pb-[10px] pl-[20px] pr-[20px] hover:text-[#fff] transitions w-full h-full block'>
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
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                        <ul className='absolute block top-[100%] left-[-77px]'>
                          {
                            subone && subone?.slice(3, 30).map((menu, index) => (
                              <li key={index} className='bg-[#E10632]  hidden  text-center  second_li '>
                                <Link to={`/xidmetler/insaat/${menu?.slug_az}`} className='text-[#000] pt-[10px] pb-[10px] pl-[20px] pr-[20px] hover:text-[#fff] transitions w-full h-full block'>
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
              <li className='relative ulHover hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px] cursor-pointer'>
                <div className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("mehsullar")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  {
                    fourmenu && fourmenu?.map((cur, i) => (
                      <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                        <Link to={`mehsullar/${cur.slug_az}`} className='text-[#E10632] hover:text-[#fff] transitions'>
                          {ml(cur?.name_az, cur?.name_ru, cur?.name_em)}
                        </Link>

                      </li>
                    ))
                  }

                </ul>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='layihelerimiz' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("projects")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='avadanliqlar' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("avadanliq")}
                </Link>
              </li>
              <li className='relative ulHover hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px] cursor-pointer'>
                <div className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("footermedia")}
                </div>
                <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                  <li className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                    <Link to='foto' className='text-[#E10632] hover:text-[#fff] transitions'>
                      {t("footerfoto")}
                    </Link>
                  </li>
                  <li className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                    <Link to='video' className='text-[#E10632] hover:text-[#fff] transitions'>
                      {t("footervideo")}
                    </Link>
                  </li>
                  <li className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] transitions secondUl'>
                    <Link to='blog' className='text-[#E10632] hover:text-[#fff] transitions'>
                      {t("footerblog")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='sertifikat' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("footercertf")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='servis' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("footerservice")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='rey-sorgusu' className='text-white text-[15px] uppercase font-[300] relative block '>
                  {t("footerrey")}
                </Link>
              </li>
              <li className='cursor-pointer hvr pt-[20px] pb-[20px] pl-[18px] pr-[18px]'>
                <Link to='elaqe' className='text-white text-[15px] uppercase font-[300] relative block '>
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
                      <button className='text-[#fff] uppercase text-[16px] bg-[#272727] pt-[10px] pb-[10px] pr-[15px] pl-[15px]' key={index} onClick={() => clickHandle(lang)} >
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



import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Upper from './Upper';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, NavLink } from 'react-router-dom';
import { getMultiLang as ml } from '../MultiLang';
import { BiMenu } from 'react-icons/Bi';
import { AiOutlineClose } from 'react-icons/Ai';
import { Button } from 'react-bootstrap';
import {
  Collapse,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

const Header = ({ xidmet, mehsullar }) => {
  const [t, i18n] = useTranslation("translation");
  const [cur_section, setCurSection] = useState('')
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
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true);
      } else { // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);


      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  const openMenu = () => {
    let OpenMenuClick = document.querySelector('.mobile-header');
    let Overlay = document.querySelector('.overlay');
    OpenMenuClick.classList.add('active');
    Overlay.classList.add('active')
  }
  const CloseMenu = () => {
    let OpenMenuClick = document.querySelector('.mobile-header');
    let Overlay = document.querySelector('.overlay');
    OpenMenuClick.classList.remove('active');
    Overlay.classList.remove('active')
  }
  const [openId, setOpenId] = useState(0);



  const mobileHeader = [
    {
      id: 1,
      title: `${t('projects')}`,
      link: '/about',
    },
    {
      id: 2,
      title: `${t('footerservices')}`,
      submenu: [
        {
          id: 3 - 1,
          title: "alt-1"
        },
        {
          id: 3 - 2,
          title: "alt-2"
        },
      ]
    },
    {
      id: 3,
      title: `test2`,
    },
    {
      id: 4,
      title: `${t('projects')}`,
      submenu: [
        {
          id: 4 - 1,
          title: "alt-3"
        },
        {
          id: 4 - 2,
          title: "alt-4"
        },
      ]
    },
    {
      id: 5,
      title: `${t('avadanliq')}`,
    },
    {
      id: 6,
      title: `${t('footermedia')}`,
    },
    {
      id: 7,
      title: `${t('footercertf')}`,
    },
    {
      id: 8,
      title: `${t('footerservice')}`,
    },
    {
      id: 9,
      title: `${t('footerrey')}`,
    },
    {
      id: 10,
      title: `${t('footerelaqe')}`,
    },
  ]

  return (
    <>
      <div onClick={CloseMenu} className="mobile-menu-overlay block fixed left-[0] top-[0] bottom-[0] right-[0] z-[100] overlay"></div>
      <header className={` ${show && 'none'} header  fixed bg-[#272727] top-[0px] left-[0] right-[0] w-full z-50`} >
        <Container fluid className='pr-[70px] pl-[70px] pt-[7px] pb-[7px] 2xl:pl-[20px] 2xl:pr-[20px] lg:pt-[10px] lg:pb-[10px]'>
          <Nav className='items-center justify-between w-full '>
            <div className="logo">
              <Link to='/'>
                <LazyLoadImage className='w-[150px] xl:w-[120px]' src='https://vkgroup.az/vk/img/header/vklogo.png' />
              </Link>
            </div>
            <div className="menu flex">
              <ul className='flex w-full items-center allmenu lg:hidden'>
                <li className='cursor-pointer hvr'>
                  <NavLink to='/about' className='text-white  pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px]  2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px] text-[15px] xl:text-[13px] uppercase font-[300] relative block '>
                    {t("footerabout")}
                  </NavLink>
                </li>
                <li className='relative ulHover hvr  cursor-pointer'>
                  <p className='text-white text-[15px] pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px] uppercase xl:text-[13px] font-[300] relative block'>
                    {t("footerservices")}
                  </p>
                  <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                    {
                      xidmet && xidmet?.slice(0, 1).map((cur, i) => (
                        <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                          {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                          <ul className='absolute block top-[100%] left-0'>
                            {
                              xidmet[0]?.sub_categories_1 && xidmet[0].sub_categories_1?.map((menu, index) => (
                                <li key={index} className='bg-[#E10632]  hidden  text-center  second_li'>
                                  <Link to={`/xidmetler/insaat/${menu?.slug_az}`} className='text-[#000] hover:text-[#fff] transitions w-full h-full block  pt-[10px] xl:text-[13px] pb-[10px] pl-[20px] pr-[20px]'>
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
                      xidmet && xidmet?.slice(1, 2).map((cur, i) => (
                        <li key={i} className='p-[20px] relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                          {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                          <ul className='absolute block top-[100%] left-[-80px]'>
                            {
                              xidmet[1]?.sub_categories_1 && xidmet[1].sub_categories_1?.map((menu, index) => (
                                <li key={index} className='bg-[#E10632]  hidden  text-center  second_li pt-[10px] xl:text-[13px] pb-[10px] pl-[20px] pr-[20px]'>
                                  <Link to={`/xidmetler/mexaniki/${menu?.slug_az}`} className='text-[#000] hover:text-[#fff] transitions w-full h-full block'>
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
                <li className='relative ulHover hvr  cursor-pointer'>
                  <Link className='text-white text-[15px] uppercase xl:text-[13px] font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("mehsullar")}
                  </Link>
                  <ul className='first_alt_menu flex absolute top-[75px] left-[-50px]  bg-[#272727] pl-0 '>
                    {
                      mehsullar && mehsullar?.map((cur, i) => (
                        <li key={i} className=' relative capitalize text-[#E10632] w-max     cursor-pointer text-[16px] transitions secondUl'>
                          <Link to={`mehsullar/${cur.slug_az}`} className='text-[#E10632] pt-[15px] pl-[15px] pr-[15px] pb-[15px] bg-[#272727]  hover:text-[#fff] transitions xl:text-[13px]'>
                            {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                          </Link>

                        </li>
                      ))
                    }

                  </ul>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to='layihelerimiz' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("projects")}
                  </NavLink>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to={`avadanliqlar`} className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("avadanliq")}
                  </NavLink>
                </li>
                <li className='relative ulHover hvr  cursor-pointer'>
                  <NavLink to={'/media/foto'} className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("footermedia")}
                  </NavLink>
                  <ul className='first_alt_menu flex absolute top-[100%] left-[-50px] mt-[10px] bg-[#272727] pl-0 '>
                    <li className=' relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                      <Link to='/media/foto' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] xl:text-[13px] hover:text-[#fff] transitions w-full h-full block'>
                        {t("footerfoto")}
                      </Link>
                    </li>
                    <li className='relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                      <Link to='/media/video' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] xl:text-[13px] hover:text-[#fff] transitions w-full h-full block'>
                        {t("footervideo")}
                      </Link>
                    </li>
                    <li className=' relative capitalize w-max text-[#E10632] bg-[#272727] cursor-pointer text-[16px] xl:text-[13px] transitions secondUl'>
                      <Link to='/media/blog' className='text-[#E10632] p-[20px] lg:p-[10px] md:lg-[5px] hover:text-[#fff] transitions w-full h-full block'>
                        {t("footerblog")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to='sertifikat' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("footercertf")}
                  </NavLink>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to='servis' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("footerservice")}
                  </NavLink>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to='rey-sorgusu' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("footerrey")}
                  </NavLink>
                </li>
                <li className='cursor-pointer hvr '>
                  <NavLink to='elaqe' className='text-white text-[15px] xl:text-[13px] uppercase font-[300] relative block pt-[15px] pb-[15px]  pl-[18px] pr-[18px] 2xl:pl-[8px] 2xl:pr-[8px] lg:pl-[4px] lg:pr-[4px]'>
                    {t("footerelaqe")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <div className="lang mr-4">
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
              <div className="mobileMenu" onClick={openMenu}>
                <BiMenu className='text-[#fff] text-[30px] cursor-pointer' />
              </div>
            </div>
          </Nav>
        </Container>


      </header>
      <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
        <Button
          className="offcanvas-menu-close"
          id="mobile-menu-close-trigger"
          onClick={() => closeMobileMenu()}
        >
          <AiOutlineClose />
        </Button>
        <ul className='mt-[100px]'>
          {
            mobileHeader && mobileHeader?.map((item, index) => (
              <li key={index}>
                <p onClick={() => setOpenId(item?.id === openId ? 0 : item?.id)}>{item?.title}</p>
                <Collapse in={item.id === openId} animateOpacity>
                  <List>
                    {
                      item?.submenu && item?.submenu?.map((altlink, index) => (
                        <li key={index}>
                          <h2> {altlink?.title}</h2>
                        </li>
                      ))
                    }
                  </List>
                </Collapse>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Header



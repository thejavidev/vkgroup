import React, { useEffect, useState } from 'react'
import { getMultiLang as ml } from '../components/MultiLang';
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoaderContent from '../components/loader/LoaderContent';
import LoaderText from '../components/loader/LoaderText';
import { noPhoto } from '../assets';
import { shuffle } from './Home';



const BlogDetail = ({ blog }) => {
  const Data = blog;
  const [t] = useTranslation("translation");
  const { slug_az } = useParams();
  const currentPost = Data?.find((post) => post?.slug_az === slug_az);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [])
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  return (
    <>
      <div className="p-[20px] mt-[70px] md:mt-[50px] bg-[#F3F3F3] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px] md:text-[20px] uppercase text-[#272727] '>{t("blog")}</h2>
      </div>
      <div className="">
        <Container fluid className='pt-[20px] pb-[20px] pl-[100px] pr-[100px] lg:pl-[20px] lg:pr-[20px]'>
          <Row>
            <Col lg={12}>
              <h2 className='font-[700] text-[40px] md:text-[20px] text-[#27272] '>{ml(currentPost?.title_az, currentPost?.title_ru, currentPost?.title_ru)}</h2>
              <div dangerouslySetInnerHTML={{ __html: currentPost && ml(currentPost?.text_az, currentPost?.text_ru, currentPost?.text_en) }}
                className="font-[400] text-[16px] md:text-[14px] pt-[20px] pb-[20px] pl-0 pr-0 text-[#272727]"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="mb-10 pt-[20px] pb-[20px] pl-[100px] pr-[100px] lg:pl-[20px] lg:pr-[20px]">
        <Row>
          {
            blog && shuffle(Array.from(blog))?.slice(0, 4).map((cur, i) => {
              return (
                <Col lg={3} key={i} className='mb-3'>
                  <div className="flex flex-col ">
                    <div className="w-full overflow-hidden border-2">
                      {
                        loading ? <LoaderContent /> :
                          <LazyLoadImage className='overflow-hidden w-full' src={cur?.src ? cur?.src :noPhoto} alt={cur?.alt_az} />
                      }
                    </div>
                    <div className="w-full pt-[5px] pb-[5px] pl-0 pr-0 flex flex-col">
                      {
                        loading ? <LoaderText /> :
                          <h2 className='font-[700] text-[15px] pt-2 text-left text-[#272727] mb-3 line-clamp-1'>{ml(cur?.title_az, cur?.title_ru, cur?.title_ru)}</h2>
                      }
                      {
                        loading ? <LoaderText /> :
                          <Link to={`/media/blog/${cur?.slug_az}`} onClick={scrollToTop}>
                            <Button className='bg-[#E10632] border-none outline-none shadow-none pt-[10px] pb-[10px] pl-[20px] pr-[20px] rounded-[20px] text-[#fff] font-[500] text-[12px] transitions'>
                              {t("etrafli")}
                            </Button>
                          </Link>
                      }
                    </div>
                  </div>
                </Col>
              )
            })
          }



        </Row>
      </Container>

    </>
  )
}

export default BlogDetail

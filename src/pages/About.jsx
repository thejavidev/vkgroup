import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from 'react';

const About = ({option}) => {
  const [t] = useTranslation("translation");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="bg-[#F3F3F3] relative mt-4 w-full pt-[100px] pb-[70px] pl-0 pr-0">
        <Container>
          <Row className="items-center">

            <Col lg={8} md={12}>
              <p className="font-[700] text-[55px] text-[#272727]">{t("whowe")}</p>
              <div className="font-[400] pt-[20px] text-justify " dangerouslySetInnerHTML={{ __html: option && ml(option?.biz_text_az, option?.biz_text_ru, option?.biz_text_en) }}>
              </div>
              
            </Col>
            <Col lg={4} md={12}>
              <LazyLoadImage className="p-[20px]" src={option?.biz_img} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About

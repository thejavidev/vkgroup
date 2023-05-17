import { BsTelephone } from 'react-icons/Bs';
import { HiOutlineLocationMarker, } from 'react-icons/Hi';
import { BsEnvelope } from 'react-icons/Bs';
import { AspectRatio, Input,Textarea } from '@chakra-ui/react'
import { getMultiLang as ml } from '../components/MultiLang';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const Contact = ({option}) => {
  const [t] = useTranslation("translation");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <div className="relative mt-28 mb-28">
        <Container>
          <Row>
            <p className="font-[700] text-[45px] text-[#272727] mb-4">{t("contactT")}</p>
            <Col lg={7} md={12} className="p-[20px]">
              <div className="flex justify-between w-full">
                <div className="flex items-center justify-center">
                  <BsTelephone className="text-[30px] mr-3" />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-[300] text-[#272727]">
                      <Link to={`tel:${option?.tel1}`}>
                        {option?.tel1}
                      </Link>
                    </p>
                    <p className="font-[300] text-[16px] text-[#272727]">
                      <Link to={`tel:${option?.tel2}`}>
                        {option?.tel2}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <HiOutlineLocationMarker className="text-[30px] mr-3" />
                  <div className="flex flex-col">
                    <p className="font-[300] text-[16px] text-[#272727]">
                      <Link target="_blank" to={`https://goo.gl/maps/UsQwaNLbsHKVyCicA?coh=178571&entry=tt`}>
                        {ml(option?.unvan_az, option?.unvan_ru, option?.unvan_en)}
                      </Link>
                    </p>

                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <BsEnvelope className="text-[30px] font-[200] mr-3" />
                  <div className="flex flex-col">
                    <p className="font-[300] text-[16px] text-[#272727]">
                      <Link target="_blank" to={`mailto:${option?.email}`}>
                        {option?.email}
                      </Link>
                    </p>

                  </div>
                </div>
              </div>
              <AspectRatio ratio={16 / 9} className="mt-9 h-[300px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.544827001696!2d49.87795327645867!3d40.418933255504605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063d048db3e95%3A0xde2122bb2df3ec27!2sVK%20Group!5e0!3m2!1str!2saz!4v1683891698520!5m2!1str!2saz" />
              </AspectRatio>
            </Col>
            <Col lg={5} md={12}>
              <form className="mt-3">
                <div className="">
                  <Input className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] text-[#272727]" placeholder={t("nameSurname")} />
                </div>
                <div className="mt-3">
                  <Input className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] text-[#272727]" placeholder={t("contactNumber")} />
                </div>
                <div className="mt-3">
                  <Input className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] text-[#272727]" placeholder={t("email")} />
                </div>
                <div className="mt-3">
                  <Textarea
                    className='border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] text-[#272727] h-[140px] resize-none'
                    placeholder={t("message")}
                    size='sm'
                  />
                  
                </div>
                <Button className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] text-[16px] border-[1px] border-[#000] text-[#272727] rounded-none mt-3">
                  {t("send")}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact

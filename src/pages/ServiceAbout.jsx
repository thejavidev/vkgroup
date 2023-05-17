import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import Contact from './Contact';
import { useEffect } from 'react';

const ServiceAbout = ({ option, service1, service2 }) => {
  const [t] = useTranslation("translation");

  console.log(service2)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="mt-[100px]">
        <Container  className=' '>
          <Row className='flex-col'>
            <div className="mb-7">
              <h2 className='font-[700] text-[30px] uppercase text-[#272727] space-[5px]'>{ml(option?.servis_title_1_az, option?.servis_title_1_ru, option?.servis_title_1_en)}</h2>
            </div>
            {
              service1 && service1?.map((cur, i) => (
                <div className="mb-[30px] w-full flex flex-wrap colorchagne" key={i}>
                  <Col lg={3} className='bg-[#E10632] pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex items-center justify-center transitionsa color1'>
                    <h6 className='text-[#fff] text-center font-[700] text-[16px] uppercase m-0 p-0'>{ml(cur?.key_az, cur?.key_ru, cur?.key_en)}</h6>
                  </Col>
                  <Col lg={9} className='bg-[#f3f3f3] pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex items-center justify-start transitionsa color2'>
                    <h6 className='text-[#272727] text-center font-[400] text-[16px] uppercase m-0 p-0'>{ml(cur?.value_az, cur?.value_ru, cur?.value_en)}</h6>
                  </Col>
                </div>
              ))
            }
            <div className="mt-7 mb-7">
              <h2 className='font-[700] text-[30px] uppercase text-[#272727] space-[5px]'>{ml(option?.servis_title_2_az, option?.servis_title_2_ru, option?.servis_title_2_en)}</h2>
            </div>
            <Row className='mt-3'>
              {
                service2 && service2?.map((cur, i) => (
                  <Col lg={3} key={i} className='mb-5 '>
                    <div className="h-[90px] pl-[20px] pr-[20px]">
                        <div className="bg-[#E10632] rounded-[39px]  h-full flex items-center justify-center cursor-pointer transitions hover:bg-[#f3f3f3] font-[700] text-[16px] pt-[20px] pb-[20px] pl-[30px] pr-[30px] text-center text-[#fff] hover:text-[#272727]">
                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                        </div>
                    </div>
                  </Col>
                ))
              }
            </Row>

          </Row>
        </Container>
      </div>
        <div className="mb-5">
          <Contact option={option} />
        </div>
    </>
  )
}

export default ServiceAbout

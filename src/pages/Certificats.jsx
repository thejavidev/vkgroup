import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import LoaderCertf from '../components/loader/LoaderCertf';

const Certificats = ({ certfkat }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <>
      <div className="bg-[#f3f3f3] pt-[100px] pb-[100px] min-h-[70vh] pl-0 pr-0 relative">
        <Container>
          <Row>
            {
              certfkat && certfkat?.slice(0, next)?.map((item, i) => {
                return (
                  <Col key={i} lg={3} md={4} xs={6} className='mb-4'>
                    {
                      loading ? <LoaderCertf /> :
                        <Link to={item?.pdf} target='_blank'>
                          <LazyLoadImage src={item?.src} />
                        </Link>
                    }

                  </Col>
                )
              })
            }

          </Row>
          {next < certfkat?.length && (

            <Button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
              {t("more2")}
            </Button>
          )}
        </Container>
      </div>
    </>
  )
}

export default Certificats

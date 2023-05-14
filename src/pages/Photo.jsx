import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import LoaderContent from "../components/loader/LoaderContent";

const Photo = ({ foto }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)

  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <>

      <div className="relative bg-[#F3F3F3]  pt-[100px] pb-[100px]">
        <Container>
          <p className="font-[400] text-[30px] text-[#272727] pt-[10px] pl-0 pr-0 pb-[20px]">{t("projects")}</p>
          <Row className="">
            {
              foto && foto?.slice(0, next)?.map((item, index) => {
                return (
                  <Col className=" relative mb-3  cursor-pointer overflow-hidden" key={index} lg={3} md={4}>
                    {
                      loading ? <LoaderContent /> :
                        <Link to={`${item?.id}`} className="imageP">
                          <LazyLoadImage className="h-[250px]" src={item?.src} alt='' />
                        </Link>
                    }
                  </Col>
                )
              })
            }
          </Row>
          <Row>
            {next < foto?.length && (

              <Button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                {t("more2")}
              </Button>
            )}

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Photo

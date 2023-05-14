import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import LoaderContent from "../components/loader/LoaderContent";

const Projects = ({ project }) => {
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
      <div className="relative bg-[#F3F3F3] p-[20px] pt-[4rem] min-h-[60vh]">
        <Container>
          <p className="font-[400] text-[30px] text-[#272727] pt-[10px] pl-0 pr-0 pb-[20px]">{t("projects")}</p>
          <Row className="">
            {
              project && project?.slice(0, next)?.map((item, index) => {
                return (
                  <Col className=" relative mb-3  cursor-pointer overflow-hidden" key={index} lg={3} md={4}>
                    {
                      loading ? <LoaderContent /> :
                        <Link to={`${item?.slug_az}`} className="imageP">
                          <LazyLoadImage src={item?.cover} alt={item?.cover_alt_az} />
                        </Link>
                    }
                  </Col>
                )
              })
            }



          </Row>
          <Row>
            {next < project?.length && (

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

export default Projects

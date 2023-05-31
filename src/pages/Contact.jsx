import { BsTelephone } from 'react-icons/Bs';
import { HiOutlineLocationMarker, } from 'react-icons/Hi';
import { BsEnvelope } from 'react-icons/Bs';
import { AspectRatio, Input, Textarea, FormControl } from '@chakra-ui/react'
import { getMultiLang as ml } from '../components/MultiLang';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import React from 'react';

const Contact = React.memo(({ option }) => {
  const [t] = useTranslation("translation");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, message, phone, email } = e.target;
    setForm({ ...form, [name]: value, [message]: value, [phone]: value, [email]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_o6kehjn', 'template_svn6m4v',
      {
        form_name: form.name,
        to_name: 'Vkgroup',
        form_email: form.email,
        to_email: 'info@vkgroup.az',
        message: 'Müstərinin adı: ' +
          form.name + ' \n' + ' Müştərinin email adresi : ' +
          form.email + ' \n' + ' Müştərinin telefon nömrəsi : ' +
          form.phone + ' \n' + ' Müştərinin tam ismarıcı : ' + form.message
      },
      'H9oFB4Is3tffQsflM',
    )
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: `${t('swal1')}`,
          text: `${t('swal2')}`,
          type: 'success',
        });


        setForm({
          name: '',
          phone: '',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('xeta bas verdi')
        })
      })
  }
  return (
    <>

      <div className="relative pt-24 pb-28 bg-[--bg]">
        <Container>
          <Row>
            <p className="font-[700] text-[45px] md:text-[25px] text-[--text] mb-4">{t("contactT")}</p>
            <Col lg={7} md={12} className="p-[20px]">
              <div className="flex justify-between w-full md:flex-col md:justify-start">
                <div className="flex items-center justify-center md:items-start md:justify-start md:mb-[20px]">
                  <BsTelephone className="text-[30px] mr-3 text-[--text]" />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-[300] text-[--text]">
                      <Link to={`tel:${option?.tel1}`}>
                        {option?.tel1}
                      </Link>
                    </p>
                    <p className="font-[300] text-[16px] text-[--text]">
                      <Link to={`tel:${option?.tel2}`}>
                        {option?.tel2}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center  md:items-start md:justify-start md:mb-[20px]">
                  <HiOutlineLocationMarker className="text-[30px] mr-3 text-[--text]" />
                  <div className="flex flex-col">
                    <p className="font-[300] text-[16px] text-[--text]">
                      <Link target="_blank" to={`https://goo.gl/maps/UsQwaNLbsHKVyCicA?coh=178571&entry=tt`}>
                        {ml(option?.unvan_az, option?.unvan_ru, option?.unvan_en)}
                      </Link>
                    </p>

                  </div>
                </div>
                <div className="flex items-center justify-center  md:items-start md:justify-start md:mb-[20px]">
                  <BsEnvelope className="text-[30px] font-[200] mr-3 text-[--text]" />
                  <div className="flex flex-col">
                    <p className="font-[300] text-[16px] text-[--text]">
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
              <FormControl className="mt-3" onSubmit={handleSubmit} ref={formRef}>
                <div className="">
                  <Input
                    value={form.name} required
                    onChange={handleChange}
                    name='name'
                    className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] bg-[--bgd] text-[--text]" placeholder={t("nameSurname")} />
                </div>
                <div className="mt-3">
                  <Input
                    value={form.phone} required
                    onChange={handleChange}
                    name='phone'
                    className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] bg-[--bgd] text-[--text]" placeholder={t("contactNumber")} />
                </div>
                <div className="mt-3">
                  <Input
                    value={form.email} required
                    onChange={handleChange}
                    name='email'
                    className="border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] bg-[--bgd] text-[--text]" placeholder={t("email")} />
                </div>
                <div className="mt-3">
                  <Textarea
                    value={form.message} required
                    name="message"
                    onChange={handleChange}
                    className='border-[1px] w-full p-[10px] outline-none shadow-none text-[16px] border-[#000] bg-[--bgd] text-[--text] h-[140px] resize-none'
                    placeholder={t("message")}
                    size='sm'
                  />
                </div>
                <Button name="submit" type="submit" className="pt-[5px] pb-[5px] pl-[20px] text-[--text] pr-[20px] text-[16px] border-[1px] border-[#000] bg-[--bgd] text-[--text]rounded-none mt-3">
                  {loading ? (t('sending')) : (t('send'))}
                </Button>
              </FormControl>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
})

export default Contact

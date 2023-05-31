import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from "./components/Layout/Layout";
import { loadposts } from './components/store/posts';
import Loader from './components/loader/Loader';
import Router from './components/route';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

export const ThemeContext = createContext(null);
function App() {
  const dispatch = useDispatch();
  const [t] = useTranslation("translation");

  const data = useSelector((state) => state.list)

  useEffect(()=>{
    function pageLoading(){
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text1")}`)
        $('#pageLoadingText').css('color','red')
      }, 200);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text2")}`)
      }, 350);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text3")}`)
      }, 500);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text4")}`)
      }, 650);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text5")}`)
      }, 800);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text6")}`)
        $('#pageLoadingText').css('color','blue')
      }, 950);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text7")}`)
      }, 1100);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text8")}`)
      }, 1250);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text9")}`)
      }, 1400);
      setTimeout(() => {
        $('#pageLoadingText').css('color','white')
        $('#pageLoadingText').text(`${t("text10")}`)
      }, 1550);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text11")}`)
      }, 1700);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text12")}`)
      }, 1850);
      setTimeout(() => {
        $('#pageLoadingText').text(`${t("text13")}`)
      }, 2000);
      setTimeout(() => {
        $('#pageLoadingText').text('Vkgroup.az')
      }, 2150);
      setTimeout(() => {
        $('#pageLoadingText').css('color', '#2b2c2f')
        $('#pageLoadingText').css('transform', 'translate(-375%, -300%) scale(100)')
      }, 2300);
      setTimeout(() => {
        $('.loader1').css('display','none')
      }, 3000);
    }
    pageLoading()
    dispatch(loadposts())
  },[dispatch])





  return (
    <>
      <Loader />
      <Layout option={data?.options} products={data?.xidmets} xidmet={data?.xidmets} mehsullar={data?.mehsullar} avadanlig={data?.avadanlig}>
        <Router />
      </Layout>
    </>
  )
}

export default App

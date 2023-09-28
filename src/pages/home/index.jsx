import React from "react"
import HeroSection from "./section/heroSection/HeroSection"
import Audience from "./section/audience/Audience"
import Course from "./section/Course"
import Banner from "./section/Banner"
import Description from "./section/Description"
import BannerII from "./section/BannerII"
import Faqs from "./Faqs"
import Layout from "../../layout/Layout"
// import TestimonialBanner from "../../component/Testimonial"


const Home = () => {
  return (
    <Layout>
        <HeroSection />
          <Audience /> 
         <Course />
         <Banner />
         <Description />
         <Faqs />
         <BannerII />
         {/* <TestimonialBanner /> */}
     </Layout>
   )
 }

export default Home
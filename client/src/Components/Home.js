import React from 'react';
import Marquee from "react-fast-marquee";
// import { Carousel} from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./Home.module.css";
import Header from './Partials/Header/Header';
import Footer from './Partials/Footer/Footer';
// import Navbar from './Partials/Navbar/Navbar';
// import logo from "../assets/img/main_logo.png";
// import pic_doctor from "../assets/img/marquee-professional/doctor.jpg";
// import pic_lawyer from "../assets/img/marquee-professional/lawyer.jpg";
// import pic_engineer from "../assets/img/marquee-professional/engineer.jpg";
import Carousel from "../Components/Carousel/Carousel";
import {countries} from "../Components/Carousel/data";

const Home = () => {
  return (
    <>
    <Header/>
   
    {/* <section className={styles.container}>
        <div className={styles.marque_Wrapper}>
          <Marquee play pauseOnClick direction='right' speed={50}>
            <div>
                <h1> Welcome to Homes Alive Academy </h1>
            </div>
            
          </Marquee>
        </div>
        <div className={styles.carousel_heading}>
          <Carousel images={countries} />

        </div>
    
    </section>            */}
    <Footer/>
    </>
    
  )
}

export default Home;
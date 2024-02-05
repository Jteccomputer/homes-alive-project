import React from 'react';
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import {FaInstagram, FaFacebook,FaTwitter} from "react-icons/fa";
import {FaAlignJustify,
  FaHome,FaBook, 
  FaInfoCircle,
  FaPhone,
  FaGraduationCap, 
  FaArrowCircleRight,
  FaMegaport,
  FaPhoneSquare
  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container_row_1}>
          <div className={styles.col}>
            <div className={styles.col_heading}>Quick Links</div>
            <div className={styles.col_body}>
            <Link to="/">
              <FaHome />
                Home
            </Link>
            <Link to="/about">
              <FaInfoCircle />
                About
            </Link>
            <Link to="/academics">
            <FaGraduationCap />
          Academics
          </Link>
        <Link to="/contact">
        <FaPhone />
          Contact
          </Link>
        <Link to="/apply-now">
        <FaGraduationCap />
          Apply Now
        </Link>
        <Link to="/login">
        <FaArrowCircleRight />
          Login
        </Link>
            </div>
          </div>
          <div className={styles.col}>
          <div className={styles.col_heading}>Contact</div>
          <div className={styles.col_body}>
            <div>
              <address>
                <FaHome />
                Off Apo Chafuyi Road (on the Hilltop), Pigba-Sama Apo New Site, Abuja
              </address>
            </div>
            <div>
              <FaMegaport/>
                enquiries@homesaliveacademy.com
            </div>
            <div>
              <FaPhoneSquare/>
                +234 803 494 7522</div>
            </div>
          </div>
          <div className={styles.col}>
              <div className={styles.col_heading}>Our Socials</div>
              <div className={styles.col_body}>
                  <a className={styles.social_icons} href="http://www.facebook.com/" target="_blank" rel="noopener norefeferrer"><FaFacebook/> Facebook </a>
                  <a className={styles.social_icons} href="http://homes-alive-academy" target="_blank" rel="norefeferrer"><FaTwitter/> Twitter </a>
                  <a className={styles.social_icons} href="http://" target="_blank" rel="noopener norefeferrer"><FaInstagram/> Instagram </a>
              </div>
          </div>
         
      </div>
      <div className={styles.container_row_2}>
        &copy;2024 Homes Alive Academy, All rights reserved.
      </div>

    </footer>
  )
};

export default Footer;
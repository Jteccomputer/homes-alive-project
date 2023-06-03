import React, {useState} from 'react';
import styles from "./header.module.css";
import logo from "../../../assets/img/main_logo.png";
import { Link } from "react-router-dom";
import {FaAlignJustify,
  FaHome,FaBook, 
  FaInfoCircle,
  FaPhone,
  FaGraduationCap, 
  FaArrowCircleRight} from "react-icons/fa";

const Header = () => {

  const [mobileNavbar, setMobileNavBar] = useState(false);

  const handleToggle = () => {
    
      mobileNavbar === false ? setMobileNavBar(true) : setMobileNavBar(false);
  };

  return (
    <>
    <nav className={styles.container}>
        <div className={styles.logo_box}>
         <Link to="/"><img src={logo} alt="" /></Link>  
        </div>

        <div className={styles.links_grp}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/apply-now">Apply Now</Link>
            <Link to="/login">Login</Link>
        </div>

        <div className={styles.navToggleBtn} id={styles.navToggleBtn} 
            onClick={handleToggle}>
            <FaAlignJustify />
        </div>
    </nav>

    {/* mobile Navbar */}
    {
      mobileNavbar && (
      <div className={styles.mobile_links_grp}>
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
    </div>)
    }
    
    </>
    
  );
};

export default Header;
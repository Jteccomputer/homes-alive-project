import React, { useState } from 'react';
import styles from "./navbar.module.css";
import logo from '../../../assets/img/logo edit.png';
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaEdit,
  FaPlusSquare,
  FaTools,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  // let state = {clicked:false};
  // const handleClick = () => {
  //   this.setState({clicked:!this.state.clicked})
  // }
  const [clicked, setClicked] = useState(false)
    return (
      <>
        <nav className={styles.container}>
          <div className={styles.logo_box}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.links_grp}>
            <ul id="navbar"
              className={clicked ? "#navbar active" : "#navbar"} 
              >
                  <li>
                      <a className="active" 
                      href="/">Home</a>
                  </li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/academics">Academics</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/apply-now">Apply Now</a></li>
                  <li><a href="/login">Login</a></li>
            </ul>
             
          </div>
          <div id="mobile">
            <i id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>

          </div>
        </nav>
      </>
    )
  
};

export default Navbar;
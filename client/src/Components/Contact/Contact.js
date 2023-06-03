import React from 'react';
import styles from "./contact.module.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import { Link } from "react-router-dom";
import location from "../../assets/img/location.png";
import call_us from "../../assets/img/call us.png";
import mail from "../../assets/img/mail.png";
import {FaArrowCircleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <Header />
        <section className={styles.main_container}>
        <div className={styles.contact_row_1}>      
            <div className={styles.contact_heading}>Contact Us</div>
            <div className={styles.sub_heading}>Home {">"} Contact Us</div>
        </div>
        <div className={styles.contact_row_2}>
            <div className={styles.contact2_col_1}>
                <div className={styles.contact_address}>
                    <img src={location} alt="" />
                </div>
                <div className={styles.address_heading}>Homes Alive Academy</div>
                <div className={styles.address_body}> Apo Chafuyi Road(On the Hilltop) <br/>
                    Pigbasama Apo New Site, FCT - Abuja.

                </div>
            </div>
            <div className={styles.contact2_col_1}>
                <div className={styles.contact_address}>
                    <img src={call_us} alt="" />
                </div>
                <div className={styles.address_heading}>Call Us support 24/7</div>
                <div className={styles.address_body}> +234 814 1825 010 <br/>
                    +234 803 4947 522.

                </div>
            </div>
            <div className={styles.contact2_col_1}>
                <div className={styles.contact_address}>
                    <img src={mail} alt="" />
                </div>
                <div className={styles.address_heading}>Our School Email</div>
                <div className={styles.address_body}> homesaliveacademy@gmail.com <br/>
                enquiries@homesaliveacademy.com
                            
                </div>
            </div>
        </div>
        <div className={styles.contact_row_3}>
            <div className={styles.row3_heading}>
                <h2>Drop A Line</h2>
            </div>
            <form method="post">
                <div className={styles.form_wrapper}>
                    <div className={styles.form_row}>
                        <input type="text" placeholder="Your name" name="name" />
                    </div>
                    <div className={styles.form_row}>
                        <input type="email" placeholder="Your Email" name="email" />
                    </div>
                    <div className={styles.form_row}>
                        <input type="text" placeholder="Your Phone" name="phone" />
                    </div>
                    <div className={styles.form_row}>
                        <textarea placeholder="Your Message"></textarea>
                    </div>
                    <div className={styles.form_row}>
                        <button type="submit" class="submit-btn">
                        <FaArrowCircleRight /> &nbsp;
                        Send Message
                        </button>
                    </div>
                    
                    
                </div>
            </form>
            <div className={styles.contact3_col_1}>
            <h2>View Site Map</h2>
                  {/* <div className={styles.contact3_col1_heading}>View Site Map</div> */}
                 
            </div>
            
        </div>
        
        </section>
    <Footer />
    </>
  )
};

export default Contact;
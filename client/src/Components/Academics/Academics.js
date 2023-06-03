import React from 'react';
import styles from "./academics.module.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import pic_early from "../../assets/img/early_year.jpeg";
import pic_primary from "../../assets/img/writing.jpeg";
import pic_college from "../../assets/img/junior college.png";
import { Link } from "react-router-dom";
import {FaArrowCircleRight } from "react-icons/fa";

const Academics = () => {
  return (
    <>
        <Header />
        <section className={styles.container_wrapper}>
          <div className={styles.early_years}>
              <div className={styles.class_grp}>
                  <div className={styles.main_heading}>
                    <h4>Early Years School</h4>
                  </div>
                    
                  <div className={styles.main_body}> 
                      <h4>Considering All Aspects of a Child's Development.</h4>
                  </div>
                  <div className={styles.earlypicture}>
                      <img src={pic_early} alt="" />
                  </div>
              </div>
              <div className={styles.overview_grp}>
                  <div className={styles.overview_heading}>
                      <h4>Overview</h4>              
                  </div>
                  <div className={styles.overview_body}>
                    <p>
                        Homes Alive Academy Early Years School provides a safe, 
                        accepting, and caring environment for our children's 
                        intellectual, , physical , emotional and social development.
                    </p>
                    <p>
                        Our pupils are always keen to discover and learn new things. 
                        Our skilled educators immerse pupils in a variety of enjoyable, 
                        stimulating, and developmentally appropriate learning situations 
                        that encourage collaborative, hands-on, and exceptional learning. 
                    </p>
                                      
                    <p>
                        Our curriculum gives our pupils solid foundation in literacy, 
                        phonics, numeracy, social studies, and scientific topics that 
                        are nicely integrated with additional disciplines as needed. 
                    </p>                   
                   
                  </div>
                  <div className={styles.curriculum}>
                    <a className={styles.fct_curriculum} href="http://www.fcterc.gov.ng/index.php/erc_structure/view/curriculum_development_cd" target="_blank" rel="noopener norefeferrer">
                      <button type="submit" class="submit-btn">
                      <FaArrowCircleRight /> &nbsp;
                          See Curriculum
                        </button>
                    </a>
                  </div>
              </div>
          </div>
          <div className={styles.primary_school}>
                <div className={styles.class_grp}>
                  <div className={styles.main_heading}>
                    <h4>Primary School</h4>
                  </div>
                  <div className={styles.main_body}> 
                      <h4>Consolidating children learning and development.</h4>
                  </div>
                  <div className={styles.primary_picture}>
                      <img src={pic_primary} alt="" />
                  </div>
                </div>
                <div className={styles.overview_grp}>
                    <div className={styles.overview_heading}>
                        <h4>Overview</h4>              
                    </div>
                    <div className={styles.overview_body}>
                        <p>
                            Homes Alive Academy is an example of a typical
                            educational institution. The curriculum is demanding and
                            adheres to both British and Nigerian requirements.
                        </p>
                        <p>
                            Students at Homes Alive Academy can be intellectually, socially,
                            and ethically prepared for entrance to any tertiary institution 
                            in the world.
                        </p>
                    </div>
                    <div className={styles.curriculum}>
                        <a className={styles.fct_curriculum} href="http://www.fcterc.gov.ng/index.php/erc_structure/view/curriculum_development_cd" target="_blank" rel="noopener norefeferrer">
                        <button type="submit" class="submit-btn">
                        <FaArrowCircleRight /> &nbsp;
                            See Curriculum
                            </button>
                        </a>
                    </div>
                </div>
            </div> 
          <div className={styles.junior_college}>
                <div className={styles.class_grp}>
                  <div className={styles.main_heading}>
                    <h4>Junior College</h4>
                  </div>
                  <div className={styles.main_body}> 
                      <h4>Enhancing Students Learning and Development.</h4>
                  </div>
                  <div className={styles.college_picture}>
                      <img src={pic_college} alt="" />
                  </div>
                </div>
                <div className={styles.overview_grp}>
                    <div className={styles.overview_heading}>
                        <h4>Overview</h4>              
                    </div>
                    <div className={styles.overview_body}>
                        <p>
                            Homes Alive Academy is an example of a typical
                            educational institution. The curriculum is demanding and
                            adheres to both British and Nigerian requirements.
                        </p>
                        <p>
                            Students at Homes Alive Academy can be intellectually, socially,
                            and ethically prepared for entrance to any tertiary institution 
                            in the world.
                        </p>
                    </div>
                    
                    <div className={styles.curriculum}>
                        <a className={styles.fct_curriculum} href="http://www.fcterc.gov.ng/index.php/erc_structure/view/curriculum_development_cd" target="_blank" rel="noopener norefeferrer">
                        <button type="submit" class="submit-btn">
                        <FaArrowCircleRight /> &nbsp;
                            See Curriculum
                            </button>
                        </a>
                    </div>
                </div>
            </div> 

        </section>
        <Footer/>
    </>
  )
};

export default Academics;
import React from 'react';
import styles from "./applyNow.module.css";
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';

const ApplyNow = () => {
  return (
    
    <> 
    <Header />
    <section className={styles.container}>
        <form method="post">
            <div className={styles.form_wrapper}> 
                <div className={styles.form_title}>Application Form</div>
                <div className={styles.form_row_type_1}>
                    <select name="Prefix" id="">
                        <option value="">Master</option>
                        <option value="">Miss</option>
                    </select>
                </div>
                <div className={styles.form_row_type_2}>
                    <input type="text" placeholder="First Name" name="firstName" />
                    <input type="text" placeholder="Last Name" name="lastName"/>
                </div>
                <div className={styles.form_row_type_2}>
                    <input type="email" placeholder="Email" name="email" />
                    <input type="text" placeholder="Phone" name="Phone"/>
                </div>
                <div className={styles.form_row_type_3}>
                   <span>Admission Program Type</span>
                   <label htmlFor="college">
                    <input type="radio" name="programmeType" id="college" /> Junior College
                    </label>
                    <label htmlFor="primary">
                        <input type="radio" name="programmeType" id="primary" /> Primary
                    </label>
                    <label htmlFor="nursery">
                        <input type="radio" name="programmeType" id="nursery" /> Nursery/Prenursery
                    </label>
                </div>
                <button type="submit">Submit Application</button>
                
            </div>
           
        </form>
    </section>
    <Footer />
    </>
  )
};

export default ApplyNow;
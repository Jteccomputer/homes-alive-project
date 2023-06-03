import React from 'react';
import styles from "./login.module.css";
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import { Link } from 'react-router-dom';
import {FaArrowCircleRight} from "react-icons/fa";

const Login = () => {
  return (
    <>
    <Header />
        <section className={styles.container}>
            <form action="post">
                <div className={styles.form_wrapper}>
                    <div className={styles.form_title}>
                        Login to your Account
                    </div>
                    <div className={styles.form_row}>
                        <input type="email" name="email" id="" placeholder="Email" />
                    </div>
                    <div className={styles.form_row}>
                        <input type="password" name="password" id="" placeholder="Password" />
                    </div>
                    <button type="submit">
                    <FaArrowCircleRight />  &nbsp;
                        Login
                    </button>
                    <div className={styles.form_row}>
                    <span>
                        Forget password?
                    </span>   
                    <span>
                        Don't have an account? <Link to="/apply-now">Apply here</Link>
                    </span>   
                    </div>
                </div>
            </form>
        </section>
    <Footer />
    </>
  )
};

export default Login; 
import React from 'react'
import ContactUsForm from './ContactUsForm';
import styles from "../../../styles/subscribe.module.css"

const ContactUs = () => {
    
  return (
    <>
 <section className= {styles.conatinerForm}>
 <h1 className="header">أتصل بنا</h1>
 <ContactUsForm className = {styles.form} />
  </section>
  </>
  )
}

export default ContactUs;
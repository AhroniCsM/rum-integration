import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>
        For more information or support, please contact Aharon Shahar:
      </p>
      <p style={styles.contactInfo}>email@example.com</p>
      <Link to="/">
        <button style={styles.button}>Go Back Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#004d40',
    height: '100vh',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  contactInfo: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Contact;

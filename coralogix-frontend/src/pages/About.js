import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        This application demonstrates how to integrate Coralogix with a React frontend application
      </p>
      <p style={styles.paragraph}>
        It includes multiple pages and generates errors to be logged and monitored on the Coralogix platform.
      </p>
      <Link to="/">
        <button style={styles.button}>Go Back Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#4a148c',
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
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#9c27b0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default About;

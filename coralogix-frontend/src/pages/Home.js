import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/coralogix-logo.png';  // Import the logo

const Home = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Coralogix Logo" style={styles.logo} />
      <h1 style={styles.header}>Welcome to the Home Page</h1>
      <p style={styles.paragraph}>This is the starting point of our application.</p>
      <Link to="/about">
        <button style={styles.button}>Learn More About Us</button>
      </Link>
      <br />
      <Link to="/error-page">
        <button style={styles.button}>Go to Error Page</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1a237e',
    height: '100vh',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    width: '150px',
    marginBottom: '20px',
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
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  },
};

export default Home;

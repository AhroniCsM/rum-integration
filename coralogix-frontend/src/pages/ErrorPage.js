import React, { useState } from 'react';
import { CoralogixRum } from '@coralogix/browser';

const ErrorPage = () => {
  const [errorCount, setErrorCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const generateError = () => {
    setErrorCount(errorCount + 1);
    try {
      switch (errorCount % 4) {
        case 0:
          // TypeError: undefined is not a function
          (() => null)();
          break;
        case 1:
          // ReferenceError: x is not defined
          console.log(x);
          break;
        case 2:
          // SyntaxError: Unexpected token
          eval('foo bar');
          break;
        case 3:
          // Custom Error
          throw new Error('This is a custom error');
        default:
          break;
      }
    } catch (error) {
      // Set the error message to state to display it on the screen
      setErrorMessage(`Generated error: ${error.message}`);

      // Log the error to Coralogix
      CoralogixRum.error(`Generated error: ${error.message}`, { error });
    }
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e64a19',
  };

  const errorStyle = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    animation: 'fadeIn 0.5s',
  };

  return (
    <div style={{ backgroundColor: '#282c34', height: '100vh', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Error Generation Page</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Click the button below to generate an error.</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        onClick={generateError}
      >
        Generate Error
      </button>
      {errorMessage && (
        <div style={errorStyle}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ErrorPage;

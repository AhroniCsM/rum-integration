--Coralogix React Frontend Example--

This project is a simple React frontend application that demonstrates how to integrate Coralogix Real User Monitoring (RUM) into a multi-page application. The application includes error generation and logging functionality, with errors being sent to Coralogix for tracking and analysis.

--Features--
Multi-page React application (Home, About, Contact, Error Page)
Error generation and logging with Coralogix RUM integration

Installation Prerequisites
Before you begin, ensure you have the following installed:

1. Node.js (v12 or later)
2. npm (Node Package Manager) or yarn

--Clone the Repository--
cd rum-integration/coralogix-frontend

--Install Dependencies--
npm install

--Running the Application--
To start the application in development mode:
npm start

--Integrating Coralogix--
Ensure you have installed the Coralogix RUM package:
npm install @coralogix/browser

Go to src/coralogix.js
replace public_key: '<your send your data key' and application: 'aharon-rum',
Take those from RUM-integration on the platform

run npm start again

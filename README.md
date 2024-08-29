Coralogix React Frontend Example
This project is a simple React frontend application that demonstrates how to integrate Coralogix Real User Monitoring (RUM) into a multi-page application. The application includes error generation and logging functionality, with errors being sent to Coralogix for tracking and analysis.

Table of Contents
Features
Installation
Running the Application
Project Structure
Adding New Pages
Integrating Coralogix
Uploading Source Maps
Contributing
License
Features
Multi-page React application (Home, About, Contact, Error Page)
Error generation and logging with Coralogix RUM integration
Consistent UI design with the Coralogix logo on all pages
Source map upload for accurate error tracking in Coralogix
Installation
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v12 or later)
npm (Node Package Manager) or yarn
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/coralogix-react-frontend.git
cd coralogix-react-frontend
Install Dependencies
bash
Copy code
npm install
Running the Application
To start the application in development mode:

bash
Copy code
npm start
This will run the application at http://localhost:3000/.

Project Structure
graphql
Copy code
src/
│
├── assets/               # Images and other assets
│   └── coralogix-logo.png
│
├── pages/                # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   └── ErrorPage.js
│
├── App.js                # Main application component
├── coralogix.js          # Coralogix RUM SDK initialization
└── index.js              # Entry point for React
Adding New Pages
To add a new page:

Create a new component in the src/pages directory.
Import and define the route in App.js.
Style the component consistently with the rest of the application.
Example:

javascript
Copy code
import React from 'react';

const NewPage = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
Integrating Coralogix
Coralogix Real User Monitoring (RUM) is integrated into this application to track and log errors.

Setup
Ensure you have installed the Coralogix RUM package:

bash
Copy code
npm install @coralogix/browser
The SDK is initialized in src/coralogix.js. Ensure your Coralogix credentials are correctly set.

javascript
Copy code
import { CoralogixRum } from '@coralogix/browser';

CoralogixRum.init({
  public_key: 'your-public-key',
  application: 'react-app',
  version: '1.0.0',
  coralogixDomain: 'EU2'
});
Error logging is demonstrated in ErrorPage.js.
Uploading Source Maps
To upload source maps for better error tracking:

Install the Coralogix RUM CLI:

bash
Copy code
npm install -g @coralogix/rum-cli
Build the project to generate source maps:

bash
Copy code
npm run build
Upload the source maps using the following command:

bash
Copy code
coralogix-rum-cli upload-source-maps -k "your-public-key" \
                                     -a "react-app" \
                                     -e "EU2" \
                                     -v "1.0.0" \
                                     -f "./build/static/js"
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
Please ensure your code follows the project's coding standards and includes necessary documentation.


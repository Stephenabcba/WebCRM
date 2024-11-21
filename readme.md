# WebCRM: a react-based web application to manage CRM functionalities

## Objective
- Create a customer relationship management (CRM) website that consolidates all information related to customers and contacts
- Incorporate message history system to see all correspondance with a contact all in one place

## Configurations and software dependencies:
### Obtaining dependencies:
- This will install the dependencies required for both backend and frontend servers
``` shell
# Run this in the shell from the root directory
npm install
```

### Configuring email for messaging
- Create a `.env` file in the root directory with the following contents:
```
EMAIL_ACC="myemail@example.com"
EMAIL_PASS="myemailpassword"
EMAIL_NAME="John Doe"
```
- Change the email and password with the email you wish to send the email from
  - if gmail is used, it is recommended to use an app password after enabling 2-factor authentication
    - https://myaccount.google.com/apppasswords
- Change the value of EMAIL_NAME to the name you wish to display as the sender name

### Database installation
- The development environment uses MongoDB 5.0.6 Community Edition
  - The project also works on MongoDB 8.0.3 Community Edition
- Make sure MongoDB is installed on the system listening to port 27017

### Installing Node.js
- The entire project is written in JavaScript, which requires Node.js and npm to run
- The development environment uses Node.js v22.11.0

## Running the Backend Express Server
``` shell
# Run this from the root directory
npm run start
```


## Running the Frontend React Server
- Run the frontend and backend servers from separate shell windows/tabs
``` shell
# Run this from the root directory
cd client
npm run dev
```

## Tech Stacks
- Frontend:
  - React
  - Vite
  - Bootstrap
  - Axios
  - React Router Dom
- Backend:
  - Express
  - Mongoose
  - nodemailer
  - dotenv
  - cors

## Features
- Create and View contacts
  - Front page displays all contacts, with a form to create a new contact
  - Clicking on any contact in the table will show the contact detail page
- Edit and Delete contacts
  - In the contact detail page, the user can edit information regarding the contact
  - In the same page, the user can also delete the contact
- Track message correspondance to and from contact
  - View all past messages in a table
  - Click on a message to view details of the message, such as the body of the message
  - Send a message to the contact
    - The message would be saved in the database
    - Optionally, also send a real email to the contact
- Data persistence for the created contacts & messages
  - This information is saved in a MongoDB instance
- Followup notification
  - When the followup toggle is enabled for the contact, a notification would show as a reminder to follow up with the contact if:
    - There has been no message correspondance with the contact
    - The last message time with the contact is more than 7 days prior to current time

## Project Demo
https://github.com/user-attachments/assets/3faa3c44-e5b6-4b77-aacf-647df2f7bb72



## Limitations
- The app currently does not provide any authentication & authorization functionalities
  - A login/auth function should be implemented before this is used in an enterprise environment
- The app only provides minimal data validation when the user submits data
- The app does not provide any way to receive real messages from the contact yet

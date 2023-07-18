
## Part of Speech Test

This is a Part of Speech Test application designed for students to test their knowledge of English grammar. The application presents a sentence and asks the student to identify the part of speech of a specific word in the sentence.


## Installation

To install the application, follow these steps:

1. Install the dependencies for the server-side by navigating to the root of the project and running:


   `npm install`


2. Install the dependencies for the client-side by navigating to the `client` directory and running:

   
   `npm install`


## Usage

To start the server-side application, run:

On MacOS or Linux, run the app with this command:

 `DEBUG=nagwa:* npm start`

On Windows Command Prompt, use this command:

 `set DEBUG=nagwa:* & npm start`

On Windows PowerShell, use this command:

 ` $env:DEBUG='nagwa:*'; npm start`

This will start the server-side application. The server will be running on http://localhost:4000.

To start the client-side application, navigate to the `client` directory and run:


`npm start`


This will start the client-side application. The client-side application will be running on http://localhost:3000.

To use the application, navigate to http://localhost:3000  in your web browser. The client-side application will communicate with the server-side application to retrieve and display data.

## Technologies Used

- Node.js
- Express.js
- React

## Troubleshooting

If you're having trouble getting the application to work, here are some steps you can take:

- Make sure you have installed all the necessary dependencies by running `npm install` in the root directory of your project and in the `client` directory.
- Check the console output for any error messages or warnings.
- Check that the port specified in your server-side code matches the port specified in your client-side code.
- Check that your server-side code is actually starting when you run `DEBUG=nagwa:* npm start`.
- Try running the server-side and client-side applications separately to see if they work individually.

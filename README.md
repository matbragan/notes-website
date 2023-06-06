# notes-website

A website to register your notes. Project made in Node.js with a database in MongoDB.
<br><br>
## Necessary steps to build the website
- ### Node.js and npm installed
  
  #### Windows & MacOS
  Use the official Node.js website
  https://nodejs.org/en/download
  
  #### Linux
  Run this command in your terminal:
  ~~~sh
  sudo apt update &&
  sudo apt install nodejs &&
  sudo apt install npm
  ~~~

  See if both are installed correctly using:
  ~~~sh
  node -v # for Node.js
  ~~~
  ~~~sh
  npm -v # for npm
  ~~~
<br> 

- ### Setup of project
  
  #### Initializing the npm
  ~~~sh
  npm init -y
  ~~~
  
  #### Installing packages
  ~~~sh
  npm install body-parser express express-handlebars@5.3.2 mongodb nodemon
  ~~~
  
  #### Setup package.json
  In the package.json file put:
  ~~~json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js localhost 8000"
  }
  ~~~
<br>
  
- ### Running your website
  ~~~sh
  npm run start
  ~~~
  http://localhost:8000/

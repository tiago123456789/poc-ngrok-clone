ABOUT:
=======

The project is proof of concept where I create a solution to act like Ngrok.

TECHNOLOGIES:
==============

- Node.js
- Golang
- Websocket
- Railway(Where I deployed the server app)

Instructions to run locally project:
=====================================

Access **api-example**.
Execute command **npm i** install modules.
Execute command **node index.js** start application run at http://localhost:5000.

Access **server**.
Execute command **npm i** install modules.
Execute command **node index.js** start application run at http://localhost:3000.

Access **cli**.
Execute command **npm i** install modules.
Access *index.js* file and change variable named **URL_APP** for http://localhost:3000
Execute command **node index.js 5000**, so when you make request for http://localhost:3000 and will send request for application in address http://localhost:5000. Example: If you have one application running in port *8080* will need execute command **node index.js 8080**

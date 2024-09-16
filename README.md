# Tic Tac Toe Game
This is a simple web application of the "Tic-Tac-Toe" game

# Built With
* [React](https://react.dev/): For the frontend of the app.
* [Node JS](https://nodejs.org/en): For the backend of the app.
* [Frame Motion](https://www.framer.com/motion/): For animations
* [Axios](https://axios-http.com/docs/intro): for better readability of HTTP-requests

# Installation
Simply clone this repository and open LittleLemon folder (android project folder) in android studio. To clone:
```
https://github.com/PavloProkopenko/tic-tac-toe.git
```
After cloning, first thing first - start server
```
cd ./tic-tac-toe/server && node index.js
```
Next step - start our client side
```
cd .. && node index.js
```

# Architecture
Packages and their roles:

* server - Here you can find the logic of the computer move
* components - Here we added our components and some logic stuff
  * UI - some elements that we can reuse in our app
  * services - Here you can find a file with HTTP-request.
  * styles - folder for styles 
  * utils - for algorithms in the app

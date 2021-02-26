## Star Wars Galactic League 
[![react version](https://img.shields.io/badge/react-16.8.6-blue.svg)](https://www.npmjs.com/package/react/v/16.8.6) 
[![react version](https://img.shields.io/badge/reactrouter-5.2.0-blue.svg)](https://www.npmjs.com/package/react/v/5.2.0) 
[![react version](https://img.shields.io/badge/nodesass-4.14.1-purple.svg)](https://www.npmjs.com/package/react/v/4.14.1) 


<p align="center">

<img src="https://media2.giphy.com/media/f7eeNCiyyIvxJyJJZS/source.gif" >

## Introduction

This application was made with React, using the Star Wars API https://swapi.dev, to display information from the characters and resources from the movies and help bounty hunters to adquire their targets 

## [Deployed Live demo](https://galactic-league-hunt.surge.sh/)

deployed live demo using surge.sh

## Functional Description
Users can:

* Visualize Resources like characters, planets, species and starships

* Filter Characters by planets, species and starships

* Add one character as target (up to 10) to the Galactic League list

* Go to each page of the lists with the page number in the URL

## Aplication Description
The aplication initializes (and is the default page in not declared routes) in a landing where is already fetching the data for the tabs to be displayed in order to minimize charge load time

Marked with TODO the Nice to have features

![Landing](/doc/images/landing.png)

The characters section load each character of the api, using the paged endpoint (see logic folder for recursive fetch method), it loads the characters with dynamic pages so the api can be updated with more pages without any issues, there is 3 dropdowns to filter all the characters by Specie, Starship and Planet, and the page navigation which is in the top and at the end of the list

![Characters](/doc/images/characters.png)

In the Species section you can see the Species from the movies (TODO character search at click)

![Species](/doc/images/Species.png)

In the Planets section you can see the Planets from the movies (TODO character search at click)

![planets](/doc/images/planets.png)

In the Starships section you can see the Starships from the movies (TODO character search at click)

![Landing](/doc/images/starships.png)

and the galactic league is avaible from the entire site (TODO more properties, only displaying name but is available every property of a character)

![Landing](/doc/images/league.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

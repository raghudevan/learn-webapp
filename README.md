# Intro - Making a web application
* If you're someone who's interested in getting started with making a web application but not quite sure where or how to start I'm hoping this project will make a good place to start!

# Pre-requisites, what to install and more!

## SCM(source code management) AKA versioning
* So you'll need something to version your code. Git is the best! (only option IMO). [Go here](https://github.com/raghudevan/learn-webapp/blob/master/docs/git/installation.md) for instructions on how to install git


## Code editor of choice
* The code editor is essentially where all the magic happens, i prefer to use [SublimeText](https://github.com/raghudevan/learn-webapp/blob/master/docs/sublime-text/installation.md)


## Language of choice
* We're going to be using javascript for the development of both the UI and the back-end services
    - One language to rule them all
    - In my opinion, it's the easiest to pick up and build with
* The [MDN(Mozilla Developer Network)](https://developer.mozilla.org/en-US/) is going to be our best friend in this entire process; it's got documentation to answer every question you will ever have about javascript


## NodeJS
* This software/tool will help us host our apps. NodeJS is basically a javascript runtime that can run outside a browser! [Go here](https://github.com/raghudevan/learn-webapp/blob/master/docs/node/installation.md) for instructions on how you can install NodeJS on your machine

## Official styling partner - Bootstrap
* Again - simple, easy to use for styling otherwise bland html pages! [Go here](http://getbootstrap.com/css) for the style guide

> You do not have to do anything for the installation of Bootstrap, i've already included it in this repository


# Getting started
* Once you've taken care of the required installations, you're ready to start building an app!

0. We're going to be using a package called **redux** to manage our application's model. There's a neat [plugin](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=entire) for chrome that helps with visualizing the model.

1. Clone this repository

    ```
    git clone https://github.com/raghudevan/learn-webapp.git
    ```

    > Fun fact: **clone** is git terminology for making a local copy of the project for yourself

    > This will make a directory **learn-webapp** in the the directory where you run this command

2. Get into the directory and install the dependencies

    ```
    npm install
    ```

    > You can look inside the package.json file to view the list of dependencies that will be installed

3. Once the installation finishes, start the application

    ```
    npm start
    ```

    > You'll see a notification on the terminal when the app is ready

# Some fun APIs to play with
* [reddit thread](https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with/)
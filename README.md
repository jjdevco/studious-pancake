STUDIOUS-PANCAKE

An app that shows git commits history on the same project that it is developed.

## Project Status

This project is currently in development. Users can filter post by tags and see visual data representation. Functionality to Sing In and Sign Up is in progress.

## Project Screen Shot(s)

https://i.ibb.co/1mfBpdD/Screenshot-from-2021-04-26-09-01-27.png

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Build a minified bundle:

`npm build`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## NOTE

To run this project locally you need create an .env.local file at the root folder with the following variables NEXT_PUBLIC_GITHUB_AUTH_TOKEN

You will need to create an GitHub account and generete a personal token through this link
https://github.com/settings/tokens/new

Not scopes are required, and you must set them all to false. Be carefully with how you expose this token, everything in your GitHub account can be manipuleted.

## Live version

You can see this app running in this link:
https://studious-pancake.vercel.app/

[![CI interactive comments section](https://github.com/altitlin/interactive-comments-section-v2/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/altitlin/interactive-comments-section-v2/actions/workflows/ci.yml)

# Intro

This is a interactive comments section.

**Technology stack:** ReactJS, TypeScript, React Query, SASS, Webpack, Material UI, React Final Form

# Preliminary requirements
* Install [Node JS](https://nodejs.org/en/download/)
* Clone and run the backend for this project [Repository](https://github.com/altitlin/interactive-comments-section-v2-back)

## Running development mode
1. Running an ```npm install``` command in the root directory to install all dependencies
2. Create an ```.env``` file in the root directory and add the following in
````javascript
BASE_URL=http://localhost:3000/api/v1
````
3. Running an ```npm run dev``` command in the root directory to launch local dev server
4. Navigate to ```https://localhost:4242/``` in a browser

> The app will automatically reload if you change any of the source files.

## Running development mode
1. Create an ```.env``` file in the root directory and add the following in
````javascript
BASE_URL=<Your url backend>
````
2. Running a docker container ```make prod``` in the root directory

> In order to stop a docker contaienr in the root directory to run an ```make stop``` command

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

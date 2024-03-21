# Mock API

## Description
The is a node project i use to create and serve json data like it's from a real API,
it was inspired from the need of an API to build the UI of a project but the intended API was not ready so i had to improvise, i did some research and discovered [faker-js](https://fakerjs.dev/guide/localization.html#available-locales), [json-schema](https://json-schema.org/learn/getting-started-step-by-step) [json-faker-schema](https://www.npmjs.com/package/json-schema-faker) and [json-server](https://www.npmjs.com/package/json-server) which helped me create exactly what i needed for the front end of my project.

## How to install, configure and run
The instructions are beginner friendly, just follow the steps and your are good to go.

### Install
git clone this repository and run "npm install" to install all the needed dependencies and you are ready to start cooking your own json data that suits your present needs .

### Configure
- navigate to the src folder, 
- locate the schema folder which as the name implies is used in writing schemas that shapes the types and size of the json data to be generated.
- locate the generator folder which is used for writing the json-schema-faker that generates the json file needed, several active templates which can be used examples are present.

### Run
Inorder to run the configurations above, navigate to the package.json and locate the "scripts" section, various examples on how to write it are already provided.

For emphasis;
- write the "generate-mock-data" script by providing the json generator file location
- write the "prestart-mockapi" script which runs and creates the json data needed
- write the "start-mockapi" script with the created json data location and the port to watch it


Run the API by using 

"npm run start-mockapi"


## How to contribute and ask questions

### Contribute
interested in contributing? all you have to do is fork this repository, make your changes and make a pull request, i will review your changes and if it's alright, it will be merged.

### Questions?
Are you curious about a thing or two concerning this project and you want to clear things up?? please send me an [email](mailto:andreyhuey777@gmail.com)







# Mock API

## Introduction

This project serves as a robust solution for front-end developers in need of quick and reliable mock API services. Born from the necessity to bridge the gap between UI development and back-end readiness, it utilizes the strengths of [faker-js](https://fakerjs.dev/guide/localization.html#available-locales), [json-schema](https://json-schema.org/learn/getting-started-step-by-step), [json-schema-faker](https://www.npmjs.com/package/json-schema-faker), and [json-server](https://www.npmjs.com/package/json-server) to fabricate precise and versatile JSON data. Whether you're crafting a dynamic interface or testing feature completeness, this tool ensures your development never skips a beat.

## Installation, Configuration, and Execution

Embark on your journey with our mock API by following these beginner-friendly instructions:

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Execute `npm install` to install all necessary dependencies.

Congratulations, you're all set to generate your custom JSON data!

### Configuration

Our project structure is designed for simplicity and efficiency:

- **`/src/schema/`**: This directory houses your JSON schemas. Here, you define the structure, types, and volume of your desired mock data.
- **`/src/generator/`**: This area is reserved for the json-schema-faker configurations. Utilize our provided templates or craft your own to generate the necessary JSON files.

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







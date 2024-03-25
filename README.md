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

### Execution

To breathe life into your mock API, follow these steps:

1. Open the `package.json` file and scroll to the `"scripts"` section.
2. Customize the following scripts:
   - **`generate-mock-data`**: Specify the path to your json-schema-faker generator file.
   - **`prestart-mockapi`**: This script generates the JSON data file.
   - **`start-mockapi`**: Define the path to the generated JSON data and the port for your mock server.
3. Launch your mock API with:
   ```sh
   npm run start-mockapi



## Performance and Scalability

Our mock API tool has been rigorously tested to ensure it can handle extensive data generation tasks with ease. It's capable of fabricating up to 1,000,000 precise and versatile JSON data entries, making it an ideal solution for testing and development scenarios that require substantial volumes of data. This performance benchmark underscores our commitment to supporting developers in high-volume data simulation needs, ensuring reliability and efficiency even under demanding conditions.


## How to contribute and ask questions

### Contribute
interested in contributing? all you have to do is fork this repository, make your changes and make a pull request, i will review your changes and if it's alright, it will be merged.

### Questions?
Are you curious about a thing or two concerning this project and you want to clear things up?? please send me an [email](mailto:andreyhuey777@gmail.com)







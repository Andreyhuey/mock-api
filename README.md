# Mock API

## Introduction

This project serves as a robust solution for front-end developers in need of quick and reliable mock API services. Born from the necessity to bridge the gap between UI development and back-end readiness, it utilizes the strengths of [faker-js](https://fakerjs.dev/guide/localization.html#available-locales), [json-schema](https://json-schema.org/learn/getting-started-step-by-step), [json-schema-faker](https://www.npmjs.com/package/json-schema-faker), and [json-server](https://www.npmjs.com/package/json-server) to fabricate precise and versatile JSON data. Whether you're crafting a dynamic interface or testing feature completeness, this tool ensures your development never skips a beat.

## Motivation

The struggle to acquire mock testing data is a common pain point for software developers. This project arose from a real-world experience where a lack of readily available backend APIs stalled progress on a freelance project. Existing tools like faker-js provided realistic data generation, but integrating them with data validation and server capabilities required additional effort.

This Mock API project tackles this challenge head-on by offering a seamless solution. It combines the power of:

- **faker-js**: Generates realistic and diverse data sets.
- **json-schema**: Defines the structure and data types for your mock data.
- **json-schema-faker**: Creates JSON data that adheres to your defined schema.
- **json-server**: Provides a lightweight server to host your mock data, enabling easy CRUD (Create, Read, Update, Delete) operations.

This user-friendly solution empowers developers to quickly generate and serve customized mock APIs, significantly boosting development efficiency and facilitating robust testing practices.

## Installation, Configuration, Execution, Results & Tests

Embark on your journey with our mock API by following these beginner-friendly instructions:

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Execute `npm install` to install all necessary dependencies.

Congratulations, you're all set to generate your custom JSON data!

### Configuration

Our project structure is designed for simplicity and efficiency:

- **`/src/schema/`**: This directory houses your JSON schemas. Here, you define the structure, types, and volume of your desired mock data.
- **`/src/generators/`**: This area is reserved for the json-schema-faker configurations. Utilize our provided templates or craft your own to generate the necessary JSON files.

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
   ```

### Results

- **`/dist/`**: This directory contains all the JSON data generated through the execution process. It serves as the repository for your mock data, ready for use.
- Ports: The generated JSON data is hosted on a specified port. This setup allows for direct CRUD (Create, Read, Update, Delete) operations from your localhost, facilitating seamless integration and testing within your development environment.

### Tests

The Jest testing framework was utilized to thoroughly evaluate the functionalities of the json-server. The tests successfully validated GET, PUT, and DELETE operations. However, some data consistency issues (types and schema structure) were identified with POST requests. Efforts are underway to address these discrepancies.

## Performance and Scalability

This Mock API tool has undergone rigorous testing to ensure its ability to handle extensive data generation with ease. It boasts the capability of generating up to 1,000,000 precise and versatile JSON data entries, making it an ideal solution for demanding testing scenarios that require significant data volumes. This performance benchmark reflects the commitment to supporting developers with robust data simulation capabilities, guaranteeing reliable and efficient operation even under challenging conditions.

## How to contribute and ask questions

### Contribute

Your contributions are highly valued! Whether it's improving the documentation, adding new features, or fixing bugs, your help can make a significant difference. Here's how to get started:

1. **Fork the repository**: Start by forking the repository to your GitHub account. This step creates your own copy of the project, allowing you to freely experiment with changes.
2. **Make your changes**: Work on your forked version of the project. Whether it’s a small typo fix or a major addition, your contributions are welcome.
3. **Submit a pull request (PR)**: Once you're satisfied with your changes, submit a pull request. In your PR, clearly describe the changes you've made and the impact they have on the project.

Your submission will be reviewed as soon as possible. If your changes align with the project’s goals and quality standards, they will be merged into the main branch.

Looking forward to your creative and insightful contributions!

### Questions?

Curious about something concerning this project and want to clear things up? Please send me an [email](mailto:andreyhuey777@gmail.com), or feel free to open an issue in the project's GitHub issue tracker for more detailed questions or suggestions.

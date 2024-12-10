HTTP Server Example

This project demonstrates a simple HTTP server built with Node.js. The server reads environment variables, uses the dotenv package, and responds to HTTP requests with a greeting message in different languages.
Prerequisites

    Node.js
    npm (Node Package Manager)

Installation

    Clone the repository:
    bash

git clone https://github.com/MatteoMary/wad-api-lab-24.git
cd wad-api-lab-24

Install the dependencies:

npm install

Create a .env file in the root directory and add the following:

PORT=3000

Running the Server

To start the server, run:

node node-lab1/index.js

The server will start and listen on the port specified in the .env file. You should see a message in the terminal indicating that the server is running:

Server running at 3000

Usage

The server responds to all HTTP requests with a greeting message. The language of the greeting is determined by the Accept-Language header of the request. If the requested language is not supported, the server defaults to English (en).

Example request:
HTTP

GET / HTTP/1.1
Host: localhost:3000
Accept-Language: es

Example response:
HTTP

HTTP/1.1 200 OK
Content-Type: text/plain
Content-Language: es

Hola Mundo

Project Structure

    node-lab1/index.js: The main server file.
    greeting.js: Contains greeting messages in different languages.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Contributing

Contributions are welcome! Please open an issue or submit a pull request.
Contact

For any questions or suggestions, please open an issue in the repository.

This README provides an overview of the project, instructions for setting up and running the server, and information about the project structure and how to contribute.

# Translator-Azure-Backend

Backend API Documentation
This repository contains the code for a backend API developed using Express. The API provides translation functionality using the Microsoft Translator service.

Prerequisites
Node.js and npm installed on your machine.
Getting Started
Clone the repository:
git clone https://github.com/Naveenreddy-bot/Translator-Azure-Backend.git

Install the dependencies:

cd Translator-Azure-Backend
npm install


Set up the environment variables:

Create a .env file in the root directory.

Add the following content to the .env file:

makefile .env
API_KEY=your-api-key


Replace your-api-key with your Microsoft Translator API key.

Start the server: npm run start


The server will start running at http://localhost:3001.

API Endpoints Translate

Endpoint: /translate

*** This is will only convert in Hindi ***

Method: POST

Request Body:

json
{
  "text": "Enter the text to be translated in Hindi"
}

Response:

json
{
  "translation": "Translated text"
}

The translation field contains the translated text in the Hindi language.

To Check in Postman follow this:

<img width="895" alt="image" src="https://github.com/Naveenreddy-bot/Translator-Azure-Backend/assets/123338659/30319f82-68fb-4196-8b78-fcd5b3152785">

<img width="895" alt="image" src="https://github.com/Naveenreddy-bot/Translator-Azure-Backend/assets/123338659/30319f82-68fb-4196-8b78-fcd5b3152785">

Contributing
Contributions are welcome! If you find any issues or want to add new features to the API, feel free to open a pull request.

License
This project is licensed under the MIT License.




Contributing
Contributions are welcome! If you find any issues or want to add new features to the API, feel free to open a pull request.

License
This project is licensed under the MIT License.









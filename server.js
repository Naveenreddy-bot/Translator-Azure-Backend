const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/translate', (req, res) => {
    console.log("here");
    const apiKey = process.env.API_KEY;
  const endpoint = "https://api.cognitive.microsofttranslator.com/translate";
  const toLanguage = "hi"; // Change this to the target language you want to translate to

  // Check if the API key is provided
  if (!apiKey) {
    res.status(500).json({ error: 'API key not found' });
    return;
  }

  const headers = {
    "Ocp-Apim-Subscription-Key": apiKey,
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Region": "eastus"
  };
  const body = [{ text: req.body.text }];
  const params = new URLSearchParams({
    "api-version": "3.0",
    "to": toLanguage
  });

  fetch(`${endpoint}?${params}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(result => {
      const translatedText = result[0].translations[0].text;
      console.log("text translated",translatedText);
      res.json({ translation: translatedText });
    })
    .catch(error => {
      console.error('Translation error:', error);
      res.status(500).json({ error: 'Translation failed' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

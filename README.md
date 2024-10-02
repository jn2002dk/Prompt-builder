
![PBLogo](https://github.com/user-attachments/assets/17892e55-5bb1-4b5e-9f98-4d87dc703539)

Prompt builder is a browser extension that generates random or controlled prompts, using a combination of keywords selected from dropdowns and Mistral AI

To install it, download the archive or clone the repo, enable developer mode in your browser and under manage extensions, select load unpacked extension. In the file dialog, select the root directory of the extension

The data for the dropdowns and the random prompt generation is stored in data.json and randompromptdata.json

You will need an API key for Mistral. Go to https://mistral.ai/ and create an account. They have a free tier API which was used to develop this extension and works great for prompt generation. You can also use other AI APIs but be aware that you may need to change some things in the javascript functions that calls the API if you change provider

Once you have an API key, open the api.json file and put your API key in the api_key item

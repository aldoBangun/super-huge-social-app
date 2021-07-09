# Tweetbookgram App

## Disclaimer

This app is supposed to learning only.


## Lesson i got thus far

- I think we should define our routes first. (In this case if you are working on your personal project solo)

- Don't have to use `.env` file to hide APIKEY here on Front-End app, instead use something like what's explained on this [video tutorial](https://www.youtube.com/watch?v=2J3xbMkH2K4)

- [Tailwindcss](https://tailwindcss.com/) is such an awesome tool. I have to learn more about it and avoid some hacking on my components.

## Installation

1. Install dependencies `npm install`
2. Create `apiconfig.js` file on your source folder: `./src/apiconfig.js` and paste this on it:

```javascript
   const API_URL = 'replace-with-your-API-url';
   const API_KEY = 'replace-with-your-API-key';
   export default { API_URL, API_KEY }
```

3. Run development mode `npm run serve` or production mode `npm run build`

---

> *If you see this message. that means this project isnt't finished yet. Hence, it's not ready for production!*

---

Author: [Aldo Bangun](https://facebook.com/aldopunk3)
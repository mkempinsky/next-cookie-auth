# next-cookie-auth

### Setting up the express server: 
`npm init`

`npm i next react react-dom express`

create `server.js` with `touch server.js`

```js
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({dev});

app.prepare().then(() => {
    const server = express();

    server.listen(port, err => {
        if (err) throw err;
        console.log(`listening on PORT ${port}`);
    });
});
```
add dev script to `package.json`
```js
"scripts": {
        "dev": "node server.js"
    },
```
run `npm run dev`

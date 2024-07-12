The code is good for production. (package.json file)
  "scripts": {
    "build":"babel index.js --out-dir prd",
    "start":"npm run build && nodemon prd/index.js",
    "serve":"node prd/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  

for development
 "scripts": {
    "start":"babel index.js -w --out-dir prd",
    "dev-serve":"nodemon prd/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


to compile all files inside a folder named src
 "scripts": {
    "start":"babel src -w --out-dir prd",
    "dev-serve":"nodemon prd/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },




  

  So whatever changes we make, it get compile as per the browser can handle, and puts that in prd folder.
  It will change our adv js code to the js code which even browser can understand.

  babel use can help us to avoid the "type":"module".
  In production babel is good to use.
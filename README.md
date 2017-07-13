
## Preface
The term Universal simply means the ability to run the same code on the server, browsers, mobile devices and any other platform. [Universal Javascript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) is a term people are leaning towards these days. A lot of developers still call it Isomorphic JavaScript.

## How to use the files?

1. Clone this repo
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` for development mode
4. New browser window should open automatically.

## Notes

### 1. Issue with NODE_ENV on PC
If you are on pc you will need to type the word `SET` before the NODE_ENV in package.json.

`"prod": "npm run clean && SET NODE_ENV=production webpack -p"`

### 2. Use cross-env for MAC/PC
If you want to set NODE_ENV for both Mac and PC you can use `cross-env` like this:

`"prod": "npm run clean && cross-env NODE_ENV=production webpack -p"`
# Sample Webpack

## How to use the files?

1. Clone this repo
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` for development mode
4. New browser window should open automatically.

## Notes

### 1. Issue with NODE_ENV on PC
If you are on pc you will need to type the word `SET` before the NODE_ENV in package.json.

`"prod": "npm run clean && webpack -p"`

### 2. Use cross-env for MAC/PC
If you want to set NODE_ENV for both Mac and PC you can use `cross-env` like this:

`"prod": "npm run clean && cross-env NODE_ENV=production webpack -p"`
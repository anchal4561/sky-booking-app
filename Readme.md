Backend installation packages->
npm i express cors dotenv mongodb mongoose
npm i @types/cors @types/express @types/node ts-node typescript nodemon
npm i bycryptjs jsonwebtoken

npm i @types/bycryptjs @types/jsonwebtoken -- save dev

npm i cookie-parser
package.json->
"dev":"nodemon"


Frontend-> npm create vite@latest

For tailwind css installation-> npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
add this in talwind.config.js->
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

index.css-> 
@tailwind base;
@tailwind components;
@tailwind utilities;

npm i react-query


Mongodb->

create a project-> database->
build->
free version-> name->

create
useranme password

craete user->

connect from-> local env
my ip address-> finish close
database-> connect-> driver->
 copy link url->

 .env file create->


// Deployment steps
// create tsconfig in backend->
npx tsc --init

tsconfig-> make chnage 
 "compilerOptions": {
    "outDir": "./dist",
 }

add this below in package.json ->
 "scripts": {
    "dev": "nodemon src/index.ts",
    "build":"npm install && npx tsc",
    "start":"node ./dist/index.js"
  },

  run this commands
  above and 
  npm run
  npm start

  Frontend->
  npm run build

  go to backend-> 
  app.use(express.static(path.join(__dirname,"../../frontend/dist")));
 add in the src-> index.js 


 github  login->
 create repo->
 main Folder->
git init

create new file .gitignore

node_modules
.env
.env.e2e
.vscode
dist 

add above

git status command
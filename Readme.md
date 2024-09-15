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

git add.
git commit -m "comment"
git branch -m main
git remote add origin https://github.com/anchal4561/sky-booking-app.git
git push -u origin main


go to  mongo db -> add ips -> Render.com IPs to add to MongoDB:
3.75.158.163
3.125.183.140
35.157.117.28
 and own ip

 go to render.com -> gmail login-> dashboard-> select webservice->

 build command-> cd Frontend && npm install && npm run build  && cd ../Backend && npm run build

start command-> cd Backend && npm start
 add env variables-> and 
  NODE_VERSION :"current version no"

  click deploy services?
  check logs


  Cloudinary setup=>
  cloudinary.com-> login->
  media library-> uploaded images

  code-> backend-> 
  npm i cloudinary

  add env file->
  cloudname from site-> account
  key => access key in nav bar-> generate->
  CLOUDINARY_CLOUD_NAME=djfvcf0eg
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

npm i multer  in backend-> handles file uploads by processing multipart/form-data

npm i --save-dev @types/multer

in route->
const storage=multer.memoryStorage();



//react-icon
npm i react-icons
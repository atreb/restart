# restart

starter app using express 4, reactjs 16 and react-router 4

Taken from https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

# development
```
git clone https://github.com/atreb/restart.git
cd restart
npm i
npm run dev
```
# folder structure
- components: holds the react components
- static: holds all the static assets. static/build will have the compiled client side js
- client.js: entry point for webpack for compiling the client side js
- server.js: entry point for express server
- actions: holds the actions and action creators for redux
- reducers: holds the reducers for redux. reducers/index.js exports the combined reducer

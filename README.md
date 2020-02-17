# vue-anchor

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Vue-anchor is currently compatible with laravel. Working on it being compartible with flask and django pretty soon. It's simple. Find the .env.example file, rename it to .env and edit the file by adding your laravel(using passport) CLIENT_ID, CLIENT_SECRET, and your API_DOMAIN
eg
VUE_APP_NAME="My_example"
VUE_APP_DEBUG=true

#API
VUE_APP_CLIENT_ID=1
VUE_APP_CLIENT_SECRET=this_is_my_secret_key
VUE_APP_API_DOMAIN="http://localhost:8000"



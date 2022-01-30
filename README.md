# surfy-api-nodejs
surfy api nodejs


# api reference

https://app.surfy.pro/apidocs/index.html

# video

[![Surfy API v1](https://i3.ytimg.com/vi/2My2O-EByqw/maxresdefault.jpg)](https://www.youtube.com/watch?v=2My2O-EByqw


# setup the api credentials 

- create an api user https://app.surfy.pro/tenant/apiUsers/views/list
- associate your api user to a role inside surfy


# run the code

create a .env file
add 
```
API_CLIENT_ID=<tenant code>
API_CLIENT_SECRET=<your password>
```

build & run the project

```
yarn
yarn dev:build
yarn dev:start
```

check file src/index.ts for code sample

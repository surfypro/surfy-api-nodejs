# surfy-api-nodejs
surfy api nodejs


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

## apartment-api

https://apartment-service-api.herokuapp.com/

## route:

users:

- /api/users/registration 'POST';
- /api/users/login 'POST';
- /api/users/logout 'POST';
- /api/users/avatar 'PATCH';

apartment:

- /api/apartment/ 'GET' --get all apartments;
- /api/apartment/:id 'GET'-- get by id;
- /api/apartment/ 'POST' -- create apartment;
- /api/apartment/:id 'PUT' --update apartment by id;
- /api/apartment/:id 'PATCH' --update apartment by id;
- /api/apartment/:id 'DELETE' --remove apartment by id;

## shema:

user :

- name --String;
- email --String,required;
- password --String,required;
- avatar --String;

apartment :

- title --String,required;
- description --String,required;
- image --String;
- rating --String;
- price --String;

functionality:

- CRUD private collection apartment;
- user signup login logout;
- add user avatar;

### use libs:

- mongodb;
- mongoose;
- morgan;
- joi;
- express;
- dotenv;
- cors;
- cross-env;
- jsonwebtoken;
- passport;
- passport-jwt;
- bcryptjs;
- helmet;
- express-rate-limit;
- multer;
- gravatar;
- jimp;

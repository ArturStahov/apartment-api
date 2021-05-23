## apartment-api

https://apartment-service-api.herokuapp.com/

## route:

users:

- /api/users/registration 'POST';
- /api/users/login 'POST';
- /api/users/logout 'POST';
- /api/users/avatar 'PATCH';

===================================================================================
example request for registration user:

- body request

```javascript
{
    "name":"user_name",     optional
    "email":"user_email@email.com",   required
    "password":"user_password min length 8 symbols"  required
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "60a749c0a611ee001c601c92",
        "email": "test@email.com",
        "name": "test",
        "avatar": "https://s.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d?s=250",
    }
}
```

==================================================================================
example request for login user:

- body request

```javascript
{
    "email":"user_email@email.com",   required
    "password":"user_password min length 8 symbols"  required
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "60a749c0a611ee001c601c92",
        "email": "test@email.com",
        "name": "test",
        "avatar": "https://s.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d?s=250",
        "token": "token sdgbjjbndvbsdvsdv234"
    }
}
```

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

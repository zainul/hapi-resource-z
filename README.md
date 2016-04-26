hapi-resource
=============

This is a resource function created for hapi.js to reduce the amount of boilerplate code when writing hapi routes.
this package include plural (s/ies) feature

###INSTALLATION

`npm install hapi-resource-z`

##USAGE

Given an API controller:
```javascript
const joi             = require('joi');
```

```javascript
var PostsController = {

  index: function(request, reply) {
   ....
  },

  show: function(request, reply) {
    .....
  },

  create: function(request, reply) {
    .....
  },  
}
```
you can now write:

```javascript
server.route(
  resource({
    name: 'post',
    controller: PostsController,
    validate: payload: {
      name: joi.string().alphanum().required(),
    },
    methods: ['all', 'show', 'create', 'update', 'delete' ] // optional if not defined (by default * included)
  })
);
```

Instead of writing:

```javascript
hapiServer.route([
  {
    method : "GET",
    path : "/posts",
    handler : PostsController.index
  },
  {
    method : "GET",
    path : "/posts/{id}",
    handler : PostsController.show
  },
  ...
]);
```

You can also easily namespace your routes:

```javascript

var resource = require('hapi-resource-z');

server.route(
  resource({
    name: 'user',
    controller: UsersController,
    namespace: '/admin'
  })
);

```

is equivalent to:

```javascript
hapiServer.route([
  {
    method : "GET",
    path : "/admin/users",
    handler : UsersController.index
  },
  {
    method : "GET",
    path : "/admin/users/{id}",
    handler : UsersController.show
  },
  ...
]);
```

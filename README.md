hapi-resource
=============

This is a resource function created for hapi.js in order to in order to reduce the amount of boilerplate code when writing hapi routes.

###INSTALLATION

`npm install hapi-resource`

##USAGE

Given an API controller:

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
    controller: PostsController
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

var resource = require('hapi-resource');

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


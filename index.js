'use strict';

module.exports = function(config) {
  let plural = 's';
  let oldName = config.name;

  if(!config.namespace) config.namespace = '';

  if (config.name.substring()[config.name.substring().length - 1] == 'y') {
    oldName = config.name;
    plural = 'es';
    let replacedName = config.name.slice(0, -1) + 'i';
    config.name = replacedName;
  }

  let rest = {
    show: {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'GET',
      config: {
        handler: config.controller.show,
        description: 'Get '+oldName.replace('_', ' ') + ' by id',
        notes: 'Get all '+oldName.replace('_', ' ') + ' by id return one records',
        tags: ['api', oldName]
      }
    },
    all: {
      path: config.namespace + '/' + config.name + plural,
      method: 'GET',
      config: {
        handler: config.controller.index,
        description: 'Get all '+oldName.replace('_', ' ') + ' records',
        notes: 'Get all '+oldName.replace('_', ' ') + ' records',
        tags: ['api', oldName]
      }
    },
    create: {
      path: config.namespace + '/' + config.name + plural,
      method: 'POST',
      config: {
        handler: config.controller.create,
        description: 'Create '+oldName.replace('_', ' ') + ' ',
        notes: 'Create '+oldName.replace('_', ' ') + ' return the model',
        validate: config.validate || null,
        tags: ['api', oldName]
      }
    },
    update: {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'PUT',
      config: {
        handler: config.controller.update,
        description: 'Update '+oldName.replace('_', ' ') + ' by id',
        notes: 'Update '+oldName.replace('_', ' ') + ' by id return the model',
        validate: config.validate || null,
        tags: ['api', oldName]
      }
    },
    delete: {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'DELETE',
      config: {
        handler: config.controller.destroy,
        description: 'Delete '+oldName.replace('_', ' ') + ' by id',
        notes: 'Delete '+oldName.replace('_', ' ') + ' by id',
        tags: ['api', oldName]
      }
    }
  }

  let restMethod = config.methods || [];

  if (restMethod.length == 0) {
    restMethod = ['show', 'all', 'update', 'delete', 'create'];
  }

  var buildRoute = [];
  for (var i=0, len = restMethod.length; i < len; i++) {
    buildRoute.push(rest[restMethod[i]]);
  }

  return buildRoute;
}

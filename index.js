module.exports = function(config) {

  if(!config.namespace) config.namespace = '';

  var plural = 's';

  if (config.name.substring()[config.name.substring().length - 1] == 'y') {
    plural = 'es';
    var replacedName = config.name.slice(0, -1) + 'i';
    config.name = replacedName;
  }

  return [

    {
      path: config.namespace + '/' + config.name + plural,
      method: 'GET',
      config: {
        handler: config.controller.index,
        description: 'Get all '+config.name.replace('_', ' ') + ' records',
        notes: 'Get all '+config.name.replace('_', ' ') + ' records',
        tags: ['api']
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'GET',
      config: {
        handler: config.controller.show,
        description: 'Get '+config.name.replace('_', ' ') + ' by id',
        notes: 'Get all '+config.name.replace('_', ' ') + ' by id return one records',
        tags: ['api']
      }
    },

    {
      path: config.namespace + '/' + config.name + plural,
      method: 'POST',
      config: {
        handler: config.controller.create,
        description: 'Create '+config.name.replace('_', ' ') + ' ',
        notes: 'Create '+config.name.replace('_', ' ') + ' return the model',
        validate: config.validate || null,
        tags: ['api']
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'PUT',
      config: {
        handler: config.controller.update,
        description: 'Update '+config.name.replace('_', ' ') + ' by id',
        notes: 'Update '+config.name.replace('_', ' ') + ' by id return the model',
        validate: config.validate || null,
        tags: ['api']
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'DELETE',
      config: {
        handler: config.controller.destroy,
        description: 'Delete '+config.name.replace('_', ' ') + ' by id',
        notes: 'Delete '+config.name.replace('_', ' ') + ' by id',
        tags: ['api']
      }
    }

  ];

}

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
        handler: config.controller.index
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'GET',
      config: {
        handler: config.controller.show
      }
    },

    {
      path: config.namespace + '/' + config.name + plural,
      method: 'POST',
      config: {
        handler: config.controller.create,
        validate: config.validate || null
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'PUT',
      config: {
        handler: config.controller.update,
        validate: config.validate || null
      }
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'DELETE',
      config: {
        handler: config.controller.destroy
      }
    }

  ];

}

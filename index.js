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
      handler: config.controller.index
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'GET',
      handler: config.controller.show
    },

    {
      path: config.namespace + '/' + config.name + plural,
      method: 'POST',
      handler: config.controller.create
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'PUT',
      handler: config.controller.update
    },

    {
      path: config.namespace + '/' + config.name + plural +'/{id}',
      method: 'DELETE',
      handler: config.controller.destroy
    }

  ];

}

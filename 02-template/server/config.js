module.exports = {
  promptProps: {
    appInstance: [
      {
        name: 'appInstance',
        description: 'Enter the desired app instance name (Do not use any suffix or prefix)',
        validator: /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
        warning: 'App instance must be in kebab-case'
      }
    ],
    port: [
      {
        name: 'port',
        description: 'Enter the desired port number (for local environment)',
        validator: /^\d*$/,
        warning: 'Port must be only numbers'
      }
    ]
  }
};
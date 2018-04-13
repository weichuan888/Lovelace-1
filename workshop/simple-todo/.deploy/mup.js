module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '139.59.190.166',
      username: 'root',
      // pem: './path/to/pem'
      password: 'motdepasse'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'Todo',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://marlairbertrand.tk',
      MONGO_URL: 'mongodb://BertrandBecode:fArand0le@ds227469.mlab.com:27469/boilerplate',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
    domains: 'marlairbertrand.tk,www.marlairbertrand.tk',
    ssl: {
      // Enable let's encrypt to create free certificates
      letsEncryptEmail: 'betrand@becode.org',
      forceSSL: true
    }
  }
};

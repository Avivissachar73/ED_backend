const { connectAccountRoutes } = require('../api/account/account.routes');
const { connectAuthRoutes } = require('../api/auth/auth.routes');
const { connectActivityRoutes } = require('../api/activity/activity.routes');
const { connectSettingsRoutes } = require('../api/settings/settings.routes');
const { connectEdAppRoutes } = require('../api/ED-map/msg.routes');

module.exports = (server) => {
  const baseUrl = '/api';

  [
    connectAccountRoutes,
    connectAuthRoutes,
    connectActivityRoutes,
    connectSettingsRoutes,
    connectEdAppRoutes,
  ]
  .forEach(service => service(server, baseUrl));

  return server;
}
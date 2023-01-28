const dbService = require('../services/db.service');

const exampleData = require('./collections/example.collection.json');
const exampleCol = require('../api/example/example.service').col;

const accountData = require('./collections/account.collection');
const accountCol = require('../api/auth/auth.service').col;

const activityData = require('./collections/activity.collection');
const activityCol = require('../api/activity/activity.service').col;

const initDb = async (log = true) => {
  if (log) console.log('INSERTING DATA TO ENV:' + process.env.NODE_ENV);
  const prms = [
    dbService.insert(exampleCol, exampleData),
    dbService.insert(accountCol, accountData),
    dbService.insert(activityCol, activityData)
  ];
  const res = await Promise.all(prms);
  if (log) console.log('DONE INSERTING DATA TO ENV:' + process.env.NODE_ENV);
  return res;
};

module.exports = initDb;
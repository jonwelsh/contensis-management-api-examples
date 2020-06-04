const express = require('express');
const router = express.Router();
const Client = require('contensis-management-api').Client;
const Query = require('contensis-management-api').Query;
const Op = require('contensis-management-api').Op;
const uuidv4 = require('uuid/v4');

const groups_test = require('../examples/groups').groups_getChildGroupsByGroupName;

const users_test = require('../examples/users').users_getGroupsIncludeInherited;

/* GET home page. */
router.get('/', async function (req, res, next) {

  var client = Client.create({
    clientId: 'cdd2a6af-a205-4f16-a46a-3f5b8327f1fe',
    clientSecret: '21aa7f6f4a0b4f24b8c58837ff674980-905df0aaf6e643a1aee776cc67f5e30c-a5d2766ebe11409f897792c2b1fe3532',
    projectId: 'website',
    rootUrl: 'https://localhost:44314'
  });

  users_test(client, res);
 
});

module.exports = router;

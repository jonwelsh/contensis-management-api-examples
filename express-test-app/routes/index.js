var express = require('express');
var router = express.Router();
var Client = require('contensis-management-api').Client;

/* GET home page. */
router.get('/', function (req, res, next) {

  var client = Client.create({
    clientId: '6f8ce6e7-b2ee-45ad-9b94-2dbb05871903',
    clientSecret: '6d80c9a623ce4318bd71d52c0735d67a-4a837b1336344f63b1b24ce2dfa73945-ef09daa8d0f74b1e8e223779c392a67b',
    projectId: 'website',
    rootUrl: 'https://cms-example.cloud.contensis.com'
  });

  client.nodes.getRoot()
    .then(result => {
      if (result) {
        console.log('result: ', result);
      }
      res.render('index', { title: 'Express' });
    })



  // client.contentTypes.get('movie')

  // client.contentTypes.list()

  // client.entries.get('4b776c7b-415c-482a-be2f-9ec968745868')

  // client.entries.get({
  //   id: '4b776c7b-415c-482a-be2f-9ec968745868',
  //   version: '1.0',
  //   versionStatus: "published",
  //   language: 'en-GB'
  // })

  // client.entries.list('contensis10010CT')

  // client.entries.list({
  //   contentTypeId: 'movie',
  //   language: 'en-GB',
  //   versionStatus: "published",
  //   order: ['entryTitle', 'entryDescription'],
  //   pageOptions: {
  //     pageIndex: 0,
  //     pageSize: 50
  //   }
  // })

  // client.nodes.getRoot()

  // client.nodes.get('c31111e7-76f7-46dd-93fb-cbf81a853a37')

  // client.nodes.getByEntryId('273b8bfa-5dfe-409b-872d-95e6a72f6bc9')

  // client.nodes.getChildren('c31111e7-76f7-46dd-93fb-cbf81a853a37')

  //  client.nodes.getChildren({ id: 'c31111e7-76f7-46dd-93fb-cbf81a853a37',  language: 'fr-FR' })

  //  client.nodes.create(      
  // {  
  //   parentId: '7840f70a-b842-42ea-bfac-148a3b772ac8',
  //   "displayName": {
  //     "en-GB": "Tiger Escaped From Zoo",
  //     "fr-FR": "Tigre échappé du zoo"
  //   },
  //   "slug": {
  //     "en-GB": "tiger-escaped-from-zoo",
  //     "fr-FR": "tigre-s-est-echappe-du-zoo"
  //   },
  //   "restrictedToLanguages": [
  //     "en-GB",
  //     "fr-FR"
  //   ],
  //   "entryId": '273b8bfa-5dfe-409b-872d-95e6a72f6bc9'
  // })

  // client.nodes.update(
  //   {
  //     id: '2610eb2a-a409-4b29-aaea-ef5a6ca1086a',
  //     parentId: '7840f70a-b842-42ea-bfac-148a3b772ac8',
  //     "displayName": {
  //       "en-GB": "Tiger Escaped From Zoo v1",
  //       "fr-FR": "Tigre échappé du zoo v1"
  //     },
  //     "slug": {
  //       "en-GB": "tiger-escaped-from-zoo",
  //       "fr-FR": "tigre-s-est-echappe-du-zoo"
  //     },
  //     "restrictedToLanguages": [
  //       "en-GB",
  //       "fr-FR"
  //     ],
  //     "entryId": '273b8bfa-5dfe-409b-872d-95e6a72f6bc9'
  //   })

  // client.nodes.delete('c5049244-0c7a-4a70-b473-db1a8f0c908b')

});

module.exports = router;

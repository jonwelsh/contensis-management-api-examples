var express = require('express');
var router = express.Router();
var Client = require('contensis-management-api').Client;

/* GET home page. */
router.get('/', async function (req, res, next) {

  var client = Client.create({
    clientId: '6f8cf1e8-b2ee-49ad-9b94-2dbb05871903',
    clientSecret: '6d80c9a356ce4317bd71d92c0735d67a-4a837b1336344f63b1b24ce2dfa73945-ef09daa8d0f74b1e8e223779c392a67b',
    projectId: 'website',
    rootUrl: 'https://localhost:44314'
  });

  client.contentTypes.list({
    dataFormat: 'entry',
    versionStatus: 'latest'
  })
    .then(result => {
      if (result) {
        console.log('result: ', result);
        res.render('index', { title: 'Success' });
      }
    })
    .catch(err => {
      console.log('fetch error: ', err);
      res.render('index', { title: 'Error' });
    });

  // client.projects.get()

  // client.projects.get('test')

  // client.projects.get('test')
  // .then(result => {
  //   if (result) {
  //     console.log('result: ', result);
  //     result.id = 'test1';
  //     result.name = 'Test 1';
  //     client.projects.create(result).then(ft => {
  //       console.log('ft: ', ft);
  //       res.render('index', { title: 'Success' });
  //     });
  //   }   
  // })

  // client.projects.get('test1')
  //   .then(result => {
  //     if (result) {
  //       console.log('result: ', result);
  //       client.projects.delete(result.id).then(ft => {
  //         console.log('ft: ', ft);
  //         res.render('index', { title: 'Success' });
  //       });
  //     }     
  //   })

  // client.projects.get('test1')
  //   .then(result => {
  //     if (result) {
  //       console.log('result: ', result);
  //       result.name = 'Test 1 v1';
  //       client.projects.update(result).then(ft => {
  //         console.log('ft: ', ft);
  //         res.render('index', { title: 'Success' });
  //       });
  //     }     
  //   })

  // client.projects.list()

  // client.components.list('published')

  // client.components.get('searchable')

  // client.components.get('searchable')

  // client.components.get('searchable')
  //   .then(result => {
  //     if (result) {
  //       result.id = 'searchable1';
  //       result.name['en-GB'] = 'searchable 1';
  //       client.components.create(result)

  // client.contentTypes.list({
  //   dataFormat: 'entry',
  //   versionStatus: 'latest'
  // })

  // client.contentTypes.get('simple')
  // .then(result => {
  //   if (result) {
  //     console.log('result: ', result);
  //     let newContentType = result;
  //     newContentType.id = "simple1";
  //     newContentType.name['en-GB'] = "Simple 1";
  //     delete newContentType.version;
  //     client.contentTypes.create(newContentType).then( createResult => {
  //       console.log('createResult: ', createResult);
  //       res.render('index', { title: 'Success' });
  //     })
  //   }
  // })

  // client.components.get('searchable1')
  // .then(result => {
  //   if (result) {      
  //     client.components.delete(result.id)

  // client.components.get('searchable')
  //   .then(result => {
  //     if (result) {          
  //       client.components.invokeWorkflow(result, 'publish')

  // client.contentTypes.get('simple')
  // .then(result => {
  //   if (result) {
  //     console.log('result: ', result);
  //     let newContentType = result;
  //     newContentType.name['en-GB'] = "Simple v1";
  //     client.contentTypes.update(newContentType).then( updateResult => {
  //       console.log('updateResult: ', updateResult);
  //       res.render('index', { title: 'Success' });
  //     })
  //   } 
  // })

  // client.contentTypes.get({
  //   id: "simple",
  //   version: '2.2',
  //   versionStatus: 'published'
  // })

  // client.contentTypes.get('simple1')
  // .then(result => {
  //   if (result) {
  //     console.log('result: ', result);
  //     client.contentTypes.delete(result.id).then( updateResult => {
  //       console.log('deleteResult: ', updateResult);
  //       res.render('index', { title: 'Success' });
  //     })
  //   } 
  // })

  // client.contentTypes.get('simple')
  //   .then(result => {
  //     if (result) {
  //       console.log('result: ', result);
  //       client.contentTypes.invokeWorkflow(result, 'publish').then(updateResult => {
  //         console.log('publishResult: ', updateResult);
  //         res.render('index', { title: 'Success' });
  //       });
  //     }
  //   })


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

  //client.entries.createAsset({ "title": "Batman Begins" }, 'C:/Temp/test1.jpg', '/contensis-management-api/assets')

  // client.entries.get('5bca5bec-a401-4c80-a02a-c3ed2cf8f150').then(asset => {
  //   client.entries.updateAsset(asset, 'C:/Temp/test2.jpg')

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

  // client.nodes.setChildrenOrder(
  //   '09795671-12d5-486e-8a9d-1c4b8048fbe3',
  //   ['167ac193-c6ea-4aae-b7ce-68b26152eca5', '936b6e09-05cf-4652-8872-45c9fc99fc2c', '45bfd6a1-e8fb-44e0-a457-bf64cea5ea25'])

  // client.nodes.deleteChildrenOrder(
  //   '09795671-12d5-486e-8a9d-1c4b8048fbe3')

  // client.roles.list({ pageIndex: 1, pageSize: 2 })

  // client.roles.get('da1c235d-af39-497e-8d0d-b5a5e4f36ca1')

  // client.roles.get('da1c235d-af39-497e-8d0d-b5a5e4f36ca1')
  // .then(result => {
  //   if (result) {
  //     delete result.id;
  //     result.name['en-GB'] = result.name['en-GB'] + ' Copy';
  //     client.roles.create(result)

  
  // client.roles.get('8c5d47b0-0700-40a4-9dbd-a3d21b45bf14')
  //   .then(result => {
  //     if (result) {        
  //       result.name['en-GB'] = result.name['en-GB'] + ' v1';
  //       client.roles.update(result)

  // client.permissions.getPermissions({
  //   resourceType: 'entries',
  //   resourceId: '/b84c7a20-8819-4f90-9e73-c8e3cd5995e7',
  //   userId: -1
  // })

  // client.permissions.getPermissions({
  //   resourceType: 'assets',
  //   resourceId: '0eea2b38-e153-42c9-94de-49001becae99',
  //   userId: 36
  // })

  // client.permissions.getAuthorizationForAction({
  //   resourceType: 'entries',
  //   resourceId: 'b84c7a20-8819-4f90-9e73-c8e3cd5995e7',
  //   actionName: 'sysCreate',
  //   userId: 36
  // })

  // client.permissions.getAuthorizationForAction({
  //   resourceType: 'assets',
  //   resourceId: '0eea2b38-e153-42c9-94de-49001becae99',
  //   actionName: 'sysCreate',
  //   userId: 36
  // })
});

module.exports = router;

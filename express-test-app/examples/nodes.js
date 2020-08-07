exports.nodes_getRoot = (client, res) => {
  return client.nodes.getRoot()
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_get = (client, res) => {
  return client.nodes.get('c31111e7-76f7-46dd-93fb-cbf81a853a37')
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_getByEntryId = (client, res) => {
  return client.nodes.getByEntryId('273b8bfa-5dfe-409b-872d-95e6a72f6bc9')
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_getChildren = (client, res) => {
  return client.nodes.getChildren('c31111e7-76f7-46dd-93fb-cbf81a853a37')
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_getChildrenWithOptions = (client, res) => {
  return client.nodes.getChildren({ id: 'c31111e7-76f7-46dd-93fb-cbf81a853a37', language: 'fr-FR' })
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_create = (client, res) => {
  let node = {
    "parentId": '7840f70a-b842-42ea-bfac-148a3b772ac8',
    "displayName": {
      "en-GB": "Tiger Escaped From Zoo",
      "fr-FR": "Tigre échappé du zoo"
    },
    "slug": {
      "en-GB": "tiger-escaped-from-zoo",
      "fr-FR": "tigre-s-est-echappe-du-zoo"
    },
    "restrictedToLanguages": [
      "en-GB",
      "fr-FR"
    ],
    "entryId": '273b8bfa-5dfe-409b-872d-95e6a72f6bc9',
    "includeInMenu": true
  };
  return client.nodes.create(node)
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_update = (client, res) => {
  let node = {
    id: '2610eb2a-a409-4b29-aaea-ef5a6ca1086a',
    parentId: '7840f70a-b842-42ea-bfac-148a3b772ac8',
    "displayName": {
      "en-GB": "Tiger Escaped From Zoo v1",
      "fr-FR": "Tigre échappé du zoo v1"
    },
    "slug": {
      "en-GB": "tiger-escaped-from-zoo",
      "fr-FR": "tigre-s-est-echappe-du-zoo"
    },
    "restrictedToLanguages": [
      "en-GB",
      "fr-FR"
    ],
    "entryId": '273b8bfa-5dfe-409b-872d-95e6a72f6bc9'
  };
  return client.nodes.create(node)
    .then(result => {
      console.log('API call result: ', result);
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_delete = (client, res) => {
  return client.nodes.delete('c31111e7-76f7-46dd-93fb-cbf81a853a37')
    .then(result => {
      console.log('API call was successful ');
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.nodes_setChildrenOrder = (client, res) => {
  return client.nodes.setChildrenOrder(
    '09795671-12d5-486e-8a9d-1c4b8048fbe3',
    ['167ac193-c6ea-4aae-b7ce-68b26152eca5', '936b6e09-05cf-4652-8872-45c9fc99fc2c', '45bfd6a1-e8fb-44e0-a457-bf64cea5ea25'],
    'fr-FR')
    .then(result => {
      console.log('API call was successful');
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

exports.deleteChildrenOrder = (client, res) => {
  return client.nodes.deleteChildrenOrder('09795671-12d5-486e-8a9d-1c4b8048fbe3', 'fr-FR')
    .then(result => {
      console.log('API call was successful');
      if (res) {
        res.render('index', { title: 'Success' });
      }
      return result;
    })
    .catch(error => {
      console.log('API call error: ', error);
      if (res) {
        res.render('index', { title: 'Error' });
      }
    });
};

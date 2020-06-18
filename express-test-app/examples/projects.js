
exports.projects_get = (client, res) => {
  client.projects.get()
    .then(result => {
      console.log('API call result: ', result);
      res.render('index', { title: 'Success' });
    })
    .catch(error => {
      console.log('API call fetch error: ', error);
      res.render('index', { title: 'Error' });
    });
};

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


exports.projects_list = (client, res) => {
  const userId = "0E2879B8-FA05-4291-BC99-035259B1CE61";
  const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
  client.projects.list()
    .then(result => {
      console.log('API call result: ', result);
      res.render('index', { title: 'Success' });
    })
    .catch(error => {
      console.log('API call fetch error: ', error);
      res.render('index', { title: 'Error' });
    });
};

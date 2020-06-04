exports.groups_getById = function groups_getById(client, res) {
    client.groups.getById('{11912994-2EEB-4938-B84E-6E9C6C53C952}')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
};

exports.groups_getByName = function groups_getByName(client, res) {
    client.groups.getByName('Everyone')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_list = function groups_list(client, res) {
    client.groups.list({
        q: 'admin',
        pageOptions: { pageIndex: 1, pageSize: 5 },
        order: ['-name']
    })
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_create = function groups_create(client, res) {
    let group = {
        "name": "TestAP_1",
    };

    client.groups.create(group)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_update = function groups_update(client, res) {
    let group = {
        id: 'd5fc6d16-b18e-4abe-8172-06146213448f',
        "name": "TestAP_1",
        "description": "test"
    };

    client.groups.update(group)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_delete = function groups_delete(client, res) {
    let group = {
        id: 'd5fc6d16-b18e-4abe-8172-06146213448f',
    };

    client.groups.delete(group.id)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}


exports.groups_hasUser = function groups_hasUser(client, res) {
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    const userId = "F8B27A8F-F1E5-48EF-A5E6-19A791030C0A";
    client.groups.hasUser(groupId, userId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_addUser = function groups_addUser(client, res) {
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    const userId = "F8B27A8F-F1E5-48EF-A5E6-19A791030C0A";
    client.groups.addUser(groupId, userId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_removeUser = function groups_removeUser(client, res) {
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    const userId = "F8B27A8F-F1E5-48EF-A5E6-19A791030C0A";
    client.groups.removeUser(groupId, userId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_addChildGroup = function groups_addChildGroup(client, res) {
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    const childGroupId = "2E86F729-9632-4D87-B38F-DF017F90B5CC";
    client.groups.addChildGroup(groupId, childGroupId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_removeChildGroup = function groups_removeChildGroup(client, res) {
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    const childGroupId = "2E86F729-9632-4D87-B38F-DF017F90B5CC";
    client.groups.removeChildGroup(groupId, childGroupId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_getUsersByGroupId = function groups_getUsersByGroupId(client, res) {
    client.groups.getUsersByGroupId('{89CEE207-6F12-4D27-8693-B7693766A82D}')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
};

exports.groups_geUsersByGroupName = function groups_geUsersByGroupName(client, res) {
    client.groups.getUsersByGroupName('Everyone')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.groups_getChildGroupsByGroupId = function groups_getChildGroupsByGroupId(client, res) {
    client.groups.getChildGroupsByGroupId('{89CEE207-6F12-4D27-8693-B7693766A82D}')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
};

exports.groups_getChildGroupsByGroupName = function groups_getChildGroupsByGroupName(client, res) {
    client.groups.getChildGroupsByGroupName('System Administrators')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_getById = function users_getById(client, res) {
    client.users.getById('{24312B9F-0B66-4E6D-AEC0-6348C5B8D867}')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_getByUsername = function users_getByUsername(client, res) {
    client.users.getByUsername('zengenti')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_getByEmail = function users_getByEmail(client, res) {
    client.users.getByEmail('test@zengenti.com')
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_list = function users_list(client, res) {
    client.users.list({
        q: 'zengenti',
        pageOptions: { pageIndex: 1, pageSize: 5 },
        order: ['username']
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

exports.users_create = function users_create(client, res) {
    let user = {
        "id": "00000000-0000-0000-0000-000000000002",
        "userName": "test_jspate_1",
        "email": "james@test.com",
        "language": "de-DE",
        "title": "Mr",
        "firstName": "James",
        "lastName": "Spate",
        "avatarUrl": "http://extrodinaryPeople.com/james.spate",
        "credentials": {
            "password": "MyPassword"
        }
    };

    client.users.create(user)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_update = function users_update(client, res) {
    let user = {
        "id": "00000000-0000-0000-0000-000000000002",
        "userName": "test_jspate_1",
        "email": "james@test.com",
        "language": "de-DE",
        "title": "Mr",
        "firstName": "James",
        "lastName": "Spate",
        "avatarUrl": "http://extrodinaryPeople.com/james.spate/com"
    };

    client.users.update(user)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_delete = function users_delete(client, res) {
    let user = {
        "id": "00000000-0000-0000-0000-000000000002"
    };

    client.users.delete(user.id)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_isInGroup = function users_isInGroup(client, res) {
    const userId = "0E2879B8-FA05-4291-BC99-035259B1CE61";
    const groupId = "89CEE207-6F12-4D27-8693-B7693766A82D";
    client.users.isInGroup(userId, groupId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_isInGroups = function users_isInGroups(client, res) {
    const userId = "0E2879B8-FA05-4291-BC99-035259B1CE61";
    const groupIds = ["89CEE207-6F12-4D27-8693-B7693766A82D", "2E86F729-9632-4D87-B38F-DF017F90B5CC"];
    client.users.isInGroups(userId, groupIds)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_getGroups = function users_getGroups(client, res) {
    const userId = "0E2879B8-FA05-4291-BC99-035259B1CE61";
    client.users.getGroups(userId)
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

exports.users_getGroupsIncludeInherited = function users_getGroupsIncludeInherited(client, res) {
    const userId = "0E2879B8-FA05-4291-BC99-035259B1CE61";
    client.users.getGroups({ userId, includeInherited: true })
        .then(result => {
            console.log('API call result: ', result);
            res.render('index', { title: 'Success' });
        })
        .catch(error => {
            console.log('API call fetch error: ', error);
            res.render('index', { title: 'Error' });
        });
}

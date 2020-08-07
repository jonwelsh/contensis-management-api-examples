exports.roles_get = (client, res) => {
    return client.roles.get('c31111e7-76f7-46dd-93fb-cbf81a853a37')
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
}

exports.roles_create = (client, res) => {
    let role = {
        "name": {
            "en-GB": "Movie Editors"
        },
        "description": {
            "en-GB": "Movie editors can edit movies, but not submit or approve them"
        },
        "enabled": true,
        "permissions": {
            "entries": [
                {
                    "id": "movie",
                    "languages": ["en-GB"],
                    "actions": ["sys.update", "awaitingApproval.revoke"]
                }
            ],
            "contentTypes": []
        },
        "assignments": {
            "users": ["a.user"],
            "groups": ["Movie Editors"],
            "apiKeys": ["Movie Import"]
        }
    };
    return client.roles.create(role)
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
}

exports.roles_update = (client, res) => {
    let role = {
        "id": "71b48d24-7f65-457d-bd51-cba977b74b74",
        "name": {
            "en-GB": "Movie Editors"
        },
        "description": {
            "en-GB": "Movie editors can edit movies, but not submit or approve them"
        },
        "enabled": true,
        "permissions": {
            "entries": [
                {
                    "id": "movie",
                    "languages": ["*"],
                    "actions": ["draft.*", "awaitingApproval.revoke"]
                }
            ],
            "contentTypes": []
        },
        "assignments": {
            "users": ["a.user"],
            "groups": ["Movie Editors"],
            "apiKeys": ["Movie Import"]
        }
    };
    return client.roles.update(role)
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
}

exports.roles_delete = (client, res) => {
    return client.roles.delete('c31111e7-76f7-46dd-93fb-cbf81a853a37')
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
}

exports.roles_list = (client, res) => {
    return client.roles.list({ pageIndex: 1, pageSize: 5 })
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
}

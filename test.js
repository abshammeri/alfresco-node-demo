var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi({ username:'admin', password:'admin', host:'http://139.162.162.203'});

this.alfrescoJsApi.login().then(function (data) {
    console.log('API called successfully Login ticket:' + data);
}, function (error) {
    console.error(error);
});


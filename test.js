var AlfrescoApi = require('alfresco-js-api');


this.alfrescoJsApi = new AlfrescoApi({ ticket:'TICKET_1bcb6244507268b8f5247e7ea4f3371dd7caa30e', host:'http://139.162.162.203'});
this.alfrescoJsApi.nodes.createFolder('newFolderNameX').then(function (data) {
    console.log('The folder is created in root');    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});

// this.alfrescoJsApi.login().then(function (data) {
//     console.log('API called successfully Login ticket:' + data);
// }, function (error) {
//     console.error(error);
// });


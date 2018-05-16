
var conf = {
    web : {
        host : '0.0.0.0',
        port : '10102',
        method : 'session',
        views : {},
        static : {}
    },
    database : {
        api : 'mongodb',
        host : '0.0.0.0',
        port : '12345',
        schema : 'medscope_prod2',
        auth : false,
        username : '',
        password : ''
    },
    queue: {
        host: '0.0.0.0',
        port: 5672,
        login: 'guest',
        password: 'guest',
        vhost: '/'
    },
    'session' :{
        store : 'redis',  // redis | inmemory
        host : '0.0.0.0',
        port : '6379'
    },
    //twilio : {
    //    account_sid : "AC6a25129bd709942e29dbda36b95b5921",
    //    auth_token : "75f860607ba6dc109f01d74fe3f18ceb",
    //    accountNumber : '+18627666646',
    //    service : 'twilio'
    //}
};

module.exports = conf;
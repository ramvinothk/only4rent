/**
 * Created by thilagam on 28/9/15.
 */
var conf = {
    web: {
        host: "0.0.0.0",
        port: "8200",
        method: "session",
        views: {},
        static: {}
    },
    database: {
        api: 'mongodb',
        host: '0.0.0.0',
        port: '12345',
        schema: 'teezle_web',
        auth: false,
        username: '',
        password: ''
    },

    'session': {
        store: 'inmemory', // redis | mongo | inmemory //TODO mongo not implemented
        //host: '10.1.10.47',
        host: '0.0.0.0',
        port: '6379'
    }
};

module.exports = conf;

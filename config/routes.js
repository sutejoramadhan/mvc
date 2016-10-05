var frontend = require('../app/controllers/frontend');

module.exports = function(app) {

    app.get('/', frontend.index);
    app.get('/index.pug', frontend.index);

    app.get('/test-12-3', frontend.test);

}

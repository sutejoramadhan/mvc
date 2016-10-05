var frontend = require('../app/controllers/frontend');

module.exports = function(app) {

    app.get('/', frontend.index);

}

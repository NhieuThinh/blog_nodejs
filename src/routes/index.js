const newsRouter = require('./news');
const siteRouter = require('./sites');


function route (app){
    app.get('/', siteRouter )

      app.get('/news', newsRouter)

      app.get('/search', siteRouter)
}

module.exports= route;

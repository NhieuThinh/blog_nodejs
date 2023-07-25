class NewsController {

    // [GET] /news
    index(req, res){
        res.render('news');
    }
    slug(req, res){
        res.send('SLUG PAGEEE');
    }

}

module.exports = new NewsController;
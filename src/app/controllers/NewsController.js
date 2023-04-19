class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('halo');
    }
}

module.exports = new NewsController();

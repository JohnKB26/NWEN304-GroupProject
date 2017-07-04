module.exports = function (app, pool) {
    // Get request for search box
    app.post('/search', function (req, res) {

        var keyword = req.body.task;
        console.log(keyword);

        if (!keyword) {
            console.log('nothing entered');
            res.redirect('/');
            return;
        }

        pool.connect()
            .then((client, err) => {
                if (err) {
                    console.log(err);
                    client.release();
                    return;
                }

                client.query("SELECT * FROM collections WHERE LOWER (item_name) LIKE LOWER('%"+keyword+"%');"
                , function (err,results) {
                        client.release();
                        if (err) {
                            res.redirect('/');
                            return;
                        }

                        console.log('EXIT SEARCH');

                        res.json(results.rows);
                    });
            });


    });

    app.post('/search_womans', function (req, res) {

        var keyword = req.body.task;
        console.log(keyword);

        if (!keyword) {
            console.log('nothing entered');
            res.redirect('/');
            return;
        }

        pool.connect()
            .then((client, err) => {
                if (err) {
                    console.log(err);
                    client.release();
                    return;
                }

                client.query("SELECT * FROM collections WHERE LOWER (item_name) LIKE LOWER('%"+keyword+"%') AND " +
                    "(item_category) LIKE 'womens';"
                    , function (err,results) {
                        client.release();
                        if (err) {
                            console.log(err);
                            res.redirect('/');
                            return;
                        }

                        console.log('EXIT SEARCH');

                        res.json(results.rows);
                    });
            });
    });

    app.post('/search_mens', function (req, res) {

        var keyword = req.body.task;
        console.log(keyword);

        if (!keyword) {
            console.log('nothing entered');
            res.redirect('/');
            return;
        }

        pool.connect()
            .then((client, err) => {
                if (err) {
                    console.log(err);
                    client.release();
                    return;
                }

                client.query("SELECT * FROM collections WHERE LOWER (item_name) LIKE LOWER('%"+keyword+"%') AND " +
                    "(item_category) LIKE 'mens';"
                    , function (err,results) {
                        client.release();
                        if (err) {
                            console.log(err);
                            res.redirect('/');
                            return;
                        }

                        console.log('EXIT SEARCH');

                        res.json(results.rows);
                    });
            });
    });

    app.post('/search_kids', function (req, res) {

        var keyword = req.body.task;
        console.log(keyword);

        if (!keyword) {
            console.log('nothing entered');
            res.redirect('/');
            return;
        }

        pool.connect()
            .then((client, err) => {
                if (err) {
                    console.log(err);
                    client.release();
                    return;
                }

                client.query("SELECT * FROM collections WHERE LOWER (item_name) LIKE LOWER('%"+keyword+"%') AND " +
                    "(item_category) LIKE 'kids';"
                    , function (err,results) {
                        client.release();
                        if (err) {
                            console.log(err);
                            res.redirect('/');
                            return;
                        }

                        console.log('EXIT SEARCH');

                        res.json(results.rows);
                    });
            });
    });
}
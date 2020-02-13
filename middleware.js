function setResHeader(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
}
function setHeaderContent(req, res, next) {
    if (req.url.includes('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    // if (req.url.includes('.js')) {
    //     res.setHeader('Cache-Control', 'public, max-age=3600');
    // }
    next();
}

module.exports = {
    setResHeader,
    setHeaderContent
}
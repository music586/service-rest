var express = require('express')
var router = express.Router();

router.get('/v1', function(req, res) {
    res.sendStatus('202');
    res.json({a:1,b:2});
})


module.exports = router;
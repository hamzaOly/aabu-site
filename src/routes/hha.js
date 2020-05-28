const
    express = require("express"),
    router = express.Router(),
    path = require('path'),
    routeBase = '/hha';

router.get(routeBase,(req,res) =>
{
    res.send('../views/hha.html');
});



module.exports = router;
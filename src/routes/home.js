const
    express = require("express"),
    router = express.Router(),
    path = require('path'),
    routeBase = '/home';

router.get(routeBase,(req,res) =>
{
    res.render('./home/home');
});



module.exports = router;
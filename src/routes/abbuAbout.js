const express = require('express');
const app = express();
const router = express.Router();
const routeBase = '/abbuabout';
//////////////////////////////////
//about page
router.get(routeBase,function (req,res)
{
    res.render('./about/about');
});
/////////////////////////////////////////
//about UniversityAdministration page
router.get(routeBase + '/UniversityAdministration',function (req,res)
{
    res.render('./about/University_Administration');
});
////////////////////////////
//BoardOfTrustees page
router.get(routeBase + '/BoardOfTrustees',function (req,res)
{
    res.render('./about/BoardOfTrustees');
});
/////////////////////////////////
//DeansCouncil page
router.get(routeBase + '/DeansCouncil',function (req,res)
{
    res.render('./about/DeansCouncil');
});
////////////////////////////////////
//general_information page
router.get(routeBase + '/general_information',function (req,res)
{
    res.render('./about/general_information');
});
////////////////////////////////////
//mission page
router.get(routeBase + '/mission',function (req,res)
{
    res.render('./aboutmission');
});
/////////////////////////////////
//goal page
router.get(routeBase + '/goal',function (req,res)
{
    res.render('./aboutgoal');
});
/////////////////////////////////
//university_values page
router.get(routeBase + '/university_values',function (req,res)
{
    res.render('./aboutuniversity_values');
});
/////////////////////////////////
//departments page
router.get(routeBase + '/departments',function (req,res)
{
    res.render('./aboutdepartments');
});
/////////////////////////////////
//gap page
router.get(routeBase + '/gap',function (req,res)
{
    res.render('gap');
});
module.exports = router;

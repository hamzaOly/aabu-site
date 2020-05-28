const
    express = require("express"),
    router = express.Router(),
    routeBase = '/academic';

router.get(routeBase + '/IT',(req,res) =>
{
    res.render('IT');
});

router.get(routeBase + '/FacultyOfEconomics',(req,res) =>
{
    res.render('FacultyOfEconomics');
});

router.get(routeBase + '/PrincessSalmaFacultyOfNursing',(req,res) =>
{
    res.render('PrincessSalmaFacultyOfNursing');
});
router.get(routeBase + '/FacultyOfEngineerings',(req,res) =>
{
    res.render('FacultyOfEngineerings');
});
router.get(routeBase + '/FacultyOfEducationalSciences',(req,res) =>
{
    res.render('FacultyOfEducationalSciences');
});
router.get(routeBase + '/InstituteOfEarthandEnvironmentalSciences',(req,res) =>
{
    res.render('InstituteOfEarth');
});
router.get(routeBase + '/DeanShipOfGraduateStudies',(req,res) =>
{
    res.render('DeanShipOfGraduateStudies');
});
router.get(routeBase + '/DeanShipOfStudentAffairs',(req,res) =>
{
    res.render('DeanShipOfStudentAffairs');
});







///////////////////////

router.get(routeBase + '/facultyOfSharia',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/FacultyOfLaw',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/FacultyOfArtsAndHumanities',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/FacultyofScience',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/FacultyOfAviation',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/BaytAl-Hekmah',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/DeanShipOfAcademicResearch',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/HigherInstituteOfIslamicStudies',(req,res) =>
{
    res.render('noEnglish');
});
router.get(routeBase + '/TheInstituteOfAstronomyAndSpaceSciences',(req,res) =>
{
    res.render('noEnglish');
});
module.exports = router;
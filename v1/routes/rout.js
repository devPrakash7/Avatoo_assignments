
const expres = require("express");
const { calculate, insertOrUpdate } = require("../Controller/user.controller");
const router = expres.Router();


router.post('/calculation', calculate);
router.post('/users', insertOrUpdate);


module.exports = router;
const express = require('express');
const router= require('express-promise-router')();
const usersController = require('../controllers/users');
const {validateParam, validatebody, schemas} = require('../helpers/routeHelpers');

router.route('/')
    .get( usersController.index)
    .post(validatebody(schemas.userSchema), usersController.newUser);
router.route('/:userId')
    .get(validateParam(schemas.idSchema,'userId'),usersController.getUser)
    .put(validateParam(schemas.idSchema,'userId'), validatebody(schemas.userSchema), usersController.updateUser);

module.exports = router;
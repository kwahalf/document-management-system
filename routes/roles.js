const express = require('express');
const router= require('express-promise-router')();
const rolesController = require('../controllers/roles');
const {validateParam, validatebody, schemas} = require('../helpers/routeHelpers');

router.route('/')
    .get( rolesController.index)
    .post(validatebody(schemas.roleSchema), rolesController.newRole);
router.route('/:userId')
    .get(validateParam(schemas.idSchema,'userId'),rolesController.getRole)
    .put(validateParam(schemas.idSchema,'userId'), validatebody(schemas.roleSchema), rolesController.updateRole);

module.exports = router;
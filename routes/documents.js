const express = require('express');
const router= require('express-promise-router')();
const documentsController = require('../controllers/documents');
const {validateParam, validatebody, schemas} = require('../helpers/routeHelpers');

router.route('/')
    .get(documentsController.index)
    .post(validatebody(schemas.documentSchema), documentsController.newDocument);
router.route('/:documentId')
    .get(validateParam(schemas.idSchema,'documentId'), documentsController.getDocument)
    .put(validateParam(schemas.idSchema,'documentId'), validatebody(schemas.documentSchema), documentsController.updateDocument);

module.exports = router;
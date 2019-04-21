const express = require("express");
const router =  express.Router();
const personController = require("../controllers/person.controller");

router
   .route('/person')
   .post(personController.postdata);

router
   .route('/personsignin')
   .post(personController.sign);


   module.exports={
       personRouter:router
   };

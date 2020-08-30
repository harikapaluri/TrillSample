'use strict';

var express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
var router = express.Router();

// POST Request for Adding Numbers
//Route for AddNumbers
router.post("/",
[
body("firstNumber").notEmpty().withMessage("Value is required").isInt().withMessage("Invalid Number value"),
  body("secondNumber").notEmpty().withMessage("Value is required").isInt().withMessage("Invalid Number value"),
  
],
 function(req, res){

 	//Validation check
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }else{
   	var json={
   		"success":true,
   		"firstNumber":req.body.firstNumber,
   		"secondNumber":req.body.secondNumber,
        "result":req.body.firstNumber+req.body.secondNumber,  
   	}
   	res.json(json);
   }
	
});


module.exports = router;

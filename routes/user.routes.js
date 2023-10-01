const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verify } = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');




router.get('/details/:user_id', userController.getUserDetails);


router.put('/update',verifyToken, userController.updateUserDetails);


router.get('/image/:user_id', userController.getUserImage);


router.post('/insert',  userController.insertUser);


router.delete('/delete/:user_id',userController.deleteUser);

module.exports = router;

const router = require('express').Router();

const { userController } = require('../controller/');
const mdlwr = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers); // дістати усіх
router.post('/', mdlwr.isBodyValidCreate,mdlwr.userNormalizator, mdlwr.checkIsEmailUnique, userController.createUser); // створити нового

router.get('/:userId', mdlwr.checkIsUserExist, userController.getUserById); // дістати одного
router.put('/:userId', mdlwr.isBodyValidUpdate, mdlwr.userNormalizator, mdlwr.checkIsUserExist, userController.updateUser); // оновити одного
router.delete('/:userId', userController.deleteUserById); // видалити одного

module.exports = router;

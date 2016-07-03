import {login, logout, register} from '../controllers/user';

import {Router} from 'express';

export const router = Router();

router.route('/login')
  .post(login);

router.route('/logout')
  .all(logout);

router.route('/register')
  .post(register);

/*
router.route('/:userId')
  .get(userCtrl.get)
  .put(validate(paramValidation.updateUser), userCtrl.update)
  .delete(userCtrl.remove);

router.route('/')
  .get(userCtrl.list)
  .post(validate(paramValidation.createUser), userCtrl.create);
*/
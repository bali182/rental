import {Router} from 'express';
import {router as userRouter} from './user';
import {success} from '../utils/response-utils';

export const router = Router();

router.get('/health-check', (req, res) =>
  res.json(success('OK'))
);

router.use('/user', userRouter);
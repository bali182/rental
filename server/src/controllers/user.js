import passport from 'passport';
import {error, success} from '../utils/response-utils';

export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      res.json(401, error(err));
    } else {
      res.json(success(user));
    }
  })
}

export const logout = (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.json(success('Logged out'));
}

export function register(req, res, next) {

}
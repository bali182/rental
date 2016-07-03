import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

export const localStrategy = new LocalStrategy((user, pass, done) => {
  if (user !== 'foo' && pass !== 'bar') {
    done(null, false, { message: 'Incorrect credentials. Try user: "foo" password: "bar"' });
  } else {
    done(null, { id: 1, user: 'foo', pass: 'bar' });
  }
});

export const serializeUser = (user, done) => done(null, user)
export const deserializeUser = (user, done) => done(null, user)

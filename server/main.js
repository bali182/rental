import express, {Router} from 'express';
import passport, {} from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import {readFileSync} from 'fs';

const config = JSON.parse(readFileSync('../config.json'));

passport.use(new LocalStrategy((user, pass, done) => {
  if (user !== 'foo' && pass !== 'bar') {
    done(null, false, { message: 'Incorrect credentials. Try user: "foo" password: "bar"' });
  } else {
    done(null, { id: 1, user: 'foo', pass: 'bar' });
  }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const app = express();

app.use(express.static('../public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/', (request, response) =>
  response.json({ message: 'Hello World', user: request.user })
);

app.get('/api/login', passport.authenticate('local'), (request, response) =>
  response.json({ login: 'OK', user: request.user })
);

app.listen(8080);
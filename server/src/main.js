import express, {Router} from 'express';
import passport, {} from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import {readFileSync} from 'fs';
import {join} from 'path';

import {deserializeUser, serializeUser, localStrategy} from './auth';
import {router} from './routes/index';

import {Rentable} from './model/models';

const config = JSON.parse(readFileSync(join(__dirname, '../../config.json')));
const app = express();

passport.use(localStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

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

app.use('/api', router);

app.listen(8080);
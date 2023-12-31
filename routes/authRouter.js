/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const passport = require('passport');

const { createUser, loginUser, checkAuth } = require('../controller/Auth');

const router = express.Router();
// /auth is laready added in base path
router
  .post('/signup', createUser)
  .post('/login', passport.authenticate('local'), loginUser)
  .get('/check', passport.authenticate('jwt'), checkAuth);

exports.router = router;

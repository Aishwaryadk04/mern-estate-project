import jwt from 'jsonwebtoken';

import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
     // to get token
  const token = req.cookies.access_token;
// verify token -error
  if (!token) return next(errorHandler(401, 'Unauthorized'));
// if there is a token check token is correct or not
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));
// if no errror send user id  to next user and save
    req.user = user;
    // go to next session- update user
    next();
  });
};
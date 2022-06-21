import express from 'express';
import {
  login,
  userDetails,
  userProfile,
  userChangePassword,
  forgotPassword,
  linkVerified,
  smtpEmailTest,
  resetPassword,
  signup,
  getCorporate,
  getUniversities,
  checkMail,
} from './../../controllers/frontend';
import {
  LoginValidation,
  ProfileValidation,
  ChangePasswordValidation,
  ForgotPassValidation,
  ResetPasswordValidation,
  SignupValidation,
} from '../../validations';
import { ValidateUserToken } from '../../common';
const AuthRouter: express.Router = express.Router();

AuthRouter.post('/signup', SignupValidation, signup);
AuthRouter.post('/smtpEmailTest', smtpEmailTest);
AuthRouter.get('/link-verified', linkVerified);
AuthRouter.get('/corporation', getCorporate);
AuthRouter.get('/universities', getUniversities);
AuthRouter.post('/login', LoginValidation, login);
AuthRouter.get('/details', ValidateUserToken, userDetails);
AuthRouter.put('/update', ValidateUserToken, ProfileValidation, userProfile);
AuthRouter.put(
  '/change-password',
  ValidateUserToken,
  ChangePasswordValidation,
  userChangePassword
);
AuthRouter.post('/forgot-password', ForgotPassValidation, forgotPassword);
AuthRouter.post('/reset-password', ResetPasswordValidation, resetPassword);
AuthRouter.post('/check-mail', checkMail);

export default AuthRouter;

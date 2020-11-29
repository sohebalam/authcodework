import express from "express";
import Router from "express-promise-router";
import passport from "passport";
import passportConf from "../passport.js";
import { signUp, signIn, secret } from "../controllers/userCont.js";

const router = Router();

const passportSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/signup").post(signUp);

router.route("/signin").post(passportSignIn, signIn);

router.route("/secret").get(passportJWT, secret);

export default router;
